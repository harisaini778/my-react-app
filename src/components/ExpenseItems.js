//import './ExpenseItems.css';
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import CardElements from "./CardElements";

const ExpenseItems = (props) => {
  return (
       <CardElements>
      {props.locations.map((location) => (
          <div key={location.id} className='border border-dark card card-body bg-success text-black'
          style={{marginBottom:"5px"}}>
          <ExpenseDate date={location.date}></ExpenseDate>
              <div className="card card-body border border-dark"
              style={{width:"50%",marginLeft:"250px"}}>
          <ExpenseDetails details = {[location.title,location.amount]}></ExpenseDetails>
                  </div>
        </div>
      ))}
      </CardElements>
  );
}
export default ExpenseItems;

