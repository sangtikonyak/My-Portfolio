import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "./Screens/Project.jsx";
import Home from "./Screens/Home.jsx";
import Details from "./Component/Details.jsx";
import ProductContextProvider from "../ProjectContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ProductContextProvider>
  </React.StrictMode>
);
