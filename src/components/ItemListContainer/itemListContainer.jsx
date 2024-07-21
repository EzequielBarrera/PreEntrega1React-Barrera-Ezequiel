import "./itemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <div>
      <h1 className="Txt-Cont">{props.greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
