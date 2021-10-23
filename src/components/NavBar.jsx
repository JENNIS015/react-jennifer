import React from 'react'
import "../css/style.css"
import {CartWidget} from './CartWidget';

const NavBar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="transparent">
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s12">
              <a className="brand-logo">
                <span className="hide-on-small-only">Mi Negocio</span>

              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="/acerca">Acerca</a>
                </li>
                <li>
                  <a href="/projecto">Productos</a>
                </li>
                <li>
                  <a href="/contacto">Contacto</a>
                </li>
                <li>
                  <CartWidget></CartWidget>
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