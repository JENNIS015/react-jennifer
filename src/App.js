import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./css/style.css";
import Homepage from "./components/home/Homepage.jsx";
import ItemDetailContainer from "./components/container/itemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/cart/Cart.jsx";
import { ItemListContainer } from "./components/container/itemListContainer/ItemListContainer.jsx";
import { CartContextProvider } from "./context/CartContext";
import Sucess from "./components/cart/Sucess";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
 
function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter basename="/react-jennifer" >
          <NavBar/>
          <Switch>
            <Route exact path='/'>
              <Homepage />
           
            </Route>
            <Route  path='/productos' component={ItemListContainer} forceRefresh={true}/>
            <Route   path='/categoria/:id' component={ItemListContainer} forceRefresh={true}/>
            <Route   path='/item/:id' component={ItemDetailContainer} forceRefresh={true} />
            <Route   path='/cart' component={Cart} />
            <Route  path='/sucess' component={Sucess} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
