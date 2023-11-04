import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import WishListProvider from "./contexts/WishListContext";
import AddWishProvider from "./contexts/AddWishList";
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <SidebarProvider>
    <WishListProvider>
      <CartProvider>
        <ProductProvider>
          <AddWishProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
          </AddWishProvider>
        </ProductProvider>
      </CartProvider>
    </WishListProvider>
  </SidebarProvider>
);
