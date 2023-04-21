const ExpenseDetails = (props) => {
    return (
        <p>
            {props.details.map((detail) => {
               return (<p style={{textAlign:"center"}}> {detail}</p>);
            })}
        </p>
    );
}
export default ExpenseDetails;