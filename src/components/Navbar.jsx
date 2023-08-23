import { NavLink } from "react-router-dom";

const activeMenuLink = ({ isActive }) => (isActive ? "active-menu" : "");

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"} className={activeMenuLink}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to={"/posts"} className={activeMenuLink}>
            Посты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
