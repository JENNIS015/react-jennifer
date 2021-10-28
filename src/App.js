import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from "react";
import NavBar from "./components/NavBar.jsx";
import 'materialize-css/dist/css/materialize.min.css'
import './css/style.css'
import {ItemListContainer} from "./components/itemList.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { Cart } from './components/cart/cart.jsx';

function App() {
  return (
    <div>


      <Router>

      <NavBar/>
        <Switch>
          <div className="container">
            <div className="row">
              <Route exact path='/'>
                  <ItemListContainer/>
              </Route>

              <Route path='/detalle/' component={ItemDetailContainer} />
              <Route path='/cart' component={Cart} />
              
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
