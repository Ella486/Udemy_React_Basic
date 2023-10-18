import React from "react";

import './ExpenseDate.css';

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long'});
    const day = props.date.toLocaleString('en-US', { day: '2-digit'});
    const year = props.date.getFullYear(); // getFullYear(): 년도 네자리

    return (
        <div className="expense-date">
            {/*props.date.toISOString()*/ /*시간이 ISO 형식으로 나와서 보기 힘듦*/}
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}


export default ExpenseDate;