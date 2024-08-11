import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ItemList from "../ItemList/ItemList";
import items from "../../productos.json";
const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 1000);
    });

    if (id) {
      getData.then((res) =>
        setData(res.filter((item) => item.category === id))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [id]);

  return (
    <div className="itemListCont">
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
