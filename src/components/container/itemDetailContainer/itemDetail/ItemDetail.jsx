import { useState} from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../../context/CartContext";


export const ItemDetail = ({ prod }) => {
  const {message, addItems, formatNumber } = useCartContext();
  const [inputType, setInputType] = useState("input");

  const onAdd = (count) => {
  
    addItems({ ...prod, cantidad: count })
    setInputType("button");

  }

  const imgUrl = prod.urlImagen;
  return (
    <div className='col s12 m12 l12 flex' key={prod.id}>
      <div className='card'>
        <div className='card-image waves-effect waves-block waves-light'>
          <div className='col s12 m6 l6'>
            <div>
              <img
                alt={prod.nombre}
                className='imgDetail'
                src={imgUrl}
              />
            </div>
          </div>
          <div className='col s12 m5 l5 detalleProducto'>
            <h5 className='producto'>{prod.nombre}</h5>
            <span className='price'>{formatNumber(prod.price)}</span>
            
            {inputType === "input" ? (
              <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} />
            ) : (
              <Link to='/cart' className='pretext comprar'>
                Ir a Carrito
              </Link>
            )}
            <span className='stockDisponible'>Stock Disponible: {prod.stock}</span>
            <p className='error'>{message}</p>
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
