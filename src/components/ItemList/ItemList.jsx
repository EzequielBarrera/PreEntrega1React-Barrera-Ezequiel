import "./ItemList.css";
import Item from "../Item/Item.jsx";

const ItemList = ({ data = [] }) => {
  return data.map((item) => <Item key={item.id} info={item} />);
};

export default ItemList;
