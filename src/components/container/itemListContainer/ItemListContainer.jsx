import { getFirestore } from "../../../services/getFirestore";
import { useState, useEffect } from "react/cjs/react.development";
import { useParams } from "react-router-dom";
import ItemList from "../../itemList/ItemList";
import "../itemListContainer/itemListContainer.css";

export const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    if (id) {
      const dbQueryCategoria = db
        .collection("items")
        .where("categoria", "==", id)
        .get();
      dbQueryCategoria
        .then((resp) =>
          setProducts(
            resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      const dbQuery = db.collection("items").get();
      dbQuery
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
    <div className='spinner'>
      <div className='bounce1'></div>
      <div className='bounce2'></div>
      <div className='bounce3'></div>
    </div>
  ) : (
    <div className='container'>
      <div className='row'>
        <ItemList prod={products} />
      </div>
    </div>
  );
};
