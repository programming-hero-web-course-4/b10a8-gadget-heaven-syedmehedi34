import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const ProductContainer = () => {
  const products = useLoaderData();
  //   console.log(products);

  return (
    <div>
      <div>
        {products.map((product) => (
          <Product key={product.product_id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
