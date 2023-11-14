import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
    //프로그램적인 강제적 네비게이션 코드가 필요시 ex) 버튼 클릭 시 해당 페이지로 이동
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/products');
    };

    return (
        <>
            <h1>My Home Page</h1>
            <p>
                Go to <Link to="products">the list of products</Link>.
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </>
    );
}

export default HomePage;