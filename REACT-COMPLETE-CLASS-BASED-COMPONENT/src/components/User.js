import { Component } from 'react';

import classes from './User.module.css';

/**
 * 함수형 기반 컴포넌트에서 쓰이는 props를 
 * class 기반 기반 컴포넌트에서 사용하기 위해서는
 * react의 Componet를 상속 받아야함.
 */
class User extends Component {
  // constructor() {
  //   // 초기화 작업...
  //   //but, 여기에서는 초기화 할 작업이 없으므로 생략!!
  // }

  componentWillUnmount() {
    console.log('User will unmount');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// 함수형 컴포넌트로 만들때
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
