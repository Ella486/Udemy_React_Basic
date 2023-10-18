import React, { useRef, useImperativeHandle } from 'react';
/**
 * < useImperativeHandle > 
 * - 컴포넌트나 컴포넌트 내부에서 오는 기능들을 명령적으로 사용 가능하게 함.
 * - 즉, 일반적인 state prop 관리를 통하지 않고 부모 컴포넌트의 state를 통해 컴포넌트를 제어하지 않고
 * 프로그래밍적으로 컴포넌트에서 무언가를 직접 호출하거나 조작해서 사용하게 해주는 것
 * - 거의 사용되지 않음...
 */

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return ({
            focus: activate
        });
    });
     
    return (
        <div
          className={`${classes.control} ${
            props.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor={props.id}>{props.label}</label>
          <input
            ref={inputRef}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
    );
});

export default Input;