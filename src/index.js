import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import  ProductsProvider  from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
/* import { Auth0Provider } from "@auth0/auth0-react"; */

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <FilterProvider>
        <App />
        </FilterProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
