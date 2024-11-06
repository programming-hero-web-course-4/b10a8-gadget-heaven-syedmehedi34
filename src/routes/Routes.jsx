import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Home from "../pages/Home";
import ProductContainer from "../components/ProductContainer";
import ProductDetails from "../pages/ProductDetails";
import Carts from "../components/Carts";
import Wishlists from "../components/Wishlists";
import Error from "../pages/Error";
import Faqs from "../pages/Faqs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("/categories.json"),
        element: <Home></Home>,
        children: [
          {
            path: "/",
            loader: () => fetch("../products.json"),
            element: <ProductContainer></ProductContainer>,
          },
          {
            path: "/category/:category",
            element: <ProductContainer></ProductContainer>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/",
            element: <Carts></Carts>,
          },
          {
            path: "/dashboard/Cart",
            element: <Carts></Carts>,
          },
          {
            path: "/dashboard/Wishlist",
            element: <Wishlists></Wishlists>,
          },
        ],
      },
      {
        path: "/statistics",
        loader: () => fetch("./products.json"),
        element: <Statistics></Statistics>,
      },
      {
        path: "/faqs",
        element: <Faqs></Faqs>,
      },

      {
        path: "/product/:productId",
        loader: () => fetch("/products.json"),
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);
export default routes;
