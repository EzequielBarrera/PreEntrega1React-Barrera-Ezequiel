import "./Navegador.css";
import { NavLink } from "react-router-dom";

const Navegador = () => {
  return (
    <nav className="nav-cont">
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/">Tienda</NavLink>
        </li>
        <li>
          <NavLink to="/nostros">Nosotros</NavLink>
        </li>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navegador;
