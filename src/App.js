import ExpenseItems from './components/ExpenseItems';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from "react";

const App = () => {
  const [LocationOfExpenditure, setLocationOfExpenditure] =
    useState([
      {
        title: "Food Item",
        amount: "Rs 100",
        date: new Date("2023-04-17"),
        id: "e1",
      },
      {
        title: "Fuel : Petrol",
        amount: "Rs 200",
        date: new Date("2023-04-17"),
        id: "e2",
      },
      {
        title: "Movies : New Movie",
        amount: "Rs 100",
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
 

  return (
    <div>
      <NewExpense onAddExpense={ addExpenseHandeler } />
      <ExpenseItems locations={LocationOfExpenditure}></ExpenseItems>
      </div>
  );
}

export default App;
