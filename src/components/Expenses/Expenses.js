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

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={selectedYear}
          onChoosingYear={getSelectedYear}
        />
        {filteredExpenses.map(expenseItem => (
          <ExpenseItem 
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
          /> 
        ))};
      </Card > 
    </div>
   )
};

export default Expenses


