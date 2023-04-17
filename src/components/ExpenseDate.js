
function ExpenseDate(props) {
    let day = props.date.toLocaleString('en-US', { day: '2-digit' });
    let month = props.date.toLocaleString('en-US', { month: 'long' });
    let year = props.date.getFullYear();
    return (<div>
        <div className='items'>{day}</div>
        <div className='items'>{month}</div>
        <div className='items'>{year}</div>
    </div>
    );
}
export default ExpenseDate;