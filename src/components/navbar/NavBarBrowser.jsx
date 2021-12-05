import {NavLink, Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import OpcionesMenu from "./OpcionesMenu"

const NavBarBrowser=({categorias}) =>{
  console.log("browser")
    return (
        <nav className='nav-extended'>
          <div className='nav-wrapper container'>
            <NavLink to='/' className='brand-logo'>
              <span className='hide-on-small-only'>
                <img
                  alt='logo'
                  src='https://img.icons8.com/fluency/48/000000/tesla-supercharger-pin.png'
                />
              </span>
            </NavLink>

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
              {categorias.map((catMenu) => (
                <OpcionesMenu key={catMenu} nombre={catMenu} />
              ))}
            </ul>
          </div>
        </nav>
    )
}

export default NavBarBrowser