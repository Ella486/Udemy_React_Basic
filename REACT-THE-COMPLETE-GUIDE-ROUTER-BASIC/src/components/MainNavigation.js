import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

/**
 * <NavLink /> 
 * - <Link />의 대용물
 * - Link 처럼 똑같이 사용 가능함. but, 특수한 동작이 하나 있음
 * - className을 추가하면 그건 실제로 문자열을 받는 일반적인 className 프로퍼티가 아니라,
 * 대신에 함수를 받는 프로퍼티가 된다.
 * - 그리고 그 함수는 앵커 태그에 추가되어야 하는 CSS 클래스 이름을 리턴할건데
 * 이제 그 함수는 또 자동적으로 객체를 받고 거기에 우리는 isActive 프로퍼티를 할당할 수 있다.
 * - 그리고 이 isActive 프로퍼티가 있는 객체는 react-router-dom이 제공하고 isActive 는 Boolean 형이다.
 * - 이 링크가 현재 활성이면 즉, 현재 활성인 라우트로 인도되었으면 참이되고
 * - 현재 활성인 라우트로 인도되지 않았으면 거짓이된다.                                                                                                                                                                                                                         
 */
function MainNavigation(props) {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            // style={({ isActive }) => {
                            //     textAlign: isActive ? 'center' : 'left'
                            // }}
                            end={true}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/products"
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;