import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartItem = (prod)=> {
  const { formatNumber, deleteItem } = useCartContext();

  const productos= prod.prod
  
  return (
    <tr>
      <td>
        <img
          src={productos.urlImagen}
          className='cart'
          alt={productos.nombre}
        />
      </td>

      <td>
        <Link to={`/item/${productos.id}`}>
          <p>{`${productos.nombre}`}</p>
          <p>x {productos.cantidad}</p>
        </Link>
      </td>
      <td>
        <p>{formatNumber(productos.price)}</p>
      </td>
    
      <td>
        <p className="strong">{formatNumber(productos.cantidad * productos.price)}</p>
      </td>

    <td className="borrar">
        <button onClick={() => deleteItem(productos.id)}>
          <i className='tiny material-icons'>delete</i>
        </button>
      </td>
      
    </tr>
  );
}
export default CartItem