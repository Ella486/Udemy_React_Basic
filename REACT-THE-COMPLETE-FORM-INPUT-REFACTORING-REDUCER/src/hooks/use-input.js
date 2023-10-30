import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: ''};
  }
  return inputStateReducer;
};

const useInput = (validateValue) => {
  //validateValue는 상위 컴포넌트에서 보내는 함수이다.
  
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  const valueIsValid = validateValue(inputState.value); // true or false
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
      dispatch({type: 'INPUT', value: e.target.value});
    };
  
  const inputBlurHandler = (e) => {
    dispatch({type: 'BLUR'});
  };

  const reset = () => {
    dispatch({type: 'RESET'});
  }

  return {
      value: inputState.value,
      isValid: valueIsValid,
      hasError: hasError,
      valueChangeHandler: valueChangeHandler,
      inputBlurHandler: inputBlurHandler,
      reset: reset
  };
};

export default useInput;