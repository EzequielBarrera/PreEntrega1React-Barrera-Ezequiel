import "./NavCategory.css";
import { NavLink } from "react-router-dom";

const NavCategory = () => {
  return (
    <nav className="categories">
      <ul>
        <li>
          <NavLink to="/productos" className="menu_item">
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/estrategia" className="menu_item">
            Estrategia
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/shooter" className="menu_item">
            Shooter
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/arcade" className="menu_item">
            Arcade
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/puzzle" className="menu_item">
            Puzzle
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavCategory;
