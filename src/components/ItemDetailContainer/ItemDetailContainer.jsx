import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import items from "../../productos.json";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 1000);
    });

    getData.then((res) => setData(res.find((item) => item.id === id)));
  }, []);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetailContainer;
