import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const ProductContainer = () => {
  const products = useLoaderData();

  //   console.log(products);

  return (
    <div>
      <h1>Hello product container</h1>
    </div>
  );
};

export default ProductContainer;
