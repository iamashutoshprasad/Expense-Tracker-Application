import React, { useState } from "react";
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  }
  const clickHandler1 = () => {
    setAmount('100');
    console.log(amount);
  };
  return (
    <div >
      <div className='expense-item'>
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          amount={amount}

          title={title}
          locatationofExpense={props.locatationofExpense} />

        <button onClick={clickHandler}>Change Title</button>
        <button onClick={clickHandler1}>Change to Rs 100</button>
      </div>
    </div>
  );
}

export default ExpenseItem

