import React from "react";
import NavBar from "./components/NavBar.jsx";
import 'materialize-css/dist/css/materialize.min.css'
import ItemListContainer from "./components/ItemListContainer.jsx";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer who="Jennifer"/>
    </div>
  );
}

