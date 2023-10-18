import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return (
        [...prevUsersList, 
          { name: uName, age: uAge, id: Math.random().toString() },
        ]
      );
    });
  };

  return (
    <>
      {/* <div></div> 대신 <React.Fragment></React.Fragment> or <></> 사용해서 JSX limit를 보안 가능 */}
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
