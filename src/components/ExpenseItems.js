//import './ExpenseItems.css';

const ExpenseItems = (props) => {
  return (
    <div className='conatiner-fluid text-bg-light p-3"'>
      {props.locations.map((location) => (
        <div key={location.id} className='border border-dark'>
          <p>Date: {location.date ? location.date.toLocaleDateString() : ''}</p>
          <p>Title: {location.title}</p>
          <p>Amount: {location.amount}</p> 
        </div>
      ))}
    </div>
  );
}
export default ExpenseItems;

