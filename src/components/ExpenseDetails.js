const ExpenseDetails = (props) => {
    return (
        <div className="card card-body border border-dark w-75 h-100 p-3">
        <p>
            {props.details.map((detail) => {
               return (<p style={{textAlign:"center"}}> {detail} </p>);
            })}
        </p>
        </div>
    );
}
export default ExpenseDetails;