import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import CardElements from "./CardElements";

const ExpenseItems = (props) => {
  let deleteExpenseHandler = (event) => {
    let idOfExpense = event.target.dataset.id;
    let expenseElement = document.getElementById(idOfExpense);
    if (expenseElement) {
      expenseElement.remove();
    }
  };

  const [newAmounts, setNewAmounts] = useState({});

const UpdateExpenseHandler = (locationId) => {
  const newAmount = "100$";
  setNewAmounts((prevAmounts) => {
    return {
      ...prevAmounts,
      [locationId]: newAmount,
    };
  });
};

  return (
    <CardElements>
      {props.locations.map((location) => (
        <div
          key={location.id}
          id={location.id}
          className="border border-dark card card-body bg-dark text-black"
          style={{ marginBottom: "5px" }}
        >
          <div className="row">
          <ExpenseDate date={location.date}></ExpenseDate>
           <div className="col"> <ExpenseDetails
              details={[
                location.title,
                newAmounts[location.id] || location.amount,
              ]}
            ></ExpenseDetails>
            </div>
            <div className="col">
            <button
              className="btn btn-light font-monospace"
              onClick={deleteExpenseHandler}
              data-id={location.id}
            >
              Delete Expense
            </button>
             <button
              className="btn btn-success font-monopsace"
              onClick={() => UpdateExpenseHandler(location.id)}
            >
              Update Amount
              </button>
              </div>
          </div>
        </div>
      ))}
    </CardElements>
  );
};

export default ExpenseItems;
