import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import M from 'materialize-css/dist/js/materialize.min.js';

const Homepage = () => {
  useEffect(() => {
    let carouselElem = document.querySelectorAll('.carousel.carousel-slider');
        
        
  M.Carousel.init(carouselElem,{
      indicators : true,
      fullWidth : true,
      duration : 150
  });

    setTimeout(()=>{
     M.Carousel.getInstance(carouselElem[0]).next();
  },4000);

}, [])
   
  return (
    <div>
      <div className='carousel carousel-slider'>
        <NavLink className='carousel-item' to='/productos'>
          <img src='/assets/image/portada.jpg' alt="MarketBA" />
        </NavLink>
        <NavLink className='carousel-item' to='/productos'>
          <img src='/assets/image/portada2.jpg' alt="MarketBA" />
        </NavLink>
      </div>

      <div className='container'>
        <div className='row'>
          <h1 className='categoriaTitle'>Ofertas Especiales</h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
