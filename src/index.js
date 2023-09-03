import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsPage from "./Components/Pages/NewsPage";
import SalesPage from "./Components/Pages/SalesPage";
import MoviePage from "./Components/Pages/MoviePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/News",
    element: <NewsPage />,
  },
  {
    path: "/Sales",
    element: <SalesPage />,
  },
  {
    path: "/movies/:id",
    element: <MoviePage />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
