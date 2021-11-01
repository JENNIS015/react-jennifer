import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from "react";
import NavBar from "./components/navbar/NavBar.jsx";
import 'materialize-css/dist/css/materialize.min.css'
import './css/style.css'

import ItemDetailContainer from "./components/container/itemDetailContainer/ItemDetailContainer.jsx";
import {Cart} from './components/cart/cart.jsx';
import { ItemListContainer } from './components/container/itemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <div>

      <Router>
      <NavBar/>
         
            <div className="container">
              <div className="row">
              <Switch>
                <Route exact path='/' component={ItemListContainer}/>

                <Route exact path='/categoria/:id' component={ItemListContainer}/>
                <Route exact path='/item/:id' component={ItemDetailContainer}/>
                <Route exact path='/cart' component={Cart}/>
              </Switch>
              </div>
            </div>
       
      </Router>
    </div>
  )
}

export default App;
