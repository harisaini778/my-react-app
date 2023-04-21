//import './ExpenseItems.css';
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
  }
  return (
       <CardElements>
      {props.locations.map((location) => (
        <div key={location.id} id={location.id} className='border border-dark card card-body bg-dark text-black'
          style={{marginBottom:"5px"}}>
          <ExpenseDate date={location.date}></ExpenseDate>
              <div className="card card-body border border-dark"
              style={{width:"50%",marginLeft:"250px"}}>
            <ExpenseDetails details={[location.title, location.amount]}></ExpenseDetails>
            <button className="btn btn-light font-monospace" onClick={deleteExpenseHandler} data-id={location.id}>
             Delete Expense</button>
            </div>
        </div>
      ))}
      </CardElements>
  );
}
export default ExpenseItems;

