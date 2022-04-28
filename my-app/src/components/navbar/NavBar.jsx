import { BrowserView, MobileView } from "react-device-detect";
import NavBarBrowser from "./NavBarBrowser";
import NavBarMobile from "./NavBarMobile";
import CartWidget from "./CartWidget";
import Topbar from "./Topbar";
import Buscador from "./Buscador";
import { useRouter } from 'next/router';
import Link from 'next/link';
const NavBar = () => {
const categorias = ["notebook", "celulares", "televisores", "tablet"];
const { pathname } = useRouter();
return (

<nav className='nav-extended'>

  <Topbar />


  <div className='nav-wrapper'>
    <div className="container">
      <div className="row">
        <div className="col l3 m3 s6">
        <Link href='/' className='brand-logo'><a>
          <span className='hide-on-small-only'>
            <span className="led">MARKET BA</span>
          </span>
</a>
        </Link>
        </div>
        <div className="col l6 m6 hide-on-small-only" >
      <Buscador/>
        </div>
        <div className="col l3 m3 s6">
        <Link href='#' data-target='mobile-demo' className='sidenav-trigger'>
         <a> <i className='material-icons'>menu</i></a>
        </Link>

        <Link href='/cart' className='right'>
          <CartWidget />
        </Link>
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