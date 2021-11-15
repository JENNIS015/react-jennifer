import React, {useState} from 'react';
import ItemCount from './ItemCount';
import './itemDetail-style.css'
import {Link} from 'react-router-dom';
import {useCartContext} from '../../../../context/CartContext';

export const ItemDetail = ({prod}) => {

  const {cartList, addItems, formatNumber} = useCartContext()

  const [inputType,
    setInputType] = useState('input')
  const onAdd = (count) => {
    setInputType('button')
    addItems({prod, cantidad: count})
  }

  return (
    <div className="col s12 m12 l12 flex" key={prod.id}>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <div className="col s12 m7 l7 m-20">
            <div>
              <img alt={prod.nombre} src={prod.urlImagen}/>
            </div>
            <div>
              <h5>Descripción</h5>
              {prod.descripcion}
            </div>
            </div>
            <div className="col s12 m5 l5 detalleProducto">
              <h5 className="producto">{prod.nombre}</h5>
              <span className="price">
                {formatNumber(prod.price)}</span>

              {inputType === 'input'
                ? <ItemCount stock={prod.stock} initial="1" onAdd={onAdd}/>
                : <Link to="/cart" className="pretext comprar">Ir a Carrito</Link>
}
            
          </div>
        </div>

      </div>
    </div>
  )
}
