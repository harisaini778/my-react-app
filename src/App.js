import './App.css';
import ExpenseItems from './components/ExpenseItems';

const App = ()=> {
  let para = document.createElement("p");
  para.textContent = "I am Hari learning React";
  document.getElementById("root").append("para");
  let LocationOfExpenditure = [
    {
      title: "Food Item",
      amount: "Rs 100",
      date: new Date("2023-04-17"),
      id : "e1",
    },
    {
      title: "Fuel : Petrol",
      amount: "Rs 200",
      date: new Date("2023-04-17"),
      id : "e2",
    },
    {
      title: "Movies : New Movie",
      amount: "Rs 100",
      date: new Date("2023-04-17"),
      id : "e3",
    }
  ]
  return (
    <div className="App">
        <p> This is also visible ! </p>
        <div><h2>This is Expense Items List !</h2></div>
        {/* <ExpenseItems title={LocationOfExpenditure[0].title} amount={ LocationOfExpenditure[0].amount} date={LocationOfExpenditure[0].date}>
        </ExpenseItems>
        <ExpenseItems title={LocationOfExpenditure[1].title} amount={ LocationOfExpenditure[1].amount} date={LocationOfExpenditure[1].date}>
        </ExpenseItems>
        <ExpenseItems title={LocationOfExpenditure[2].title} amount={ LocationOfExpenditure[2].amount} date={LocationOfExpenditure[2].date}> */}
      {/* </ExpenseItems> */}
      {/* <ExpenseItems Location={LocationOfExpenditure.map((ele) => {
        return (
          ele.title,ele.amount,ele.date
       ) 
      })} > */}

      {/* </ExpenseItems> */}
      <ExpenseItems Location = {LocationOfExpenditure}></ExpenseItems>
    </div>
  );
}

export default App;
