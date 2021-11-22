import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import './css/style.css'
import Homepage from './components/home/Homepage.jsx';
import ItemDetailContainer from "./components/container/itemDetailContainer/ItemDetailContainer.jsx";
import Cart from './components/cart/Cart.jsx';
import {ItemListContainer} from './components/container/itemListContainer/ItemListContainer.jsx';
import NavBar from "./components/navbar/NavBar";
import {CartContextProvider} from './context/CartContext';
 
function App() {
  return (
    <div>

<CartContextProvider>
        <BrowserRouter>
          <NavBar/>

          <Switch>
            <Route exact path='/'>
              <Homepage/>
              <ItemListContainer/>
            </Route>
            <Route exact path='/productos' component={ItemListContainer}/>
            <Route exact path='/categoria/:id' component={ItemListContainer}/>
            <Route exact path='/item/:id' component={ItemDetailContainer}/>
            <Route exact path='/cart' component={Cart}/>
             
          </Switch>

        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App;
