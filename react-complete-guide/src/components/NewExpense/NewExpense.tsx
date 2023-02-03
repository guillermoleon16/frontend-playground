import { useState } from "react";
import { Expense } from "../../models/Expense";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

interface NewExpenseProps {
  onAddExpense(expenseData: Expense): void;
}

const NewExpense = (props: NewExpenseProps) => {

  const [showNewExpense, setShowNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData: Expense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    hideNewExpenseForm();
    props.onAddExpense(expenseData);
  };

  const hideNewExpenseForm = () => {
    setShowNewExpense(false);
  }

  const cancelExpenseInputHandler = () => {
    hideNewExpenseForm();
  };

  const showNewExpenseHandler = () => {
    setShowNewExpense(true);
  };

  return (
    <div className="new-expense">
      {showNewExpense ? (
        <ExpenseForm
          onCancel={cancelExpenseInputHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : <button onClick={showNewExpenseHandler}>New Expense</button>}
    </div>
  );
};

export default NewExpense;
