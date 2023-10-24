import { Component, useState } from 'react';

import User from './User';
import classes from './Users.module.css';

class Users extends Component{
  constructor() {
    super();
    // 클래스 기반 컴포넌트에서 state는 항상 객체이댜. 
    // (함수형에서는 문자열, 숫자형, boolean형, 객체 등 다 됨.)
    this.state = {
      showUsers: true,
      more: 'Test'
    };
  }

  componentDidUpdate() {
    // try {
    //   someCodeWhichMightFail()
    // } catch (err) {
    //   // handle error
    // }

    if (this.props.users.length === 0) {
      throw new Error('No users provied!');
    }
  }

  toggleUsersHandler() {
    //this.state.showUsers = false; // NOT!!
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render () {
      const usersList = (
        <ul>
          {this.props.users.map((user) => (
            <User key={user.id} name={user.name} />
          ))}
        </ul>
      );

    return (
      <div className={classes.users}>
      <button onClick={this.toggleUsersHandler.bind(this)}>
        {this.state.showUsers ? 'Hide' : 'Show'} Users
      </button>
      {this.state.showUsers && usersList}
    </div>
    );
    /**
     * onClick 이벤트시 this.toggleUsersHandler로만 써서 함수를 호출하면 
     * 기본적으로 동작하지 않는다.
     * 따라서 bind() or bind(this) 를 사용하므로
     * 메소드 내부의 this 예약어가 코드가 평가될 시점의 동일한 값이나 동일한 내용을 갖도록 설정됨.
     * bind(this) 는 이 클래스를 참조한다는 의미이다.
     */
  };
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
