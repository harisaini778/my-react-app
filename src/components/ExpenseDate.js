
const ExpenseDate =(props) =>{
    let day = props.date.toLocaleString('en-US', { day: '2-digit' });
    let month = props.date.toLocaleString('en-US', { month: 'long' });
    let year = props.date.getFullYear();
    return (
        <div className='card card-body border border-dark' style={{ width: "8rem", marginLeft: "10px", marginTop: "10px" }}>
        <p>{day}</p>
        <p>{month}</p>
            <p>{year}</p>
        </div>
    );
}
export default ExpenseDate;