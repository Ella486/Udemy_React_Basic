//import { Component } from 'react';

import { useSelector, useDispatch } from 'react-redux';
//import { connect } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  /**
   * useSelector()
   * : store의 상태 값을 반환해주는 역할.
   *   useStore를 사용한 함수에서 리덕스 스토어의 상태값이 바뀐 경우
   *   (ex.이벤트를 통해 액션이 실행되어 상태값 변경되는 경우)
   *   바뀐 스토어의 상태 값을 다시 가져와 컴포넌트를 렌더링 시킴.
   */

  /**
   * useDispatch()
   * : redux의 액션 생성 함수를 실행하여 redux store에 변경된 상태값을 저장하기 위하여 사용.
   *   useDispatch 객체를 dispatch로 재선언한 후, dispatch 변수를 활용하여 액션을 호출.
   */
  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;



// class Counter extends Component {
//  // 클래스 기반 Component로 바꾸면
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment'}),
//     decrement: () => dispatch({ type: 'decrement'})
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
