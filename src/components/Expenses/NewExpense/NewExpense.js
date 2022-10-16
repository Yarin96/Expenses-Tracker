import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isAddedExpense, setIsAddedExpense] = useState(false);

  const expenseDataHandler = (expenseData) => {
    const expenseDataObject = {
      ...expenseData,
      id: Math.random().toString(),
    };

    props.onAddedExpense(expenseDataObject);
    setIsAddedExpense(false);
  };

  const isAdding = () => {
    setIsAddedExpense(true);
  };

  const isCancelling = () => {
    setIsAddedExpense(false);
  };

  return (
    <div className="new-expense">
      {isAddedExpense === false ? (
        <button type="submit" value="add" onClick={isAdding}>
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={expenseDataHandler}
          onCancel={isCancelling}
        />
      )}
    </div>
  );
};

export default NewExpense;
