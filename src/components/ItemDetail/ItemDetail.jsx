import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useItemContext } from "../../context/ItemContext";

const ItemDetail = ({ data }) => {
  const { addItem } = useItemContext();

  const onAdd = (quantity) => {
    addItem({ ...data, quantity });
  };

  return (
    <div className="cardDetail">
      <img className="imgDetail" src={data.pictureUrl} alt={data.title} />
      <div className="bodyDetail">
        <p className="titleDetail">Producto: {data.title}</p>
        <p> {data.description}</p>
        <p className="priceDetails">Precio: ${data.precio}</p>
        <br />
        <div>
          <ItemCount stock={data.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
