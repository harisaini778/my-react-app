
const ExpenseDate =(props) =>{
    let day = props.date.toLocaleString('en-US', { day: '2-digit' });
    let month = props.date.toLocaleString('en-US', { month: 'long' });
    let year = props.date.getFullYear();
    return (
        <div className="card border border-dark w-25">
            <p style={{ textAlign: "center" }}>{day}</p>
            <p style={{ textAlign: "center" }}>{month}</p>
            <p style={{textAlign:"center"}}>{year}</p>
        </div>
    );
}
export default ExpenseDate;