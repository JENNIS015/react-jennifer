import { Link } from 'react-router-dom';
import React from 'react'
import {CartWidget} from './CartWidget';

const NavBar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="transparent">
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s12">
              <Link to ="/" className="brand-logo">
                <span className="hide-on-small-only">Mi Negocio</span>
              </Link>

              <ul id="nav-mobile" className="right hide-on-med-and-down">
                 <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/categoria/gorras">Gorras</Link>
                </li>

                <li>
                 <Link to='/cart'> <CartWidget></CartWidget></Link>
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