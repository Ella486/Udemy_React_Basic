import { createSlice, configureStore } from '@reduxjs/toolkit';
/**
 * createSlice
 * : 초기 상태, 리듀서 함수의 객체, "슬라이스 이름"을 받아들이고, 
 *   리듀서와 상태에 해당하는 액션 생성자와 액션 유형을 자동으로 생성하는 함수.
 *   이 API는 Redux 로직을 작성하기 위한 표준 접근 방식.
 */
/**
 * configureStore
 * : createStore처럼 store를 만든다.
 *   but, 다른 점은 여러 개의 리듀서를 하나의 리듀서로 쉽게 합칠 수 있다.
 */

const initialState = { counter: 0, showCounter: true };

/**
 * javaScript ES6의 property shorthand(단축 속성명)
 * : 객체를 정의할 때 객체의 key 값과 value 값이 같으면,
 *   key 와 value 값을 각각 표시하지 않고 한번만 표기하는 것
 *   ex.) initialState: initialState -> initialState 하나로 표현 가능
 */
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            /**
             * 아래 code처럼 react에서는 상태를 변경하는 코드를 쓰면 안되지만 
             * Redux toolkit + createSlice 에서는 저렇게 표기를 해도 
             * 상태를 변경하는 것처럼 보일뿐 상태를 변경하는 것은 아니다.
             * Redux toolkit는 내부적으로 immer이라는 다른 패키지를 사용하는데
             * 이런 코드를 감지하고 자동으로 원래 있는 상태를 복제한다.
             * 그리고 새로운 상태 객체를 생성하고 모든 상태를 변경할 수 없게 유지하고,
             * 우리가 변경한 상태는 변하지 않도록 오버라이드한다.
             * 즉, Redux toolkit 이 내부적으로 알아서 변경할 수 없는 코드로 변환한다!!
            */
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

/**
 * 상태 slice가 여러 개일 때 이 리듀서 key 값 대신에 
 * 객체를 설정해서 그 객체 안에 우리가 원하는 대로 속성 이름을 정하고 
 * 즉, key 값을 설정해서, 그 프로퍼티들의 값이 또 다른 리듀서 함수가 된다.
 * 결국 리듀서 맵을 생성하게 된다.
 * ex.) reducer: { counter: counterSlice.reducer }
 * 
 * 아래는 지금 reducer가 하나만 있기 때문에 counterSlice의 reducer를 곧바로
 * configureStore의 주요 reducer로 할당할 수 있다.
 */
const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;