import { Link } from "react-router-dom";
const Products = (props) => {
  const { product } = props;
  console.warn(props)
  return (
    <div className='card mb-3'>
      <h3 className='card-header'>{product.name}</h3>
      <Link href={`/product?slug=${product.slug}-${product.databaseId}`}>
        <a><img alt='Product Image' src={product.image.sourceUrl}></img></a>
      </Link>
      <div className='card-body'>
        <h5 className='card-title'>{product.price}</h5>
      </div>
    </div>
  );
};

export default Products;
