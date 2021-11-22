import { options } from "numeral";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import "./NavBar-style.css";
import M from "materialize-css/dist/js/materialize.min.js";

const NavBar = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, options);
  });

  return (
    <>
      <nav className='nav-extended'>
        <div className='nav-wrapper container'>
          <Link to='/' className='brand-logo'>
            <span className='hide-on-small-only'>
              <img src='https://img.icons8.com/fluency/48/000000/tesla-supercharger-pin.png' />
            </span>
          </Link>
          <NavLink to='/cart' className='right'>
            <CartWidget></CartWidget>
          </NavLink>

          <Link to='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </Link>

          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <NavLink exact to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/productos'>
                Productos
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='nav-content container hide-on-med-and-down '>
          <ul className='tabs tabs-transparent'>
            <li className='tab'>
              <NavLink to='/categoria/electronica'>Electronica</NavLink>
            </li>
            <li className='tab'>
              <NavLink to='/categoria/electrodomesticos'>
                Electrodomesticos
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <NavLink exact to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/productos'>
            Todos
          </NavLink>
        </li>
        <li>
        Categorias
        <ul>
          <li>
            <NavLink to='/categoria/electrodomesticos'>
              Electrodomesticos
            </NavLink>
          </li>
          <li>
            <NavLink to='/categoria/electrodomesticos'>
              Electrodomesticos
            </NavLink>
          </li>
        </ul>
        </li>
      </ul>
    </>
  );
};
export default NavBar;
