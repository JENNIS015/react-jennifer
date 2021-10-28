import React from 'react';

export const ItemDetail = ({imagen, title, price, id}) => {

  return (
    <div className="col s12 m6 l6" key={id}>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img src={imagen} alt={title}/>
                  </div>

        <div className="card-content">
        <p>{title}</p>
        <p>ARS {price}</p>

        </div>

        <div>
          <button className="btn">Comprar</button>
        </div>
      </div>
    </div>
  )
}