import { NavLink } from "react-router-dom";

const OpcionesMenu = ({ nombre }) => {
  const pathnameCat = "/categoria/";
  return (

        <li>
          <NavLink key={nombre} to={pathnameCat + nombre} className="mayuscula">{nombre}</NavLink>
          </li>
      )  
  
};

export default OpcionesMenu;
