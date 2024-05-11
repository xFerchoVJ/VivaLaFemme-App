import React from "react";
import ReactDOM from "react-dom/client";
import BrandsPage from "./pages/brands/BrandsPage.tsx";
import { Header } from "./components/Header.tsx";

ReactDOM.createRoot(document.getElementById("nav")!).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
