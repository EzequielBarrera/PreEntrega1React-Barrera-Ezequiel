import { useItemContext } from "../../context/ItemContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./CartContainer.css";
const CartContainer = () => {
  const { items, reset } = useItemContext();

  if (items.length == 0) {
    return (
      <div className="containerEmpty">
        <h2>El carrito está vacío.</h2>
        <Link to="/productos">
          <button>Ir a comprar</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="cartContainer">
        {items.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      {/* <p>Total: ${precioTotal()}</p> */}

      <div className="btnContainer">
        <button onClick={() => reset()}>Vaciar carrito</button>
      </div>
      {/* <Checkout /> */}
    </div>
  );
};

export default CartContainer;
