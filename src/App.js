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
        <BrowserRouter>
          <NavBar />
         
<<<<<<< HEAD
          
=======

>>>>>>> 0a83d6846ada5f2e9ee7121a159ff9d570311fef
          <Switch>
          <Homepage />
            <Route exact path='/'>
            <Homepage />
            <ItemListContainer />
            </Route>
            <Route exact path='/productos' component={ItemListContainer} />
            <Route exact path='/categoria/:id' component={ItemListContainer} />
            <Route exact path='/item/:id' component={ItemDetailContainer} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/sucess' component={Sucess} />
          </Switch>
          <Footer />

        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;