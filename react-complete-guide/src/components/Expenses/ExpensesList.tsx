import { Expense } from "../../models/Expense";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

interface ExpensesListProps {
  items: Expense[];
}

function ExpensesList(props: ExpensesListProps) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} />
      ))}
    </ul>
  );
}

export default ExpensesList;
