import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";

const ProductContainer = () => {
  const data = useLoaderData();
  const { category } = useParams();
  //   console.log(category);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (category === "All") {
      setProducts(data);
    } else if (category) {
      const filteredByCategory = [...data].filter(
        (product) => product.category == category
      );
      setProducts(filteredByCategory);
    } else {
      setProducts(data);
    }
  }, [category, data]);

  //
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 mb-20">
        {products && products.length > 0 ? (
          products.map((product) => (
            <Product key={product.product_id} product={product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductContainer;
