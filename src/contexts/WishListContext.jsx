import React, { useState, createContext } from "react";

export const WishListContext = createContext();

export default function WishListProvider({ children }) {
    //
    const [wishlistOpen, setWishlistOpen] = useState(false);

  const handleClose = () => {
    setWishlistOpen(false);
  };
  return (
    <WishListContext.Provider
      value={{
        wishlistOpen,
        setWishlistOpen,
        handleClose,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}
