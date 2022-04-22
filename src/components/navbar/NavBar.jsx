import { BrowserView, MobileView } from "react-device-detect";
import NavBarBrowser from "./NavBarBrowser";
import NavBarMobile from "./NavBarMobile";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./css/navBar.css";
import Topbar from "./Topbar";
import Buscador from "./Buscador";
const NavBar = () => {
const categorias = ["notebook", "celulares", "televisores", "tablet"];

return (

<nav className='nav-extended'>

  <Topbar />


  <div className='nav-wrapper'>
    <div className="container">
      <div className="row">
        <div className="col l3 m3 s6">
        <NavLink to='/' className='brand-logo'>
          <span className='hide-on-small-only'>
            <span className="led">MARKET BA</span>
          </span>

        </NavLink>
        </div>
        <div className="col l6 m6 hide-on-small-only" >
      <Buscador/>
        </div>
        <div className="col l3 m3 s6">
        <NavLink to='#' data-target='mobile-demo' className='sidenav-trigger'>
          <i className='material-icons'>menu</i>
        </NavLink>

        <NavLink to='/cart' className='right'>
          <CartWidget />
        </NavLink>
        </div>
      </div>

    </div>
    <BrowserView>
<div className="nav-submenu">
      <NavBarBrowser categorias={categorias} /></div>
    </BrowserView>
    <MobileView>
      <NavBarMobile categorias={categorias} />
    </MobileView>

  </div>
</nav>
);
};
export default NavBar;