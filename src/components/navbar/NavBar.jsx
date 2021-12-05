import { getFirestore } from "../../services/getFirestore";
import { useEffect, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import NavBarBrowser from "./NavBarBrowser";
import NavBarMobile from "./NavBarMobile";
import "./css/navBar.css";

const NavBar = () => {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    let m;
    let isMountedMenu = true;
    getFirestore()
      .collection("items")
      .get()
      .then((resp) => {
        if (isMountedMenu) {
          m = resp.docs.map((prod) => prod.data().categoria);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => 
      setCategorias(m.filter((x, y) => m.indexOf(x) === y)))
    return () => {
      isMountedMenu = false;
      console.log("Loading menu");
    };
  }, []);
 

  return (
    <>
      <BrowserView>
         <NavBarBrowser categorias={categorias}/>
      </BrowserView>
      <MobileView>
          <NavBarMobile categorias={categorias}/>  
      </MobileView>
    </>
  );
};
export default NavBar;
