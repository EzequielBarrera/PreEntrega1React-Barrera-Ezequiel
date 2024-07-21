import "./NavBar.css";
import Elementos_Clickeables from "./El_Click/El_Click.jsx";
import CartWidget from "./CartWidget/CartWidget.jsx";

const Titulo = () => {
  return <h2>Mi Tienda</h2>;
};

const NavBar = () => {
  return (
    <header>
      <Titulo />
      <div>
        <Elementos_Clickeables />
      </div>
      <CartWidget />
    </header>
  );
};

export default NavBar;
