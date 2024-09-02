import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (count < stock) setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };
  const handleAdd = () => {
    onAdd(count);
    setCount(1);
  };
  return (
    <>
      <button onClick={handleDecrease} disabled={count <= 1}>
        -
      </button>
      <span>{count}</span>
      <button onClick={handleIncrease} disabled={count === stock}>
        +
      </button>
      <br />
      <button className="buy" onClick={() => handleAdd()}>
        Comprar
      </button>
    </>
  );
};
