import "./NavBar.css";
import Navegador from "./Navegador/Navegador.jsx";
import CartWidget from "./CartWidget/CartWidget.jsx";
import { Link } from "react-router-dom";

const Titulo = () => {
  return <h2>Steamn't</h2>;
};

const NavBar = () => {
  return (
    <header>
      <Link to="/" className="title">
        <Titulo />
      </Link>

      <div>
        <Navegador />
      </div>
      <Link to="/cart" className="cart">
        <CartWidget />
      </Link>
    </header>
  );
};

export default NavBar;
