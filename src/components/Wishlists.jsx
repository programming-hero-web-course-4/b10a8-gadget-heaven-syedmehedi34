import { useEffect, useState } from "react";
import { getAllWishlist, removeWishlist } from "../utils/LocalStorage";
import { MdDelete } from "react-icons/md";

const Wishlists = () => {
  const [wishlists, setWishlists] = useState([]);
  useEffect(() => {
    const wishlist = getAllWishlist();
    setWishlists(wishlist);
  }, []);

  const handleRemove = (id) => {
    removeWishlist(id);
    const cart = getAllWishlist();
    setWishlists(cart);
  };

  //
  return (
    <div className="">
      <div className="w-11/12 mx-auto flex items-center justify-between py-12">
        <h3 className="text-2xl font-bold text-titleOB">Wishlist</h3>
      </div>

      <div className="mt-8 w-11/12 mx-auto space-y-4">
        {wishlists.map((wishlist) => (
          <div
            key={wishlist.product_id}
            className="bg-white p-6 rounded-2xl flex items-center gap-6"
          >
            <div className="h-full">
              <img
                className="w-36 h-24 object-cover"
                src={wishlist.product_image}
                alt=""
              />
            </div>

            <div className="flex-grow space-y-2">
              <h1 className="text-textOF text-xl font-[600]">
                {wishlist.product_name}
              </h1>
              <p className="text-textOF60">{wishlist.description}</p>
              <h3 className="text-lg font-[600] text-textOF80">
                {wishlist.price}
              </h3>
            </div>

            <div
              onClick={() => handleRemove(wishlist.product_id)}
              className="btn btn-circle bg-inherit border-none"
            >
              <MdDelete size={22}></MdDelete>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlists;