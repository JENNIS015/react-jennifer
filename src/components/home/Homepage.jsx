import { NavLink } from "react-router-dom";
import SliderItem from "./SliderItem";
import Banner from "./Banner";
import  ItemListContainer   from "../container/itemListContainer/ItemListContainer";
import BannerIcons from "./BannerIcons";
const Homepage = () => {
return (
<div>
  <div className='carousel carousel-slider'>
    <NavLink className='carousel-item' to='/productos'>
      <SliderItem />
    </NavLink>
  </div>

  <br></br>
  <div className="container">
  <BannerIcons />
    <Banner />
    <div class="title-container">
      <h3 class="title">Best Sellers</h3>
      <p class="description">Add bestselling products to weekly line up</p>
    </div>
    <ItemListContainer />
  </div>
</div>
);
};

export default Homepage;