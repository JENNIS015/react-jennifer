import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div className='carousel carousel-slider'>
        <NavLink className='carousel-item' to='/productos'>
 
          <img src='assets/image/portada.jpg' alt="MarketBA" />
        </NavLink>
        <NavLink className='carousel-item' to='/productos'>
          <img src='assets/image/portada2.jpg' alt="MarketBA" />
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
