import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import ItemList from "../ItemList/ItemList";
const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");

    if (id) {
      const queryFilter = query(queryCollection, where("category", "==", id));
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({
            id: product.id,
            ...product.data(),
          }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({
            id: product.id,
            ...product.data(),
          }))
        )
      );
    }
  }, [id]);

  return (
    <div className="itemListCont">
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
