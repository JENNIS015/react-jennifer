import React from 'react'
import "../css/style.css"
import { CartWidget } from './CartWidget';
 

const NavBar = () => {
    return (
        <nav className="Navbar">
            <img src="../assets/image/logo.png" class="logo_icono" alt="logo"/>
            <ul>
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
            
       </nav>
    )
}
export default NavBar;