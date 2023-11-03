import { legacy_createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
         };
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
 
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state;
};

/**
 * createStore() 이라고 쓰면 deprecated라고 밑줄이 쳐지는데 
 * 그래도 동작은 잘되나 권장하는 legacy_createStore를 사용함
 * createStore()은 함수를 포인트 합니다.
 */
const store = legacy_createStore(counterReducer); // redux store

export default store;