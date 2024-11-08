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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 ">
        {products && products.length > 0 ? (
          products.map((product) => (
            <Product key={product.product_id} product={product} />
          ))
        ) : (
          <div className="w-full">
            <div className="">
              <div className="">
                <img className="w-fit" src="/no-products.svg" alt="" />
              </div>
              <p className="text-center text-textOF font-semibold text-xl">
                Sorry! No product found
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductContainer;
