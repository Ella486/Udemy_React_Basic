import { json, redirect } from 'react-router-dom';

import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw json(
      {message: 'Unsupported mode. 미지원 모드입니다.'},
      {status: 422},
    );
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  /**
   * 422 Unprocessable Entity (WebDAV)
   * - 요청은 잘 만들어졌지만, 문법 오류로 인하여 따를 수 없습니다.
   * 
   * 401 Unauthorized(미승인)
   * - 이 응답의 의미는 '비인증(unauthenticated)'를 의미
   * - 클라이언트는 요청한 응답을 받기 위해서 반드시 스스로를 인증해야한다.
   * 
   * 500 Internal Server Error
   * - 웹 사이트 서버에 문제가 있음을 의미하지만 서버는 정확한 문제에 대해 더
   * 구체적으로 설명할 수 없다.
   */
  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json(
      { message: 'Could not authenticate user. 사용자 인증 불가'},
      { status: 500 },
    );
  }

  const resData = await response.json();
  const token = resData.token;

  /**
   * - 로컬 저장소에 접근해서 새 항목을 설정하고 해당 토큰을 브라우저 저장소에 저장.
   * - 그리고 토큰 키를 부여하고 추출한 토큰을 여기에 저장.
   */
  localStorage.setItem('token', token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/');

}