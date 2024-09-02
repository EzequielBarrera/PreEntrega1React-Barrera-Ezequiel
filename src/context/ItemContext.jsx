import { createContext, useContext, useState } from "react";

const ItemsContext = createContext();
export const useItemContext = () => useContext(ItemsContext);

export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

  const reset = () => setItems([]);

  const contadorProductos = () =>
    items.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

  const addItem = (item) => {
    const alreadyExists = items.some((i) => i.id === item.id);
    if (alreadyExists) {
      const newItems = items.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + item.quantity };
        } else {
          return i;
        }
      });
      setItems(newItems);
    } else {
      setItems((prev) => [...prev, item]);
    }
  };

  const removeItem = (id) => {
    const filter = items.filter((i) => i.id !== id);
    setItems(filter);
  };

  const total = items.reduce((acc, act) => acc + act.precio * act.quantity, 0);

  return (
    <ItemsContext.Provider
      value={{ total, removeItem, addItem, items, reset, contadorProductos }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
