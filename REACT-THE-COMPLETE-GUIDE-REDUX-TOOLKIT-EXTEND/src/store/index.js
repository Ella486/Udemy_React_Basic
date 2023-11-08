import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

/**
 * configureStore
 * : createStore처럼 store를 만든다.
 *   but, 다른 점은 여러 개의 리듀서를 하나의 리듀서로 쉽게 합칠 수 있다.
 */
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export default store;