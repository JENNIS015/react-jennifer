import FormOrder from "../cart/FormOrder"
import { useCartContext } from "../../context/CartContext";

const OrderSucess =()=>{
    const { cartList, deleteAll, formatNumber, precioTotal } = useCartContext();

return(
<div>
<h1>¡Muchas gracias!</h1>
<h4>Compra Finalizada</h4>

<p>Tu código de compra es:</p>
</div>
)
}

export default OrderSucess