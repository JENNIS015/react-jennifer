import OpcionesMenu from './OpcionesMenu'
import Link from 'next/link'
import { useEffect } from 'react'


 
const NavBarBrowser = ({ categorias }) => {
if (typeof window !== 'undefined') {
 
    let elems = document.querySelectorAll('.dropdown-button')

    let options = {
      inDuration: 300,
      outDuration: 225,
      hover: true, // Activate on hover
      alignment: 'left',
      beloworigin: false, // Displays dropdown with edge aligned to the left of button
    }

   
    M.Dropdown.init(elems, options);
 
}
  return (
    <>
      <div className="nav-wrapper  container hide-on-med-and-down ">
        <Link href="#" className="dropdown-button" data-target="dropdown1">
          <p className="inline">
            <i class="tiny material-icons">view_headline</i> Categorias{' '}
            <i class="tiny material-icons">arrow_drop_down</i>{' '}
          </p>
        </Link>

        <ul id="dropdown1" class="dropdown-content">
          {categorias.map((catMenu) => (
            <OpcionesMenu key={catMenu} nombre={catMenu} />
          ))}
        </ul>

        <ul id="nav-mobile" className="right  hide-on-med-and-down">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Productos</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavBarBrowser
