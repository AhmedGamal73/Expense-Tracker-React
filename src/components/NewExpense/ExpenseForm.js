import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  
  const [enteredTitle, setEnteredTitle] = useState('')
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
  };
  const [enteredDate, setEnteredDate] = useState('')
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  };
  const [enteredAmount, setEnteredAmount] = useState('')
  const AmountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)
  };

  // data collecting obj
  const submitHandler = (e) => {
    e.preventDefault();
    const collectedData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
   
    //function from custom attribute in NewExpense
    props.onSaveExpenseData(collectedData)
    //clear input field
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
    
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type='text' 
            value={enteredTitle}
            onChange={titleChangeHandler}
            />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
            type='number' 
            value={enteredAmount}
            min='0.01' 
            step='0.01'
            onChange={AmountChangeHandler}
            />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
            type='date' 
            value={enteredDate}
            min='2023-1-1' 
            max='2025-1-1' 
            onChange={dateChangeHandler}
            />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
      </div>
    </form> 
  );
};

export default ExpenseForm;
