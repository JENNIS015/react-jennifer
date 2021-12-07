import { getFirestore } from "../../../services/getFirestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../itemList/ItemList";
import "../itemListContainer/css/itemListContainer.css";
import Loading from "../../loading/Loading";
import { useLocation } from "react-router-dom";

export const ItemListContainer = () => {
  {console.log("paso2")}
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const location = useLocation();
 
  useEffect(() => {
    let isMounted = true; 
    var query = getFirestore().collection("items")
    if (id) {
      query = query.where("categoria", "==", id);
   
    } else if (location.pathname === "/") {
      query = query.where("ofertaEspecial", "==", true);
    }
    {console.log("paso3")}
    query
      .get()
      .then((resp) =>{if(isMounted) 
        setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })));   
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    
      return () => { isMounted = false };  
  }, [id,location]);

  return loading ? (
    <Loading />
  ) : (
    <div className='container'>
      <div className='row'>
        {id ? (
          <>
            <h1 className='categoriaTitle'>{id}</h1>
            <p className='resultadosCantidad'>{products.length} Resultados</p>
          </>
        ) : (
          ""
        )}
        <ItemList prod={products} key={products.id} />
      </div>
    </div>
  );
};
