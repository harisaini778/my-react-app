import React from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const saveExpenseHandeler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        } 
        //console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    return (
        <div className="container bg bg-light card card-body w-50"  style={{margin:"20px auto 20px auto"}}>
        <div className="border border-dark card card-body bg-dark text-light">
                <ExpenseForm onSaveExpenseData={saveExpenseHandeler} />
        </div>
        </div>
    );
}
export default NewExpense;