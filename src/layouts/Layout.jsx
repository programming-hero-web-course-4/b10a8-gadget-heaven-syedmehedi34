import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createContext, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
// eslint-disable-next-line react-refresh/only-export-components
export const NavContext = createContext();

const Layout = () => {
  const [clicked, setClicked] = useState(0);
  const navFunction = () => {
    setClicked(clicked + 1);
  };
  // console.log(clicked);
  return (
    <HelmetProvider>
      <NavContext.Provider value={{ navFunction, clicked }}>
        <div>
          <Navbar></Navbar>
          <div className="min-h-[calc(100vh-292px)]">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      </NavContext.Provider>
    </HelmetProvider>
  );
};

export default Layout;
