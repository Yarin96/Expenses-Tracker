import { useState } from "react";
import "./ExpenseSection.css";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

const ExpenseSection = (props) => {
  const [changedYear, setChangedYear] = useState("2022");

  const changedYearHandler = (selectedYear) => {
    setChangedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === changedYear;
  });

  return (
    <>
      <div className="expenses">
        <ExpensesFilter
          selected={changedYear}
          onYearChange={changedYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </div>
    </>
  );
};

export default ExpenseSection;
