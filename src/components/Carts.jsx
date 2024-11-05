import { useContext, useEffect, useState } from "react";
import { BiSort } from "react-icons/bi";
import { getAllCarts, removeCarts } from "../utils/LocalStorage";
import { MdDelete } from "react-icons/md";
import { NavContext } from "../layouts/Layout";
import { useNavigate } from "react-router-dom";

const Carts = () => {
  const { navFunction, clicked } = useContext(NavContext);

  const [totalPrice, setTotalPrice] = useState();

  const [carts, setCarts] = useState([]);
  useEffect(() => {
    const cart = getAllCarts();
    setCarts(cart);
    // const total = cart.reduce((sum, item) => sum + item.price, 0);
    // setTotalPrice(total.toFixed(2));
  }, [clicked]);
  //

  useEffect(() => {
    const priceCart = getAllCarts();
    const total = priceCart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total.toFixed(2));
  }, []);
  //
  const handleRemove = (id) => {
    removeCarts(id.product_id);
    const cart = getAllCarts();
    setCarts(cart);
    const newPrice = totalPrice - id.price;
    setTotalPrice(newPrice.toFixed(2));
  };

  // sort by price
  function sortByPriceDescending() {
    const sorted = [...carts].sort((a, b) => b.price - a.price);
    setCarts(sorted);
  }

  // purchase button lc work
  function removeItemFromLocalStorage() {
    localStorage.removeItem("cart");
  }

  // modal close button and go to home
  const navigate = useNavigate();
  const handleGoToHome = () => {
    navigate("/");
  };

  // purchaseClicked
  const [purchaseClick, setPurchaseClick] = useState(false);
  const purchaseClicked = () => {
    setPurchaseClick(!purchaseClick);
  };

  //
  return (
    <div>
      <div className="w-11/12 mx-auto flex items-center justify-between py-12">
        <h3 className="text-2xl font-bold text-titleOB">Cart</h3>
        <div className="flex items-center gap-4">
          <p className="mr-2 font-bold">
            Total Price: {purchaseClick ? "0.00" : `${totalPrice}`}
          </p>
          <button
            onClick={() => sortByPriceDescending()}
            className="flex items-center gap-1 border border-primary text-primary btn rounded-[32px] bg-inherit"
          >
            <p className="font-bold">Sort by Price</p>
            <BiSort size={20} />
          </button>

          {/*  */}
          <button
            onClick={() => {
              document.getElementById("my_modal_1").showModal();
              removeItemFromLocalStorage();
              navFunction();
              purchaseClicked();
            }}
            className="flex items-center gap-1 bg-primary text-white btn rounded-[32px] font-bold"
            disabled={totalPrice == 0 ? true : false}
          >
            Purchase
          </button>
          {/*  */}
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
                className="w-36 h-24 object-cover rounded-xl"
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
                handleRemove(cart);
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
              Total: {totalPrice}
            </p>
          </div>

          <div className="modal-action w-full">
            <form method="dialog" className="w-full">
              {/* if there is a button in form, it will close the modal */}
              <button
                // onClick={handleGoToHome}
                onClick={() => {
                  handleGoToHome();
                }}
                className="btn rounded-[32px] w-full"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Carts;
