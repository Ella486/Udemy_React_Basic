import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

/**
 * < Outlet > component
 * : 자녀 라우트 요소들이 렌더링되어야 할 장소를 표시하는 역할(마커 역할).
 */
function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
        
    );
}

export default RootLayout;