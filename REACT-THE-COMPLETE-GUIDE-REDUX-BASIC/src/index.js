import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store/index';

/**
 * React Redux <Provider>
 * : Provider 컴포넌트로 React 컴포넌트를 감싸줌으로써
 *   Provider 컴포넌트 하위 컴포넌트들이 Provider를 통해 Redux의 store에 access 가능.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
