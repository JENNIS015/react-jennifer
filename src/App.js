import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import './css/style.css'
import Homepage from './components/home/Homepage.jsx';
import ItemDetailContainer from "./components/container/itemDetailContainer/ItemDetailContainer.jsx";
import {Cart} from './components/cart/cart.jsx';
import { ItemListContainer } from './components/container/itemListContainer/ItemListContainer.jsx';
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div>

      <Router>
      <NavBar/> 
        
              <Switch>
                <Route exact path='/'> 
                <Homepage/>
                <ItemListContainer/>
                </Route>

                <Route exact path='/categoria/:id' component={ItemListContainer}/>
                <Route exact path='/item/:id' component={ItemDetailContainer}/>
                <Route exact path='/cart' component={Cart}/>
              </Switch>
       
           
       
       </Router>
    </div>
  )
}

export default App;
