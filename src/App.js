
import ExpenseItem from "./Components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      locatationofExpense: 'Household',
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      locatationofExpense: 'Electronic',
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      locatationofExpense: 'Finance',
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      locatationofExpense: 'Household',
      date: new Date(2021, 5, 12),
    },];
  return (
    <div>
      <h2>ExpenseItem!</h2>

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        locatationofExpense={expenses[0].locatationofExpense}
        date={expenses[0].date} > </ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        locatationofExpense={expenses[1].locatationofExpense}
        date={expenses[1].date} > </ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        locatationofExpense={expenses[2].locatationofExpense}
        date={expenses[2].date} > </ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        locatationofExpense={expenses[3].locatationofExpense}
        date={expenses[3].date} > </ExpenseItem>


    </div>
  );
}

export default App;
