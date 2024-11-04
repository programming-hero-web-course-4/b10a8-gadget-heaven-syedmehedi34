import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  const location = useLocation();

  return (
    <div>
      <div
        className={` w-11/12 mx-auto ${
          location.pathname == "/" ? "border border-b-0 mt-5" : ""
        }  border-b-0 px-1 pt-1  rounded-t-[32px]`}
      >
        <div
          className={`navbar   ${
            location.pathname == "/" ? "bg-primary rounded-t-[32px]" : ""
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
                  location.pathname == "/" ? "text-white" : "text-titleOB70"
                }`}
              >
                {navItems}
              </ul>
            </div>
            <Link
              to="/"
              className={`btn btn-ghost text-2xl font-bold  hover:bg-inherit ${
                location.pathname == "/" ? "text-white" : "text-titleOB"
              }`}
            >
              Gadget Heaven
            </Link>
          </div>
          <div
            className={`navbar-center hidden lg:flex font-semibold ${
              location.pathname == "/" ? "text-white" : "text-titleOB70"
            }`}
          >
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="navbar-end gap-2">
            <p className="btn btn-circle border border-[#0B0B0B1A] bg-white min-h-4 h-10 w-10">
              <HiShoppingCart />
            </p>
            <p className="btn btn-circle border border-[#0B0B0B1A] bg-white min-h-4 h-10 w-10">
              <FaHeart />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
