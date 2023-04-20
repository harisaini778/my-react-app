// import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css';
const ExpenseItems = (Location)=> {
    //   const LocationOfExpenditure = ["FoodItem", "Petrol", "Movies"];
    const clickHandler = () => {
        try {
            console.log("delete button is clicked !!!");
            const expenseItem = document.getElementById(Location.id);
            expenseItem.parentNode.removeChild(expenseItem);
        } catch(err){
            console.log(err);   
        }
    }
    console.log("This is thr location array"+Location[0].title);
    return (<div className='Box' id={Location.id}>
          {/* <ExpenseDate date={props.date}></ExpenseDate> */}
        {/* <ExpenseItems title={props.title} amount={props.amount}>
        </ExpenseItems> */}
        <p>{Location.date}</p>
        <p>{Location.amount}</p>
        <p>{ Location.title }</p>
        <button onClick={clickHandler}>Delete Expense</button>
    </div>)
}
export default ExpenseItems;