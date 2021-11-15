import React from 'react'
import {Link} from 'react-router-dom'
import {useCartContext} from '../../context/CartContext'

export default function Item({prod}) {

  const {formatNumber} = useCartContext()

  return (
    <Link to={`/item/${prod.id}`}>
      <div className="col s12 m6 l4" key={prod.id}>
        <div className="card">
       
          <div className="card-image waves-effect waves-block waves-light">
            <img src={prod.image} alt={prod.title}/>
          </div>

          <div className="card-content">
            <span>{`${prod.title} - ${prod.categoria}`}</span>
            <p>
              {formatNumber(prod.price)}</p>
          </div>

          <div>
              <button className="detalle">Detalle</button>
          </div>
      
        </div>
      </div>
      </Link>
  )
}
