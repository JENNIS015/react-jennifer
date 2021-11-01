import React from 'react'
import { Link } from 'react-router-dom'
export default function Item({prod}) {
  return (
    <div>
      <div className="col s12 m6 l4" key={prod.id}>
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img src={prod.image} alt={prod.title}/>
          </div>

          <div className="card-content">
            <span>{`${prod.title} - ${prod.categoria}`}</span>
            <p>ARS {prod.price}</p>
          </div>

          <div>
              <Link to={`/item/${prod.id}`}>
              <button className="btn">Detalle</button>

              </Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}
