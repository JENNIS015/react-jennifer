import React from 'react'
import "../css/style.css"

const NavBar = () => {
    return (
        <nav className="Navbar">
            <h2>La Tienda</h2>
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
            </ul>
       </nav>
    )
}
export default NavBar;