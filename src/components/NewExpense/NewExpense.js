import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
   
    const [isEditing, setisEditing] = useState(false);
   
    const startEditingHandeler = () => {
        setisEditing(true);
    }
   
    const stopEditingHandeler = () => {
        setisEditing(false);
    };

    const saveExpenseHandeler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        } 
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setisEditing(false);
    }
    return (
        <div className="container bg bg-light card card-body w-50" style={{ margin: "20px auto 20px auto" }}>
            {!isEditing &&
               <div className="border border-dark card card-body bg-dark text-light"> 
                    <button onClick={startEditingHandeler} className="btn btn-success text-light"><strong>Add Expense</strong></button>
                </div>}
            {isEditing &&
                <div className="border border-dark card card-body bg-dark text-light">
                <ExpenseForm onSaveExpenseData={saveExpenseHandeler} onCancel={stopEditingHandeler} />
            </div>}
        </div>
    );
}
export default NewExpense;