import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css';
const ExpenseItems = (props)=> {
    //   const LocationOfExpenditure = ["FoodItem", "Petrol", "Movies"];
    return (<div className='Box'>
        {/* <div className='Title'><h2>{props.title }</h2></div>
        <div className='items'> <p>{LocationOfExpenditure[0]} for Rs 10 </p> </div>
        <div className='items'> <p>{LocationOfExpenditure[1]} for Rs 100</p></div>
        <div className='items'> <p>{LocationOfExpenditure[2]} Movies for Rs 200</p></div> */}
        {/* <div className='items'>{props.date.toISOString()}</div> */}
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className='items'><h2>{props.title}</h2>
        <h2>{props.amount}</h2></div>
    </div>)
}
export default ExpenseItems;