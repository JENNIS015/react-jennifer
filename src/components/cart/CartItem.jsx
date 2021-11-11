import React from 'react'

export default function CartItem(prodCart) {
  console.log(prodCart)

  return (

    <tr>

      <td>
        <img src={prodCart.productos.prod.image} alt={prodCart.productos.prod.title}/>
      </td>

      <td>
        <span>{`${prodCart.productos.prod.title}`}</span>
      </td>
      <td>
        <p>
          {prodCart.productos.prod.price}</p>
      </td>
      <td>
        <p>x
          {prodCart.productos.cantidad}</p>
      </td>
    </tr>

  )
}