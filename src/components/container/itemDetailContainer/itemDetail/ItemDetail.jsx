import React,{useState} from 'react';
import ItemCount from './ItemCount';
import './itemDetail-style.css'
import { Link } from 'react-router-dom';

export const ItemDetail = ({prod}) => {

  
  function currencyFormat(num) {
    return '$' + num
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  const [inputType, setInputType] = useState('input')
  function onAdd (count) {
    setInputType('button')
    console.log("Se agregó " + count + ' ' + prod.title)
  }
  return (
    <div className="col s12 m12 l12 flex" key={prod.id}>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <div className="col s12 m7 l7">
            <img  alt={prod.title} src={prod.image}/>
          </div>

          <div className="col s12 m5 l5 detalleProducto">
            <h5 className="producto">{prod.title}</h5>
            <span className="price">
              {currencyFormat(prod.price)}</span>
             
            <div onClick={()=>onAdd}>
              {
                inputType === 'input'?
                <ItemCount stock={prod.stock} initial="1" onAdd={onAdd}/>
                :
                <Link to="/cart" className="pretext comprar">Ir a Carrito</Link>  
              }
            
            </div>
            
          </div>
        </div>
        <div></div>
      </div>
    </div>

  )
}