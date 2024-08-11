import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  return (
    <div className="cardDetail">
      <img className="imgDetail" src={data.pictureUrl} alt={data.title} />
      <div className="bodyDetail">
        <p className="titleDetail">Producto: {data.title}</p>
        <p> {data.description}</p>
        <p className="priceDetails">Precio: {data.precio}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
