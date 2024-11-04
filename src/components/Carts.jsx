import { useContext, useEffect, useState } from "react";
import { BiSort } from "react-icons/bi";
import { getAllCarts, removeCarts } from "../utils/LocalStorage";
import { MdDelete } from "react-icons/md";
import { NavContext } from "../layouts/Layout";

const Carts = () => {
  const { navFunction } = useContext(NavContext);

  const [carts, setCarts] = useState([]);
  useEffect(() => {
    const cart = getAllCarts();
    setCarts(cart);
  }, []);

  const handleRemove = (id) => {
    removeCarts(id);
    const cart = getAllCarts();
    setCarts(cart);
  };

  //
  return (
    <div>
      <div className="w-11/12 mx-auto flex items-center justify-between py-12">
        <h3 className="text-2xl font-bold text-titleOB">Cart</h3>
        <div className="flex items-center gap-4">
          <p className="mr-2 font-bold">Total cost: </p>
          <button className="flex items-center gap-1 border border-primary text-primary btn rounded-[32px] bg-inherit">
            <p className="font-bold">Sort by Price</p>
            <BiSort size={20} />
          </button>

          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="flex items-center gap-1 bg-primary text-white btn rounded-[32px] font-bold"
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="mt-8 w-11/12 mx-auto space-y-4">
        {carts.map((cart) => (
          <div
            key={cart.product_id}
            className="bg-white p-6 rounded-2xl flex items-center gap-6"
          >
            <div className="h-full">
              <img
                className="w-36 h-24 object-cover"
                src={cart.product_image}
                alt=""
              />
            </div>

            <div className="flex-grow space-y-2">
              <h1 className="text-textOF text-xl font-[600]">
                {cart.product_name}
              </h1>
              <p className="text-textOF60">{cart.description}</p>
              <h3 className="text-lg font-[600] text-textOF80">{cart.price}</h3>
            </div>

            <div
              onClick={() => {
                handleRemove(cart.product_id);
                navFunction();
              }}
              className="btn btn-circle bg-inherit border-none"
            >
              <MdDelete size={22}></MdDelete>
            </div>
          </div>
        ))}
      </div>
      <dialog id="my_modal_1" className="modal max-w-96 mx-auto">
        <div className="modal-box">
          <div className="flex flex-col items-center justify-center">
            <div>
              <img className="w-12 h-12" src="/assets/modal_img.png" alt="" />
            </div>
            <h2 className="text-2xl font-bold text-textOF mt-5 text-center">
              Payment Successful
            </h2>
            <div className="divider my-2"></div>
            <p className="mb-1 text-textOF60 font-[500] text-center">
              Thanks for purchasing.
            </p>
            <p className=" text-textOF60 font-[500] text-center">
              Total: 2449.96
            </p>
          </div>

          <div className="modal-action w-full">
            <form method="dialog" className="w-full">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn rounded-[32px] w-full">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Carts;
