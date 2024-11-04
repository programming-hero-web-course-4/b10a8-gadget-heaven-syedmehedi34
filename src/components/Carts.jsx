import { useEffect, useState } from "react";
import { BiSort } from "react-icons/bi";
import { getAllCarts } from "../utils/LocalStorage";

const Carts = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    const cart = getAllCarts();
    setCarts(cart);
  }, [carts]);
  console.log(carts);
  //
  return (
    <div>
      <div className="w-11/12 mx-auto flex items-center justify-between mt-12">
        <h3 className="text-2xl font-bold text-titleOB">Cart</h3>
        <div className="flex items-center gap-4">
          <p className="mr-2 font-bold">Total cost: </p>
          <button className="flex items-center gap-1 border border-primary text-primary btn rounded-[32px] bg-inherit">
            <p className="font-bold">Sort by Price</p>
            <BiSort size={20} />
          </button>

          <button className="flex items-center gap-1 bg-primary text-white btn rounded-[32px] font-bold">
            Purchase
          </button>
        </div>
      </div>

      <div>
        {carts.map((cart) => (
          <div key={cart.product_id}>{cart.product_name}</div>
        ))}
      </div>
    </div>
  );
};

export default Carts;
