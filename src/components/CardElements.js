const CardElements = (props) => {
  return (
    <div className="container-fluid bg bg-light p-3 card card-body">
      {props.children}
    </div>
  );
};

export default CardElements;
