import { NavLink } from "react-router-dom";
import OpcionesMenu from "./OpcionesMenu";
import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";

const NavBarBrowser = ({ categorias }) => {
useEffect(() => {
let elems = document.querySelectorAll('.dropdown-button');

let options={
inDuration: 300,
outDuration: 225,
hover: true, // Activate on hover
alignment: 'left', 
beloworigin:false// Displays dropdown with edge aligned to the left of button
}

M.Dropdown.init(elems, options);

}, []);


return (
<>

  
 
  <div className='nav-wrapper  container hide-on-med-and-down '>

      <NavLink exact to="#" className='dropdown-button' data-target='dropdown1'>
        <p className="inline"><i class="tiny material-icons">view_headline</i> Categorias <i
            class="tiny material-icons">arrow_drop_down</i> </p>
      </NavLink>


      <ul id='dropdown1' class='dropdown-content'>
        {categorias.map((catMenu) => (
        <OpcionesMenu key={catMenu} nombre={catMenu} />
        ))}
      </ul>


      <ul id='nav-mobile' className='right  hide-on-med-and-down'>
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

</>
);
};

export default NavBarBrowser;