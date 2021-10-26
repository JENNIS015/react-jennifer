import React from "react";
import NavBar from "./components/NavBar.jsx";
import 'materialize-css/dist/css/materialize.min.css'
import './css/style.css'
import {ProductosApi} from "./components/itemList.jsx";

function App() {
  return (
    <div>

      <NavBar/>

      <div className="container">

        <div className="row">
          
          <ProductosApi/>

        </div>

      </div>

    </div>
  )
}

export default App;
