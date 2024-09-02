import "./Checkout.css";
import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useItemContext } from "../../../context/ItemContext";

const Checkout = () => {
  const { items, total, reset } = useItemContext();
  const buyMsg = () => {
    alert("Su compra ha sido realizada!");
  };
  const order = {
    buyer: {
      name: "",
      email: "",
      tel: "",
    },
    items: items,
    total: total,
  };

  const [form, setForm] = useState(order.items);
  const [id, setId] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, form, order.items).then((snapshot) => {
      setForm(form, order.items);
      setId(snapshot.id);
      setTimeout(() => {
        reset();
      }, 5000);
    });
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="formContainer">
      <h1>Orden de compra</h1>
      <h3>Ingrese sus datos:</h3>
      {typeof id !== "undefined" ? (
        <p>Su código de orden de compra es: {id} </p>
      ) : (
        ""
      )}
      <form onSubmit={submitHandler}>
        <div className="inputCont">
          <label htmlFor="name">Nombre: </label>
          <input
            name="name"
            id="id"
            value={form.name}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div className="inputCont">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div className="inputCont">
          <label htmlFor="email">Reingrese su email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div className="inputCont">
          <label htmlFor="tel">Teléfono: </label>
          <input
            type="tel"
            name="tel"
            id="tel"
            value={form.tel}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <p className="total">Total: ${total}</p>
        <button
          type="submit"
          onClick={buyMsg}
          disabled={!form.name && !form.email && !form.tel}
        >
          Realizar compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;
