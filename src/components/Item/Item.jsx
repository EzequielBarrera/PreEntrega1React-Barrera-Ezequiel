import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <Link to={`/item/${info.id}`} className="cardItem">
      <img src={info.pictureUrl} alt={info.title} className="imgDetail" />
      <div className="bodyDetail">
        <p>
          <strong>{info.title}</strong>
        </p>
        <p> {info.description}</p>
        <button className="compra">¡Jugalo ahora!</button>
      </div>
    </Link>
  );
};

export default Item;
