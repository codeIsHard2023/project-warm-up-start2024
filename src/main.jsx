import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import Gallery from "./Pages/Gallery.jsx";
import CharCard from "./Components/CharCard.jsx";
import IndividualCard from "./Components/IndividualCard.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/gallery",
        element: <Gallery />,
        children: [
          {
            path: "/gallery/character",
            element: <CharCard />,
            children: [
              {
                path: "/gallery/character:name",
                element: <IndividualCard />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
