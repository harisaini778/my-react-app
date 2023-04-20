//import './ExpenseItems.css';
import ExpenseDate from "./ExpenseDate";

const ExpenseItems = (props) => {
  return (
    <div className='conatiner-fluid text-bg-light p-3" card card-body'>
      {props.locations.map((location) => (
          <div key={location.id} className='border border-dark card card-body'
          style={{marginBottom:"5px"}}>
          <ExpenseDate date={location.date}></ExpenseDate>
              <div className="card card-body border border-dark"
              style={{width:"50%",marginLeft:"250px"}}>
                  <p style={{ textAlign: "center" }}>Title: {location.title}</p>
                  <p style={{ textAlign: "center" }}>Amount: {location.amount}</p> 
                  </div>
        </div>
      ))}
    </div>
  );
}
export default ExpenseItems;

