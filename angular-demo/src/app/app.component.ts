import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { Operation } from 'src/models/Operation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Incomes : Operation[] = [];
  Expenses : Operation[] = [];

  IsAddingNewIncome : boolean = false;
  NewIncome : Operation = {
    Name : "",
    Date : new Date(),
    Value : 0,
  };

  constructor()
  {
    this.Incomes = [
      {
        Name : "Prueba",
        Value : 100,
        Date : new Date()
      },
      {
        Name : "Prueba 2",
        Value : 100,
        Date : new Date()
      },
      {
        Name : "Prueba 3",
        Value : 100,
        Date : new Date()
      },
    ];
  }

  public GetIncomeTotal() : number
  {
    let sum : number = 0;
    for(let i of this.Incomes)
    {
      sum = sum + i.Value;
    }
    return sum;
  }

  public GetExpensesTotal() : number
  {
    let sum : number = 0;
    for(let i of this.Expenses)
    {
      sum = sum + i.Value;
    }
    return sum;
  }

  public ToggleNewIncome()
  {
    this.IsAddingNewIncome = !this.IsAddingNewIncome;
  }

  public OnAddIncome(event : SubmitEvent)
  {
    event.preventDefault();
    this.Incomes.push(<Operation>{ Name: this.NewIncome.Name, Date: this.NewIncome.Date, Value: this.NewIncome.Value });
    this.ResetNewIncome();
    this.ToggleNewIncome();
  }

  private ResetNewIncome() {
    this.NewIncome = {
      Name : "",
      Date : new Date(),
      Value : 0,
    };
  }
}
