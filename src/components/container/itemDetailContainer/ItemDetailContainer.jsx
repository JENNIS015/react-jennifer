import React from "react";
import { getFirestore } from "../../../services/getFirestore";
import { useState, useEffect } from "react/cjs/react.development";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./itemDetail/ItemDetail";
import Loading from "../../loading/Loading";
import ErrorNoExiste from "../../errores/ErrorNoExiste";

const ItemDetailContainer = () => {
  const [productIndiv, setProdIndiv] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = db.collection("items");
    id ? (
      dbQuery
        .doc(id)
        .get()
        .then((res) => {
          setProdIndiv({ id: res.id, ...res.data() });
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    ) : (
      <ErrorNoExiste />
    );
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <div className='container'>
        <div className='row'>
          <ItemDetail prod={productIndiv} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
