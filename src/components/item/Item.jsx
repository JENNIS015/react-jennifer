import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Item = ({ prod }) => {
  const { formatNumber } = useCartContext();
  const imgUrl = process.env.PUBLIC_URL + prod.urlImagen;
  
  return (
    <Link to={`/item/${prod.id}`}>
      <div className='col s12 m6 l4' key={prod.id}>
        <div className='card hoverable'>
          <div className='card-image waves-effect waves-block waves-light'>
            <img src={imgUrl} alt={prod.nombre} />
          </div>

          <div className='card-content'>
            <span>{`${prod.nombre.slice(0, 30) + "..."}`}</span>

            <p className='mayuscula prod-categoria'>{`${prod.categoria}`}</p>
            <div className='prod-price'>{formatNumber(prod.price)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Item;
