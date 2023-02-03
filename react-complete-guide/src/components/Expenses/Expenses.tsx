import { useState } from "react";
import { Expense } from "../../models/Expense";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

interface ExpensesProps {
  ExpenseList: Expense[];
}

function Expenses(props: ExpensesProps) {
  const [year, setYear] = useState("All");

  const changeYearHandler = (year: string) => {
    setYear(year);
  };

  const filteredExpenses = props.ExpenseList.filter(
    (exp) => exp.date.getFullYear().toString() === year || year === "All"
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} onYearChange={changeYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
