import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Home from "../pages/Home";
import ProductContainer from "../components/ProductContainer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <p>Error page</p>,
    children: [
      {
        path: "/",
        loader: () => fetch("/categories.json"),
        element: <Home></Home>,
        children: [
          {
            path: "/",
            loader: () => fetch("/products.json"),
            element: <ProductContainer></ProductContainer>,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
export default routes;
