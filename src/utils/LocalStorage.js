/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";

const getAllCarts = () => {
  const all = localStorage.getItem("cart");

  if (all) {
    const cart = JSON.parse(all);
    return cart;
  } else {
    return [];
  }
};

//
const addCartToLocalStorage = (product) => {
  // get all previously saved coffee data
  const carts = getAllCarts();
  const isExist = carts.find((item) => item.product_id == product.product_id);
  if (isExist) return toast.error("product already exists in cart!");

  carts.push(product);
  localStorage.setItem("cart", JSON.stringify(carts));
  toast.success("Successfully added to cart!");
};

//------------------------------
// wishlist
//------------------------------
const getAllWishlist = () => {
  const all = localStorage.getItem("wishlist");

  if (all) {
    const wishlist = JSON.parse(all);
    return wishlist;
  } else {
    return [];
  }
};

const addWishlistToLocalStorage = (product) => {
  const wishlist = getAllWishlist();
  const isExist = wishlist.find(
    (item) => item.product_id == product.product_id
  );
  if (isExist) return toast.error("product already exists in wishlist!");

  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  toast.success("Successfully added to wishlist! ");
};
const removeWishlist = (id) => {
  // get all previously saved coffee data
  const localWishlists = getAllWishlist();
  const remaining = localWishlists.filter(
    (product) => product.product_id != id
  );
  localStorage.setItem("wishlist", JSON.stringify(remaining));
  toast.success("Successfully Removed!");
};

//
export {
  addCartToLocalStorage,
  getAllCarts,
  addWishlistToLocalStorage,
  getAllWishlist,
  removeWishlist,
};

// remove a coffee from local storage
// const removeFavorite = (id) => {
//     // get all previously saved coffee data
//     const favorites = getAllFavorites();
//     const remaining = favorites.filter((coffee) => coffee.id != id);
//     localStorage.setItem("favorites", JSON.stringify(remaining));
//     toast.success("Successfully Removed!");
//   };
