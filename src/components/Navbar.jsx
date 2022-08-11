import { NavLink } from "react-router-dom";
import * as Icon from "react-feather";
import cosmoconieLogo from "../assets/images/logo1.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={cosmoconieLogo} alt="logo cosmoconie" />
      </NavLink>
      <NavLink
        to="/Kalevala"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        <div>
          <Icon.Feather size={28} />
          Kalevala
        </div>
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        <div>
          <Icon.ShoppingBag size={28} />
          Shopping
        </div>
      </NavLink>
      <NavLink
        to="/events"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        <div>
          <Icon.Calendar size={28} />
          Events
        </div>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        <div>
          <Icon.Info size={28} />
          About us
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
