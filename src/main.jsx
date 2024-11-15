import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeDahboard from "../pages/HomeDashboard";
import HomeOutlet from "../pages/HomeOutlet";
import ProductPage from "../pages/products";
import ManufacturerOutlet from "../pages/manufacturesOutlet";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeDahboard />,
    children: [
      {
        path: "/Home",
        element: <HomeOutlet />,
      },
      {
        path: "/Product",
        element: <ProductPage />,
      },
      {
        path: "/manufacturers",
        element: <ManufacturerOutlet />,
      },
    ],
  },

  {
    path: "/product-details",
    element: <ProductDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
