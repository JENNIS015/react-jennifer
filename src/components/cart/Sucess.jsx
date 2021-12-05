import { useCartContext } from "../../context/CartContext";
import { useEffect } from "react";
import CartItem from "./CartItem";
import Loading from "../loading/Loading";
import "../cart/css/estilo_sucess.css";
import { getFirestore } from "../../services/getFirestore";
const Sucess = () => {
  const {
    dataOrder,
    detalleOrden,
    guardarDetalle,
    formatNumber,
  } = useCartContext();

  useEffect(() => {
    const dbQuery = getFirestore();
    dbQuery
      .collection("orders")
      .doc(dataOrder.id)
      .get()
      .then((snapshot) =>guardarDetalle(snapshot.data())
      )
      .catch((err) => console.log(err));
  }, [dataOrder,guardarDetalle]); 

 
  return (
    <div className='row'>
      {detalleOrden ? (
        <div className="container">
          <div className='col s12'>
            <h3 className='orden'>Orden: #{dataOrder.id}</h3>
            <hr />
            <h4>¡Muchas gracias {detalleOrden.buyer.nombre}!</h4>
            <h5>Datos de contacto</h5>

            <p>{detalleOrden.buyer.email}</p>
            <p>{detalleOrden.buyer.telefono}</p>

            <br />
            <p className='totalSucess'>Total: {formatNumber(detalleOrden.total)}</p>
          </div>
          <div className='col s12'>
            <h4>Detalle de orden</h4>
            <table className="sucess responsive-table">
              <tbody>
                {detalleOrden.items.map((orden) => (
                  <CartItem key={orden.id} prod={orden}/>


                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default Sucess;
