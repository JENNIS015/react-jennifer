import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
export default function CartItem(prodCart) {
  const { formatNumber, deleteItem } = useCartContext();

  return (
    <tr>
      <td>
        <img
          src={prodCart.productos.prod.urlImagen}
          className='cart'
          alt={prodCart.productos.prod.nombre}
        />
      </td>

      <td>
        <Link to={`/item/${prodCart.productos.prod.id}`}>
          <p>{`${prodCart.productos.prod.nombre}`}</p>
        </Link>
      </td>
      <td>
        <p>{formatNumber(prodCart.productos.prod.price)}</p>
      </td>
      <td>
        <p>x {prodCart.productos.cantidad}</p>
      </td>
      <td>
        <p>
          {formatNumber(
            prodCart.productos.cantidad * prodCart.productos.prod.price
          )}
        </p>
      </td>
      <td>
        <button onClick={() => deleteItem(prodCart.productos.prod.id)}>
          <i className='tiny material-icons'>delete</i>
        </button>
      </td>
    </tr>
  );
}
