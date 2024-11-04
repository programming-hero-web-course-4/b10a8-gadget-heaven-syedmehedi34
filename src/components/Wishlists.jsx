import { useEffect, useState } from "react";
import { getAllWishlist } from "../utils/LocalStorage";

const Wishlists = () => {
  const [wishlists, setWishlists] = useState([]);
  useEffect(() => {
    const wishlist = getAllWishlist();
    setWishlists(wishlist);
  }, []);
  //
  return (
    <div>
      <div className="w-11/12 mx-auto flex items-center justify-between mt-12">
        <h3 className="text-2xl font-bold text-titleOB">Wishlist</h3>
      </div>

      {wishlists.map((wishlist) => (
        <div key={wishlist.product_id}>{wishlist.product_name}</div>
      ))}
    </div>
  );
};

export default Wishlists;
