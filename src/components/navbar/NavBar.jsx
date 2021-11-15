import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {CartWidget} from './CartWidget';
import './NavBar-style.css';

const NavBar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="">
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s12">
              <Link to ="/" className="brand-logo">
                <span className="hide-on-small-only"><img src="https://img.icons8.com/fluency/48/000000/tesla-supercharger-pin.png"/></span>
              </Link>
       

              <ul id="nav-mobile" className="right hide-on-med-and-down">
                 <li>
                  <NavLink exact to="/" activeClassName="currencyCategory" className="menuEstandar">Home</NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/electronica" activeClassName="currencyCategory" className="menuEstandar">Electronica</NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/electrodomesticos" activeClassName="currencyCategory" className="menuEstandar">Electrodomesticos</NavLink>
                </li>

                <li>
                 <NavLink to='/cart'> <CartWidget></CartWidget></NavLink>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </nav>
   
    </div>

 

  )
}
export default NavBar;