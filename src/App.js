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
        <BrowserRouter basename="https://jennis015.github.io/react-jennifer/">
          <NavBar />

          <Switch>
            <Route exact path= '/'>
              <Homepage />
              <ItemListContainer />
            </Route>
            <Route path='/productos' component={ItemListContainer} />
            <Route path='/categoria/:id' component={ItemListContainer} />
            <Route path='/item/:id' component={ItemDetailContainer} />
            <Route path='/cart' component={Cart} />
            <Route path='/sucess' component={Sucess} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
