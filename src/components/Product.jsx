/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Product = ({ product }) => {
  console.log(product);
  const {
    product_id,
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
    <div>
      <h1>p</h1>
    </div>
  );
};

export default Product;
