import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import "@smastrom/react-rating/style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
    <Toaster />
  </StrictMode>
);
