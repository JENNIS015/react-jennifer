import React from 'react'
import {Link} from 'react-router-dom'
import {useCartContext} from '../../context/CartContext'

export default function Item({prod}) {

  const {formatNumber} = useCartContext()

  return (
    <Link to={`/item/${prod.id}`}>
      <div className="col s12 m6 l4" key={prod.id}>
        <div className="card hoverable">
       
          <div className="card-image waves-effect waves-block waves-light">
            <img src={prod.urlImagen} alt={prod.nombre}/>
          </div>

          <div className="card-content">
            <span>{`${prod.nombre.slice(0,30) + '...'}`}</span>
            <p className="mayuscula">{`${prod.categoria}`}</p>
            <p>
              {formatNumber(prod.price)}</p>
          </div>

      
        </div>
      </div>
      </Link>
  )
}
