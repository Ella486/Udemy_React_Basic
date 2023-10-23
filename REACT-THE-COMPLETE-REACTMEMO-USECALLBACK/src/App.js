import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  /**
   * useCallback
   * - 기본적으로 컴포넌트 실행 전반에 걸쳐 함수를 저장할 수 있게 하는 훅.
   * - 우리가 저장할 함수를 리액트의 내부 저장 공간에 저장해서 
   *   함수 객체가 실행될 때마다 이를 재사용할 수 있게 함.
   * - useEffect와 마찬가지로 의존성 주입을 해줘야함.
   * - 의존성 배열 안에 setShowParagraph 를 넣어야하지만 state로 인해 변화할일이 없으므로 
   * [] 안에 아무것도 넣지 않아도 됨.
   */
  const toggleParagrapHandler = useCallback(() => {
    if (allowToggle) {
      /**
       * state를 변경할 때는 함수 형태를 이용하는 것이 좋은 이유??
       *  (ex. (prevShowParagrah) => !prevShowParagrah  )
       * - 리액트는 상태 변화를 지연시키게 되는데(스케쥴링 작업 때문에) 
       * 이게 거의 즉각적으로 일어나기 때문에 체감상으로는 지연되는지 잘 모름. 
       * 대다수의 성능 기반의 작업들이 거의 동시에 일어남 
       * 그러나 리액트가 더 높은 우선순위를 갖는 것으로 간주함
       * 따라서 함수 형태를 사용해서 리액트가 상태 변화를 지연시키므로 일어날 수 있는 에러를 방지함
       * 특히, 이전 상태의 스냅샷을 의존해야하는 상황이라면 더더욱 함수 형태로 사용하는 것을 추천!!
       * => 함수 형태 사용시 : 리액트가 미완료된 상태 변경 작업에 대해서 최신의 상태를 사용하고 
       *    컴포넌트가 재 렌더링되었을 그 시점의 상태를 사용하지 않게 됨.
       * 컴포넌트가 재 렌더링되었을 떄의 시점과 상태 변경이 예약되는 시점의 차이를 아는 것이 중요!
       *  */ 
      setShowParagraph((prevShowParagrah) => !prevShowParagrah); 
    }
  }, [allowToggle]); 

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagrapHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
