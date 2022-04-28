import OpcionesMenu from "./OpcionesMenu";
import dynamic from 'next/dynamic';
import Link from "next/link";
// import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";

if (typeof window !== 'undefined') {
  require ('materialize-css/dist/js/materialize.min.js')
}

const NavBarMobile = ({ categorias }) => {

 
  useEffect(() => {
    
    var sidenav = document.querySelectorAll(".sidenav");
    reactLocation.Sidenav.init(sidenav, {});

  }, []);

  return (
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
        <Link className="mayuscula" href='/'>
          Home
        </Link>
      </li>
      <li>
        <Link className="mayuscula" href='/products'>
          Todos
        </Link>
      </li>
      {categorias.map((catMenu) => (
        <OpcionesMenu key={catMenu} nombre={catMenu} />
      ))}
      )
    </ul>
  );
};

export default NavBarMobile;
