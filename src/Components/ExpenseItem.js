import './ExpenseItem.css'
function ExpenseItem(){
    const expenseDate= new Date(2023, 7, 15);
    const expenseTitle="Car Insurance"
    const expenseAmount=  789;
    const LocationofExpense="Finance"
        return (
          <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'><h2>{expenseTitle}</h2> </div>
            <div className='expense-item__price'>Rs.{expenseAmount}</div>
            <div className='expense-item__price'>{LocationofExpense}</div>

            
           
          </div>
        );
      }
      
      export default ExpenseItem
    
