import React from 'react';

import MyParagraph from './MyParagraph';

function DemoOutput(props) {
    console.log('DemoOutput RUNNING');
    return (
        <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
    );
}

/**
 * React.memo는 함수형 컴포넌트에서만 사용 가능(클래스 컴포넌트 x)
 * React.memo
 * (1) 인자로 들어간 컴포넌트에 어떤 props가 입력되는지 확인하고
 * 입력되는 모든 props의 신규 값을 확인한 뒤 
 * 이를 기존의 props의 값과 비교하도록 리액트에게 전달함.
 * (2) props의 값이 바뀐 경우에만 컴포넌트를 재실행 및 재평가 함.
 * (3) 부모 컴포넌트가 변경되었지만 그 컴포넌트의 props 값이 바뀌지 않았다면
 * 컴포넌트 실행은 건너뛴다.
 * ==> memo를 쓰면 성능적 최적화를 이룰 수 있는데 왜 다 쓰지 않는 것일까?
 * 비용적 측면 때문에 모든 곳에서 사용하기는 어려움
 * (ex. 자식 컴포넌트가 많아서 컴포넌트 트리가 매우 클경우 사용하거나
 *  컴포넌트 트리의 상위에 위치해 있다면 전체 컴포넌트 트리에 대한 쓸데없는 재렌더링을 막을 때 상용한다.)
 */
export default React.memo(DemoOutput);