import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import WishListProvider from "./contexts/WishListContext";
import CartProvider from "./contexts/CartContext";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <WishListProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </WishListProvider>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
