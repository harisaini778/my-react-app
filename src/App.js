import logo from './logo.svg';
import './App.css';
import ExpenseItems from './components/ExpenseItems';

function App() {
  let para = document.createElement("p");
  para.textContent = "I am Hari learning React";
  document.getElementById("root").append("para");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> This is also visible ! </p>
        <ExpenseItems></ExpenseItems>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
