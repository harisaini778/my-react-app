import React from "react";
import ExpenseItems from "./ExpenseItems";
import CardElements from "./CardElements";

 const ConditionalExpenseList = (props) => {
    if (props.locations.length === 0) {
      let displayMessage = <CardElements><div className='border border-dark card card-body bg-warning text-dark'>
        <p><strong> Alert ! </strong></p>
        <p><strong> Only single Expense here. Please add more...</strong></p>
      </div></CardElements>;
      return displayMessage;
    }
    else {
      return <ExpenseItems locations={props.locations} />;
    }
}
export default ConditionalExpenseList;