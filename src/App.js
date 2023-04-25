import ExpenseItems from './components/ExpenseItems';
import NewExpense from './components/NewExpense/NewExpense';

const App = ()=> {
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
    <div>
        <NewExpense/>
      <ExpenseItems locations={LocationOfExpenditure}></ExpenseItems>
      </div>
  );
}

export default App;
