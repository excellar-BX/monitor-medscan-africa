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
import ManufacturerDetails from "../pages/ManufacturerDetails";
import BatchDetails from "../pages/BatchDetails";
import PackageDetails from "../pages/PackageDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeDahboard />,
    children: [
      {
        index: true,
        element: <HomeOutlet />,
      },
      {
        path: "Home",
        element: <HomeOutlet />,
      },
      {
        path: "Product",
        element: <ProductPage />,
      },
      {
        path: "product/:productName",
        element: <ProductDetails />,
      },
      {
        path: "/manufacturers",
        element: <ManufacturerOutlet />,
      },
      {
        path: "/manufacturers/:id",
        element: <ManufacturerDetails />,
      },
      {
        path: "/manufacturers/:id/:productName",
        element: <BatchDetails />,
      },
      {
        path: "/manufacturers/:id/:productName/:batchId",
        element: <PackageDetails />,
      },
    ],
  },
  {
    path: "*", // Catch-all route for undefined paths
    element: <HomeDahboard />, // Redirects to HomeDahboard
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);