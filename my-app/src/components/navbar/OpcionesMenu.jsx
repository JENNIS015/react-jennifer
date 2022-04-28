import Link from "next/link";

const OpcionesMenu = ({ nombre }) => {
  const pathnameCat = "/categoria/";
  return (

        <li>
          <Link key={nombre} href={pathnameCat + nombre} className="mayuscula">{nombre}</Link>
          </li>
      )  
  
};

export default OpcionesMenu;
