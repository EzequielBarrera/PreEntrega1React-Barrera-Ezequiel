import "./CartItem.css";
import { useItemContext } from "../../context/ItemContext";

const CartItem = ({ product }) => {
  const { removeItem } = useItemContext();

  return (
    <div className="cartItem">
      <img src={product.pictureUrl} alt={product.title} />
      <div>
        <div className="cartItemBody">
          <p>
            <strong>Producto:</strong> {product.title}
          </p>
          <p>
            <strong>Cantidad:</strong> {product.quantity}
          </p>
          <p>
            <strong>Precio unitario:</strong> {product.precio}
          </p>
          <p>
            <strong>Subtotal:</strong> ${product.quantity * product.precio}
          </p>

          <button className="deleteBtn" onClick={() => removeItem(product.id)}>
            Eliminar producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
