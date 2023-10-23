import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;

  /**
   * useMemo
   * - 기본적으로 모든 종류의 데이터를 저장을 함 (useCallback이 함수에 대한 것을 저장하듯)
   * - 불필요한 재평가를 피하기위해서 React.memo를 쓰는 것처럼
   * 새로운 배열이 생성되는 것을 방지하기 위해서 
   * - 즉, 값이 변경되고 새로운 값이 추가될 때 재정렬를 하게 됨.
   */
  const sortedList = useMemo(() => { //useMemo를 사용하여 정렬의 결과를 기억하게 함.
    console.log('Items sorted');
    return items.sort((a, b) => a - b);
    // sort() : 정렬함수 => a-b : 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬.
    // sort()는 list 길이가 긴 경우에는 성능에 영향을 줄 수 있음. (re렌더링시 영향을 미침)
  }, [items]); 
  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);