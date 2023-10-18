import React, { useState } from 'react';
 
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    /** 1) state로 각각 따로 관리하기 */
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /** 2) state 한꺼번에 모아서 관리하기 */
    // const [userInput, setUserInput] = useState({
    //     enterdeTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enterdeTitle: event.target.value,
        // }); 

        /** state를 모아서 관리할 때 위에꺼를 사용해도 되지만 (대체로 문제가 되지 x)
         *  react는 상태 업데이트를 예약한다고 즉시 처리하는 것이 아니기 때문에 
         *  다수의 상태 업데이트를 동시에 예약할 경우 오래되거나 잘못된 스냅샷을 찾아올 수 있기 때문에
         *  이 내부 함수에서 제공하는 상태 스냅샷이 항상 최신 상태 스냅샷을 보장 해줌
         *  (더 안전한 방법)
         */
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // }); 
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // }); 
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // }); 
    };

    // const inputChangeHandler = (identifier, value) => {
    //     if(identifier === 'title') {
    //         setEnteredTitle(value);
    //     } else if (identifier === 'date') {
    //         setEnteredDate(value);
    //     } else {
    //         setEnteredAmount(value);
    //     }
    // };

    const submitHandler = (event) => { 
        event.preventDefault(); // 요청이 자동으로 발송되는 것을 방지(re-load 방지)

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        /** input에 value를 설정해주면 양방향 바인딩이 가능함. */
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        value={enteredTitle} 
                        onChange={titleChangeHandler /*(event) => inputChangeHandler('title', event.target.value)*/} 
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number'
                        min='0.01' 
                        step='0.01' 
                        value={enteredAmount}
                        onChange={amountChangeHandler} 
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        min='2019-01-01' 
                        max='2022-12-31' 
                        value={enteredDate}
                        onChange={dateChangeHandler} 
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;