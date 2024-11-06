import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getAllCarts, getAllWishlist } from "../utils/LocalStorage";
import { useContext, useEffect, useState } from "react";
import { NavContext } from "../layouts/Layout";

const Navbar = () => {
  // context api
  const clicked = useContext(NavContext);

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setCart(getAllCarts());
    setWishlist(getAllWishlist());
  }, [clicked]);

  // console.log(cart.length);
  //

  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/faqs">FAQs</NavLink>
      </li>
    </>
  );
  const categoryPaths = new Set([
    "/",
    "/category/All",
    "/category/Laptop",
    "/category/Phone",
    "/category/Accessories",
    "/category/Smartwatch",
    "/category/iPhone",
  ]);
  const isCategoryPage = (path) => categoryPaths.has(path);

  const location = useLocation();

  return (
    <div>
      <style>
        {`
          .active {
           
            ${
              isCategoryPage(location.pathname)
                ? "color: white !important;"
                : "color: #9538E2 !important;"
            }
            font-weight: 800 !important;

            ${
              isCategoryPage(location.pathname)
                ? "background-color: inherit !important;"
                : "background-color: inherit !important;"
            }
              ${
                isCategoryPage(location.pathname)
                  ? "text-decoration: underline; !important"
                  : ""
              }
 
        `}
      </style>

      <div
        className={` ${
          isCategoryPage(location.pathname)
            ? "border border-b-0 mt-5 mx-5 "
            : "w-11/12 mx-auto"
        } border-b-0 px-1 pt-1 rounded-t-[32px]`}
      >
        <div
          className={`navbar  ${
            isCategoryPage(location.pathname)
              ? "bg-primary rounded-t-[32px]"
              : ""
          }`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow  font-semibold ${
                  isCategoryPage(location.pathname)
                    ? "text-white"
                    : "text-titleOB70"
                }`}
              >
                {navItems}
              </ul>
            </div>
            <Link
              to="/"
              className={`btn btn-ghost text-[18px] md:text-2xl max-[395px]:text-sm font-bold  hover:bg-inherit  ${
                isCategoryPage(location.pathname)
                  ? "text-white"
                  : "text-titleOB"
              }`}
            >
              Gadget Heaven
            </Link>
          </div>
          <div
            className={`navbar-center hidden lg:flex font-semibold ${
              isCategoryPage(location.pathname)
                ? "text-white"
                : "text-titleOB70"
            }`}
          >
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div
            className={`navbar-end gap-3 ${
              isCategoryPage(location.pathname) ? "mr-7" : ""
            }`}
          >
            {/* cart nav  */}
            <Link to="/dashboard/Cart">
              <div className="relative btn btn-circle border border-[#0B0B0B1A] bg-white min-h-0 h-8 w-8 md:h-10 md:w-10">
                <p>
                  <HiShoppingCart size={20} />
                </p>
                <span className="absolute -top-2 -right-3 badge text-red-400 text-[9px] md:text-sm">
                  {cart.length}
                </span>
              </div>
            </Link>
            {/* cart nav  */}

            {/* wishlist nav  */}
            <Link to="/dashboard/Wishlist">
              <div className="relative btn btn-circle border border-[#0B0B0B1A] bg-white min-h-0 h-8 w-8 md:h-10 md:w-10">
                <p>
                  <FaHeart size={18} />
                </p>
                <span className="absolute -top-2 -right-3 badge text-red-400 text-[9px] md:text-sm">
                  {wishlist.length}
                </span>
              </div>
            </Link>
            {/* wishlist nav  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
