import React from "react";
const ExpenseForm = () => {
    function handleChange(event) {
        let val = event.target.value;
        console.log(val);
}
    return (
        <div className="form-group">
            <label for="x1"> Title : </label>
            <input type="text" id="x1"className="form-control"onChange={handleChange}/>
            <label for="x2"> Amount : </label>
            <input type="number" id="x2" min="0.01" step="0.01" className="form-control"onChange={handleChange}/>
            <label for="x3"> Date :</label>
            <input type="date" min="1-01-2023" max="31-12-2023" className="form-control"onChange={handleChange}/><br/>
            <button className="btn btn-light"> Add Expense </button>
        </div>
    );
}
export default ExpenseForm;