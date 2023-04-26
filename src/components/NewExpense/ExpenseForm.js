import React, { useState } from "react";
const Expenseform = () => {

    //******Easy Method To use multiple states *******//

    // const [enteredTitle, setEnteredTitle] = useState("");
    // function titleChangeHandeler(event) {
    //     setEnteredTitle(event.target.value);
    //     console.log(enteredTitle);
    // }
    // const [enteredAmount, setEnteredAmount] = useState("");
    // function amountChangeHandeler(event) {
    //     setEnteredAmount(event.target.value);
    //     console.log(enteredAmount);
    // }
    // const [enteredDate, setEnteredDate] = useState("");
    // function dateChangeHandeler(event) {
    //     setEnteredDate(event.target.value);
    //     console.log(enteredDate);
    // }

    //******Another Method to use states  ********//
    
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate:""
    })
    function titleChangeHandeler(event) {
        setUserInput((prevState) => {
            return {
                ...prevState, enteredTitle: event.target.value
           }
        });
        console.log(userInput['enteredTitle']);
    }
    function amountChangeHandeler(event) {
       setUserInput((prevState) => {
           return {
               ...prevState, enteredAmount:event.target.value
           }
        });
        console.log(userInput['enteredAmount']);
    }
    function dateChangeHandeler(event) {
          setUserInput((prevState) => {
           return {
               ...prevState, enteredDate:event.target.value
           }
        });
        console.log(userInput['enteredDate']);
    }
    return (
        <div className="form-group">
            <label for="x1"> Title : </label>
            <input type="text" id="x1"className="form-control"onChange={titleChangeHandeler}/>
            <label for="x2"> Amount : </label>
            <input type="number" id="x2" min="0.01" step="0.01" className="form-control"onChange={amountChangeHandeler}/>
            <label for="x3"> Date :</label>
            <input type="date" min="1-01-2023" max="31-12-2023" className="form-control"onChange={dateChangeHandeler}/><br/>
            <button className="btn btn-light"> Add Expense </button>
        </div>
    );
}
export default Expenseform;