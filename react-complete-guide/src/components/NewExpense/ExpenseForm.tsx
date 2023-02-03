import { FormEvent, useState } from "react";
import { Expense } from "../../models/Expense";
import "./ExpenseForm.css";

interface ExpenseFormProps {
  onSaveExpenseData(enteredExpenseData: Expense): void;
  onCancel() : void;
}

const ExpenseForm = (props: ExpenseFormProps) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0.01);
  const [enteredDate, setEnteredDate] = useState("2019-01-01");

  const titleChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setEnteredTitle(event.currentTarget.value);
  };
  const amountChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setEnteredAmount(Number(event.currentTarget.value));
  };
  const dateChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setEnteredDate(event.currentTarget.value);
  };

  const cancelHandler = () => {
    props.onCancel();
  }

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const date = new Date(enteredDate);
    const expenseData: Expense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(date.getTime() + date.getTimezoneOffset() * 60000),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount(0);
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
