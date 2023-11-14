import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';

import classes from './NewsletterSignup.module.css';

/**
 * fetcher
 * - 실제로 액션을 트리거 하지만 라우트 전환을 시작하지 않음.
 * - 액션을 트리거하거나 loader 함수의 도움으로 loader를 트리거하지만
 * 실제로 그 loader가 속한 페이지 또는 그 액션이 속한 페이지로 이동하지 않을 때
 * 사용해야함.
 * 즉, 간단히 말하면 기존 Form 은 페이지 이동을하고
 * fetcher.Form은 페이지 이동이 없음. 그 해당 페이지에 있음.
 * 
 * useFetcher
 * - 실제로 loader나 액션이 속한 페이지 또는 라우트를 로딩하지 않고 
 * 그것들을 트리거하고 싶을 때 사용한다.
 * ex) 공통된 컴포넌트가 있거나 같은 페이지에서 여러 번 사용되는 컴포넌트가 있는 경우
 *     데이터만 업데이트 하거나 받으려고 할 때 유용하다.
 */
function NewsletterSignup() {
    const fetcher = useFetcher();
    const { data, state } = fetcher;

    useEffect(() => {
        if (state === 'idle' && data && data.message) {
            window.alert(data.message);
        }
    }, [data, state]);

    return (
        <fetcher.Form 
            method="post" 
            action="/newsletter"
            className={classes.newsletter}
        >
            <input
            type="email"
            placeholder="Sign up for newsletter..."
            aria-label="Sign up for newsletter"
            />
            <button>Sign up</button>
        </fetcher.Form>
    );
}

export default NewsletterSignup;