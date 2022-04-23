import client from "../../apoloClient";
 

import { useQuery, gql } from '@apollo/client';
// import { getFirestore } from "../../../services/getFirestore";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import ItemList from "../../itemList/ItemList";
import "../itemListContainer/css/itemListContainer.css";
import Products from "./Products";
import Loading from "../../loading/Loading";


  const PRODUCTS_QUERY = gql`
  query {
    products(first: 20) {
      nodes {
        id
        averageRating
        slug
        sku
        description
        image {
          uri
          title
          sourceUrl
        }
        name
        onSale
        databaseId
      }
    }
  }
`;

export async function getStaticProps () {
  console.log("Hola")
    const { data } = await client.query( {
      query: PRODUCTS_QUERY,
    } );
  
    return {
      props: {
        // productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
        products: data?.products?.nodes ? data.products.nodes : [],
        // heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
      },
      revalidate: 1
    }
  
  };
export const ItemListContainer = (props) => {
  const { products, productCategories, heroCarousel } = props || {};

  return (
    <div>
   
        <div className='product-container'>
         
          {
           console.log(products)}
          {products.length
            ? products.map((product) => (
                <Products product={product} key={product.id} />
              ))
            : ""}
        </div>

    </div>
  );
};

 
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const { id } = useParams();
  // const location = useLocation();
 
  // useEffect(() => {
  //   let isMounted = true; 
  //   var query = getFirestore().collection("items")
  //   if (id) {
  //     query = query.where("categoria", "==", id);
   
  //   } else if (location.pathname === "/") {
  //     query = query.where("ofertaEspecial", "==", true);
  //   }

  //   query
  //     .get()
  //     .then((resp) =>{if(isMounted) 
  //       setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })));   
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
    
  //     return () => { isMounted = false };  
  // }, [id,location]);

  // return loading ? (
  //   <Loading />
  // ) : (

  //     <div className='row'>
  //       {id ? (
  //         <>
  //           <h1 className='categoriaTitle'>{id}</h1>
  //           <p className='resultadosCantidad'>{products.length} Resultados</p>
  //         </>
  //       ) : (
  //         ""
  //       )}
  //       <ItemList prod={products} key={products.id} />
  //     </div>

  // );
// };
