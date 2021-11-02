import React from 'react';
import ItemCount from './ItemCount';
import './itemDetail-style.css'

export const ItemDetail = ({imagen, title, price, id, stock}) => {

  function currencyFormat(num) {
    return '$' + num
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  const onAdd = (count) => {
    alert("Se agregó " + count + ' ' + title)
  }
  return (
    <div className="col s12 m12 l12 flex" key={id}>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <div className="col s12 m7 l7">
            <img src={imagen} alt={title}/>
          </div>

          <div className="col s12 m5 l5 detalleProducto">
            <h5 className="producto">{title}</h5>
            <span className="price">
              {currencyFormat(price)}</span>

            <ItemCount stock={stock} initial="1" onAdd={onAdd}/>
            <button className="pretext comprar">COMPRAR</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>

  )
}