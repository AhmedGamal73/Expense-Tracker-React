import './Expenses.css'
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import React, {useState} from 'react'


const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');
  const getSelectedYear = (year) => {
    setSelectedYear(year)
  }

  const filteredExpenses = props.items.filter( expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  // Initialize an variable that'll be displayed after selecting a year.
  let expensesOutput= <p>There's no expenses this year.</p>

  // Check if there's any previous expenses.
  if (filteredExpenses.length > 0) {
    expensesOutput = filteredExpenses.map(expenseItem => (
          <ExpenseItem 
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
          /> 
      ))
  }

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={selectedYear}
          onChoosingYear={getSelectedYear}
        />
        {expensesOutput}
      </Card >
    </div>
   )
};

export default Expenses


