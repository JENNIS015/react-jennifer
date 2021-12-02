import { useCartContext } from "../../context/CartContext";
import { useEffect } from "react";
import CartItem from "./CartItem";
import Loading from "../loading/Loading";
import "../cart/css/estilo_sucess.css";
const Sucess = () => {
  const {
    dataOrder,
    detalleOrden,
    formData,
    dbQuery,
    guardarDetalle,
    formatNumber,
  } = useCartContext();

  useEffect(() => {
    dbQuery
      .collection("orders")
      .doc(dataOrder.id)
      .get()
      .then((snapshot) => guardarDetalle(snapshot.data()))
      .catch((err) => console.log(err));
  }, [dataOrder, dbQuery]); 

  return (
    <div className='row'>
      {detalleOrden ? (
        <div className="container">
          <div className='col s12 m5 pa-30'>
            <h3 className='orden'>Orden: #{dataOrder.id}</h3>
            <hr />
            <h2>¡Muchas gracias {formData.nombre}!</h2>
            <h5>Datos de contacto</h5>

            <p>{formData.email}</p>
            <p>{formData.telefono}</p>

            <br />
            <p className='totalSucess'>Total: {formatNumber(detalleOrden.total)}</p>
          </div>
          <div className='col s12 m7'>
            <h4>Detalle de orden</h4>
            <table className="sucess">
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
