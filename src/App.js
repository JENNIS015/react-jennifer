import React from "react";
import NavBar from "./components/NavBar.jsx";
import 'materialize-css/dist/css/materialize.min.css'
import data from "./components/data.jsx";
import Tarjetas from "./components/itemCount.jsx";
import './css/style.css'

function App() {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <div className="row">

          {data.map(tarjetaProducto => (<Tarjetas
            key={tarjetaProducto.id}
            title={tarjetaProducto.title}
            image={tarjetaProducto.image}
            price={tarjetaProducto.price}
            quantity={tarjetaProducto.quantity}/>))}

        </div>

      </div>

    </div>
  )
}

export default App;
