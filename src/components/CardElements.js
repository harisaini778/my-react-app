const CardElements = (props) => {
  return (
    <div className="container bg bg-light card card-body w-75">
      {props.children}
    </div>
  );
};

export default CardElements;
