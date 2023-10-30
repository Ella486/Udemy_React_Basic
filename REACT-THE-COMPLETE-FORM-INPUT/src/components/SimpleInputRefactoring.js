import { useState } from 'react';

/**
 * 입력된 값이 하고자 하는 일에 따라 선택
 * (1) ref : 이 값이 폼이 제출되었을 때 한번만 필요할 때 사용 (모든 키 입력마다 상태 값을 업데이트하기에는 불필요함)
 * (2) state : 즉각적인 유효성 검증을 위해 키 입력마다 입력 값이 필요할 때 사용하거나 입력된 값을 초기화 하고 싶은 경우
 */
const SimpleInput = (props) => {
  // enteredName : 입력창에 값이 변화되는지 알기 위해
  const [enteredName, setEnteredName] = useState('');
  // enteredNameTouched : 입력창에 아직 커서가 놓이지 않았을 상황 체크
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // enteredNameIsValid : 입력창에 값이 빈 값인지 값이 있는지 유효성 체크
  const enteredNameIsValid = enteredName.trim() !== ''; //true
  // nameInputIsInvalid : enteredNameIsValid 가 false 이면 enteredNameTouched를 true로 변환
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  } 

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON`T MANIPULATE THE DOM
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
