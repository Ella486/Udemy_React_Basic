import { useState } from 'react';

const useInput = (validateValue) => {
  //validateValue는 상위 컴포넌트에서 보내는 함수이다.
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue); // true or false
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
      setEnteredValue(e.target.value);
    };
  
  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  }

  return {
      value: enteredValue,
      isValid: valueIsValid,
      hasError: hasError,
      valueChangeHandler: valueChangeHandler,
      inputBlurHandler: inputBlurHandler,
      reset: reset
  };
};

export default useInput;