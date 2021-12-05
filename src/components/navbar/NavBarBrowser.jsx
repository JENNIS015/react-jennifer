import {NavLink } from "react-router-dom"
import OpcionesMenu from "./OpcionesMenu"

const NavBarBrowser=({categorias}) =>{
 
    return (
      <>
          <div className='nav-wrapper container'>
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
        </>
    )
}

export default NavBarBrowser