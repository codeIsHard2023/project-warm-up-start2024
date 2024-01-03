import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./Pages/Home.jsx";
import Gallery from "./Pages/Gallery.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/gallery",
        element: <Gallery />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
