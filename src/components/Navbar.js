import { NavLink } from 'react-router-dom';
import * as Icon from 'react-feather';
import cosmoconieLogo from '../assets/images/logo1.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" ><img src={cosmoconieLogo} alt="logo cosmoconie"/>
            </NavLink>
            <NavLink to='/Kalevala' className={({ isActive }) => (isActive ? 'active' : undefined)}>
                <div><Icon.Feather size={40} />Kalevala</div>
            </NavLink>
            <NavLink to='/shop' className={({ isActive }) => (isActive ? 'active' : undefined)}>
                <div><Icon.ShoppingBag size={40} />Shopping</div>
            </NavLink>
            <NavLink to='/events' className={({ isActive }) => (isActive ? 'active' : undefined)}>
                <div><Icon.Globe size={40}/>Events</div>
            </NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : undefined)}>
                <div><Icon.Smile size={40} />About us</div>
            </NavLink>
        </div>
    );
}

export default Navbar