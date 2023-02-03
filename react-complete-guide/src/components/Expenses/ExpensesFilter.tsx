import { ChangeEvent } from 'react';
import './ExpensesFilter.css';

interface ExpensesFilterProps {
  selectedYear : string,
  onYearChange(selectedYear : string) : void;
}

const ExpensesFilter = (props : ExpensesFilterProps) => {

  const changeYearHandler = (event : ChangeEvent<HTMLSelectElement>) => {
    props.onYearChange(event.currentTarget.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={changeYearHandler}>
          <option value='All'>All</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;