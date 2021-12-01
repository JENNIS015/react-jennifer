import { getFirestore } from "../../../services/getFirestore";
import { useState, useEffect } from "react/cjs/react.development";
import { useParams } from "react-router-dom";
import ItemList from "../../itemList/ItemList";
import "../itemListContainer/css/itemListContainer.css"
import Loading from "../../loading/Loading";

export const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const dbQ=db.collection("items");
    if (id) {
      dbQ.where("categoria", "==", id).get()
        .then((resp) =>
          setProducts(
            resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      dbQ.get()
        .then((resp) =>
          setProducts(
            resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id]);
  
  return loading ? (
    <Loading/>
  ) : (
    <div className='container'>
    
      <div className='row'>
        <ItemList prod={products} />
      </div>
    </div>
  );
};
