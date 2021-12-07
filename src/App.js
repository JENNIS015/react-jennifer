import React from "react";
//import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/home/Homepage.jsx";
import ItemDetailContainer from "./components/container/itemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/cart/Cart.jsx";
import { ItemListContainer } from "./components/container/itemListContainer/ItemListContainer.jsx";
import { CartContextProvider } from "./context/CartContext";
import Sucess from "./components/cart/Sucess";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import "./css/style.css";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <div>
      <CartContextProvider>
        <Router basename={process.env.PUBLIC_URL}>
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
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
