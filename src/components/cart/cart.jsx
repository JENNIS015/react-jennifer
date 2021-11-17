import React from 'react'
import {useCartContext} from '../../context/CartContext'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'
import './cart.css'

export default function Cart() {

  const {cartList, deleteAll, formatNumber} = useCartContext()

  //const buyer = ({name: '', phone: '', email: ''})
  const precioTotal = (cartList.reduce((prev, next) => prev + (next.cantidad * next.prod.price), 0))
  console.log(precioTotal)

  const generarOrden = (e)=>
  e.prevent.default()
  let orden={}

  orden.buyer={name: 'Fede', phone: '95', email: '551'}
  orden.total=precioTotal;
  orden.items = cartList.map(cartItem =>{ const id= cartItem.prod.id;
       const nombre= cartItem.prod.nombre;
       const precio= cartItem.prod.precio*cartItem.cantidad

   return {id, nombre, precio}
  })
  
  
  var condition = !cartList
    ?.length

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

          <h5 className="total">Total:{formatNumber(precioTotal)}
          </h5>
          <button onClick= {() => deleteAll()}>Vaciar Carrito</button>
        </div>
      </div>
    )
  }
  return (
    <div className="container">
      <h3>Tu carrito está vacío</h3>
      <h5>
        ¿No sabés qué comprar? ¡Miles de productos te esperan !</h5>
      <Link to={`/`} className="waves-effect waves-light btn">
        Ir a Productos
      </Link>
    </div>
  )
}