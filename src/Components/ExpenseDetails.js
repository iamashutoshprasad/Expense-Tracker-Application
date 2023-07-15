import './ExpenseDetails.css'
function ExpenseDetails(props) {
    return (
        <div className='expense-item1'>
            <div className='expense-item__description'><h2>{props.title}</h2> </div>
            <div className='expense-item__price'>Rs.{props.amount}</div>
            <div className='expense-item__location'>{props.locatationofExpense}</div>
        </div>
    )
}
export default ExpenseDetails;