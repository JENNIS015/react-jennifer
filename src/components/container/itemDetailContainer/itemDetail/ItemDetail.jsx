import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../../context/CartContext";
import "./css/itemDetail-style.css";

export const ItemDetail = ({ prod }) => {
  const { addItems, formatNumber } = useCartContext();
  const [inputType, setInputType] = useState("input");

  const onAdd = (count) => {
    setInputType("button");
    addItems({ prod, cantidad: count });
  };

  return (
    <div className='col s12 m12 l12 flex' key={prod.id}>
      <div className='card'>
        <div className='card-image waves-effect waves-block waves-light'>
          <div className='col s12 m6 l6'>
            <div>
              <img alt={prod.nombre} src={prod.urlImagen} />
            </div>
          </div>
          <div className='col s12 m5 l5 detalleProducto'>
            <h5 className='producto'>{prod.nombre}</h5>
            <span className='price'>{formatNumber(prod.price)}</span>
            {prod.stock}
            {inputType === "input" ? (
              <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} />
            ) : (
              <Link to='/cart' className='pretext comprar'>
                Ir a Carrito
              </Link>
            )}
          </div>
        </div>
        <div className='m-20'>
          <h5>Descripción</h5>
          {prod.descripcion}
        </div>
      </div>
    </div>
  );
};
