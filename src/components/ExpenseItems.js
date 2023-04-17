import './ExpenseItems.css';
function ExpenseItems() {
      const LocationOfExpenditure = ["FoodItem", "Petrol", "Movies"];
    return (<div className='Box'>
        <div className='Title'><h2> Expense Items !</h2></div>
        <div className='items'> <p>{LocationOfExpenditure[0]} for Rs 10 </p> </div>
        <div className='items'> <p>{LocationOfExpenditure[1]} for Rs 100</p></div>
        <div className='items'> <p>{LocationOfExpenditure[2]} Movies for Rs 200</p></div>
    </div>)
}
export default ExpenseItems;