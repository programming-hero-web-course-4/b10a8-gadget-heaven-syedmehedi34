/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Product = ({ product }) => {
  //   console.log(product);
  const {
    product_id,
    product_name,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  return (
    <div className=" rounded-2xl bg-white p-5 shadow-sm">
      <div className="w-full rounded-xl h-[200px]">
        <img
          className="w-full rounded-xl h-[200px] object-cover"
          src={product_image}
          alt={product_title}
        />
      </div>
      <h1 className="text-textOF text-[22px] font-[600] mt-6 mb-3">
        {product_name}
      </h1>
      <p className="text-textOF60 text-lg font-[500]">Price : {price} $</p>
      <Link to={`/product/${product_id}`}>
        <div className="text-primary text-lg font-[600] px-5 border w-fit rounded-[32px] border-primary mt-4 btn bg-inherit hover:bg-inherit">
          View Details
        </div>
      </Link>
    </div>
  );
};

export default Product;
