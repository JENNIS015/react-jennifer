import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { CartWidget } from "./CartWidget";
import "./NavBar-style.css";
import M from "materialize-css/dist/js/materialize.min.js";

const NavBar = () => {
  useEffect(() => {
    var sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
  }, []);
  return (
    <>
 
     <nav className='nav-extended'>
        <div className='nav-wrapper container'>
          <Link to='/' className='brand-logo'>
            <span className='hide-on-small-only'>
              <img
                alt='logo'
                src='https://img.icons8.com/fluency/48/000000/tesla-supercharger-pin.png'
              />
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
              <NavLink to='/categoria/televisores'>Televisores</NavLink>
            </li>
            <li className='tab'>
              <NavLink to='/categoria/celulares'>Celulares</NavLink>
            </li>
            <li className='tab'>
              <NavLink to='/categoria/tablet'>Tablet</NavLink>
            </li>
            <li className='tab'>
              <NavLink to='/categoria/notebook'>Notebook</NavLink>
            </li>
            <li className='tab'>
              <NavLink to='/productos'>Todos</NavLink>
            </li>
          </ul>
        </div>
      </nav>

       <ul className='sidenav' id='mobile-demo'>
        <li className='sidenav-header red lighten-2'>
          <div className='row'>
            <div className='col s4'>
              <img
                alt='logo'
                src='https://img.icons8.com/fluency/48/000000/tesla-supercharger-pin.png'
              /> 
              <span className='white-text text-darken-2'>Bienvenido</span>
            </div>
          </div>
        </li>

        <li>
          <NavLink exact to='/'> Home </NavLink>
        </li>
        <li>          <NavLink exact to='/productos'>            Todos          </NavLink>
        </li>
        <li>          <ul className='collapsible lighten-2'>         
           <li>

              <ul className='collapsible-header m-10'>
                Categorias
                <i className='material-icons right black-text'>
                  arrow_drop_down
                </i>
              </ul>

              <ul className='collapsible-body'>
                <li className='tab'>
                  <NavLink to='/categoria/celulares'>Celulares</NavLink>
                </li>
                <li className='tab'>
                  <NavLink to='/categoria/tablet'>Tablet</NavLink>
                </li>
                <li className='tab'>
                  <NavLink to='/categoria/notebook'>Notebook</NavLink>
                </li>
                <li className='tab'>
                  <NavLink to='/categoria/televisores'>Televisores</NavLink>
                </li>
              </ul>

            </li>
          </ul>
        </li>
      </ul>  
    </>
  );
};
export default NavBar;
