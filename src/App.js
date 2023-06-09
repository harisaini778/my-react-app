//import CardElements from './components/CardElements';
import ConditionalExpenseList from './components/ConditionalExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
//import ExpensesChart from './components/NewExpense/ExpensesChart';
//import ExpenseItems from './components/ExpenseItems';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from "react";


const App = () => {
  const [LocationOfExpenditure, setLocationOfExpenditure] =
    useState([
      {
        title: "Food Item",
        amount: 100,
        date: new Date("2023-04-17"),
        id: "e1",
      },
      {
        title: "Fuel : Petrol",
        amount: 200,
        date: new Date("2023-04-17"),
        id: "e2",
      },
      {
        title: "Movies : New Movie",
        amount: 100,
        date: new Date("2023-04-17"),
        id: "e3",
      }
    ]);
  
    const addExpenseHandeler = (expense) => {
      console.log("in app.js");
      console.log(expense);
      setLocationOfExpenditure((prevState) => {
        return ([...prevState,
        {
          ...expense,
          id: Math.random().toString(),
        }])
      })
    }
  
  const [filteredYear, setFilteredYear] = useState("2022");
  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = LocationOfExpenditure.filter((expense) => {
    if (filteredYear === " ") {
      return true;
    }
    else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandeler} />
      <ExpenseFilter selectedYear={filteredYear}
        onFilterChange={handleFilterChange} />
      <ConditionalExpenseList locations={ filteredExpenses } />
      </div>
  );
}

export default App;
