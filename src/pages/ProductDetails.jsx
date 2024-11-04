/* eslint-disable no-unused-vars */
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  addCartToLocalStorage,
  addWishlistToLocalStorage,
} from "../utils/LocalStorage";
import { NavContext } from "../layouts/Layout";

const ProductDetails = () => {
  // context
  const { navFunction } = useContext(NavContext);
  // console.log(navFunction);
  // const handleClick = () => {
  //   // Call the function from context
  //   navFunction();
  // };

  //
  const { productId } = useParams();
  const data = useLoaderData();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const singleData = data.find((product) => product.product_id == productId);
    setProduct(singleData);
  }, [data, productId]);

  // onClick button
  // const [] = useState();
  const handleAddToCart = (product) => {
    // console.log(product);
    addCartToLocalStorage(product);
  };
  const addToWishlist = (product) => {
    addWishlistToLocalStorage(product);
  };

  //
  //
  return (
    <div className="">
      <div className="text-center pt-8 pb-64 bg-primary">
        <h1 className="text-[28px] font-bold text-white">Product Details</h1>
        <p className="text-white w-2/3 mx-auto mt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="relative">
        <div className="h-[550px] bg-[#F7F7F7]"></div>

        {/*  */}
        <div className="bg-white  w-10/12 top-0 absolute transform left-1/2 -translate-x-1/2 -translate-y-[35%] rounded-3xl flex gap-8 p-7">
          <div className="w-2/5 bg-[#ECECEC] flex">
            <img
              className="object-cover rounded-2xl"
              src={product.product_image}
              alt=""
            />
          </div>
          {/*  */}
          <div>
            <h1 className="text-[28px] font-bold text-textOF">
              {product.product_name}
            </h1>
            <h3 className="text-textOF80 text-xl font-[600] mt-3 mb-4">
              Price : {product.price} $
            </h3>
            <div
              className={`badge py-1 px-3  ${
                product.availability
                  ? "text-[#309C08] border-[#309C08] bg-[#309C081A]"
                  : "text-red-600 bg-red-50 border-red-200"
              }`}
            >
              {product.availability ? "In Stock" : "Not Available"}
            </div>

            <p className="text-textOF60 my-4">{product.description}</p>
            <div>
              <h1 className="text-lg font-bold text-textOF">Specification: </h1>
              <ul className="list-decimal list-inside text-textOF60 my-3">
                {product?.specification?.map((li, i) => (
                  <li key={i}>{li}</li>
                )) || <li>No specifications available.</li>}
              </ul>
            </div>

            <div>
              <p className="text-textOF font-bold">Rating : {product.rating}</p>
              <div className="flex items-center gap-5 ">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="bg-[#09080F0D] px-2 py-1 rounded-full text-sm">
                  {product.rating}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-5">
              {/* Cart button  */}
              <button
                onClick={() => {
                  handleAddToCart(product);
                  navFunction();
                }}
                className="flex items-center gap-2 bg-primary text-white btn w-fit rounded-[32px]"
              >
                <p className=" font-bold">Add To Cart</p>
                <IoCartOutline size={25} />
              </button>

              {/* Wishlist button */}
              <button
                onClick={() => {
                  addToWishlist(product);
                  navFunction();
                }}
                className="btn btn-circle border border-[#0B0B0B1A] bg-white min-h-4 h-12 w-12 font-bold"
              >
                <CiHeart size={25} />
              </button>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default ProductDetails;
