import { NavLink, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const isCartActive =
    location.pathname === "/dashboard/Cart" ||
    (location.pathname !== "/dashboard/Wishlist" &&
      location.pathname.startsWith("/dashboard"));
  //
  return (
    <div>
      <div className="bg-primary py-10">
        <h1 className="text-[28px] font-bold text-center text-white mb-4">
          Dashboard
        </h1>
        <p className="text-center text-white w-3/5 mx-auto mb-7">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex items-center justify-center gap-5">
          <NavLink
            to="/dashboard/Cart"
            className={({ isActive }) =>
              isActive || isCartActive
                ? "py-2 border w-32 text-center rounded-[32px] click text-primary font-[600] bg-white"
                : "py-2 border w-32 text-center rounded-[32px] text-white click"
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/dashboard/Wishlist"
            className={({ isActive }) =>
              isActive
                ? "py-2 border w-32 text-center rounded-[32px] click text-primary font-[600] bg-white"
                : "py-2 border w-32 text-center rounded-[32px] text-white click"
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>

      <div className="bg-[#F7F7F7] pb-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
