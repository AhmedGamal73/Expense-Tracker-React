import React, { useState } from 'react';

import './ExpenseItme.css'
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  const clickHandler = () => { 
    setTitle('Title updated')
  } 

 return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title} </h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
 );
}


export default ExpenseItem;
