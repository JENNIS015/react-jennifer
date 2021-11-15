import React from 'react'
import {useCartContext} from '../../context/CartContext'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'
import './cart.css'

export default function Cart() {

  const {cartList, deleteAll, formatNumber} = useCartContext()
 
  var condition = !cartList?.length

  if (condition !== true) {
    return (
         <div className="container">
         <div className="row">
          <h1>Carrito</h1>
          <table>
        
            <tbody>
            {cartList.map(prodCart => <CartItem key={prodCart.prod.id} productos={prodCart}/>)}
            </tbody>
            </table>
       
              <h5 className="total">Total:{formatNumber(cartList.reduce((prev, next) => prev + (next.cantidad*next.prod.price), 0))}
              </h5>
              <button onClick= {() => deleteAll()}>Vaciar Carrito</button>
            </div>
          </div>)
          } 
    return(
          <div className="container">
          <h3>Tu carrito está vacío</h3> 
          <h5> ¿No sabés qué comprar? ¡Miles de productos te esperan !</h5> 
          <Link to = {`/`} className = "waves-effect waves-light btn"> Ir a Productos </Link>
          </div>
    )
        }