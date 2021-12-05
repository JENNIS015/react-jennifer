import React from "react";
import "./Homepage-css.css";

const  Homepage=()=> {
  return (
    <div className="container">
      <div>
        <img
          src='/assets/image/portada.jpg'
          alt='portada'
          className='portada'
        />
      </div>

      <div className='container'>
        <div className='row'>
          <h1 className='categoriaTitle'>Ofertas Especiales</h1>
        </div>
      </div>
    </div>
  );
}

export default Homepage
