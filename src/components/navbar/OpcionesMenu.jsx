import { NavLink } from "react-router-dom";

const OpcionesMenu = ({ nombre }) => {
  const pathnameCat = "/categoria/";

  return (

        <li className='tab'><NavLink key={nombre} to={pathnameCat + nombre}>{nombre}</NavLink></li>
      )  
  
};

export default OpcionesMenu;
