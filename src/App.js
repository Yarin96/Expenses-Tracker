import { useState } from "react";
import "./App.css";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import ExpenseSection from "./components/Expenses/ExpenseSection/ExpenseSection";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Ice Cream",
    amount: 2,
    date: new Date(2022, 8, 1),
  },
  {
    id: 2,
    title: "Basketball",
    amount: 15,
    date: new Date(2022, 9, 22),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <h1>Expenses Tracker</h1>
      <NewExpense onAddedExpense={addExpenseHandler} />
      <ExpenseSection items={expenses} />
    </div>
  );
}

export default App;
