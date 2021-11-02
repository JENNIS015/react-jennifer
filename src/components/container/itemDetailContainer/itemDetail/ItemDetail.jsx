import React  from 'react';
import ItemCount from './ItemCount';
import './itemDetail-style.css'
export const ItemDetail = ({imagen, title, price, id,stock}) => {

  const onAdd = (count) => {
    console.log("Se agregó " + count + '' + title )
  }
  return (
    <div className="col s12 m12 l12 flex" key={id}>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
        <div className="col s12 m4 l4">
          <img src={imagen} alt={title}/>
                  </div>
               
        <div className="col s12 m6 l6">
        <h5 className="producto">{title}</h5>
        <span className="price">ARS {price}</span>

        <ItemCount stock={stock} initial="1" onAdd={onAdd} />
        <button className="btn">Comprar</button>
        </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  
  )
}