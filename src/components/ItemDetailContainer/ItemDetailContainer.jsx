import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "items", id);
    getDoc(queryDoc).then((res) =>
      setData({
        id: res.id,
        ...res.data(),
      })
    );
  }, [id]);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetailContainer;
