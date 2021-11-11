import React from 'react'
import {useCartContext} from '../../context/CartContext'
import CartItem from './CartItem'
export default function Cart() {
  const {cartList, deleteAll} = useCartContext()

  return (
      
    <div className="container">
    <div className="row">
      <table>
        <tr>
          <td>
            <strong>Imagen Ilustrativa</strong>
          </td>
          <td>
            <strong>Producto</strong>
          </td>
          <td>
            <strong>Precio</strong>
          </td>
          <td>
            <strong>Unidad</strong>
          </td>
        </tr>

        {cartList.map(prodCart => <CartItem key={prodCart.prod.id} productos={prodCart}/>)}
      <button onClick= {() => deleteAll()}>Vaciar Carrito</button>
      </table>
    </div></div>
  )
}
