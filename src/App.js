import ExpenseItems from './components/ExpenseItems';

const App = ()=> {
  // let para = document.createElement("p");
  // para.textContent = "I am Hari learning React";
  // document.getElementById("root").append("para");
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
    <div className="App container text-bg-dark p-3 ">
        <div className='font-monospace'><h2>This is Expense Items List !</h2></div>
      <ExpenseItems locations={LocationOfExpenditure}></ExpenseItems>
    </div>
  );
}

export default App;
