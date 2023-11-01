import React, { createContext, useState, useEffect, useRef } from "react";
import Dialog from "../components/Dialog";

//
export const AddWishList = createContext();

export default function AddWishProvider({ children }) {
  //cart state
  const [wish, setWish] = useState([]);
  //item amount state
  const [itemAmount, setItemAmount] = useState(0);
  //total price state
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = wish.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });

  //update item amount
  //add to cart
  const addToWish = (product, id) => {
    const newItem = { ...product, amount: 1 };
    //check item
    const wishItem = wish.find((item) => {
      return item.id === id;
    });
    //if cart item is already in the cart
    if (wishItem) {
      const newWish = [...wish].map((item) => {
        if (item.id === id) {
          return { ...item, amount: wishItem.amount + 1 };
        } else {
          return item;
        }
      });
      setWish(newWish);
    } else {
      setWish([...wish, newItem]);
    }
  };
  //remove from cart
  const removeFromWish = (id) => {
    const newWish = wish.filter((item) => {
      return item.id !== id;
    });
    setWish(newWish);
  };
  //clear cart
  const clearWish = () => {
    setWish([]);
  };
  //increase amount
  const increaseAmount = (id) => {
    const wishItem = wish.find((item) => item.id === id);
    addToWish(wishItem, id);
  };
  //decrease amount
  const decreaseAmount = (id) => {
    const wishItem = wish.find((item) => {
      return item.id === id;
    });
    if (wishItem) {
      const newWish = wish.map((item) => {
        if (item.id === id) {
          return { ...item, amount: wishItem.amount - 1 };
        } else {
          return item;
        }
      });
      setWish(newWish);
    }

    if (wishItem.amount < 2) {
      removeFromWish(id);
    }
  };

  //confirm delete
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    //Update
    nameProduct: "",
  });
  const idProductRef = useRef();

  const areUSureDelete = (choose) => {
    if (choose) {
      //clear wish
      setWish([]);
    }
    handleDialog("", false);
  };
  const handleDialog = (message, isLoading, nameProduct) => {
    setDialog({
      message,
      isLoading,
      //Update
      nameProduct,
    });
  };

  const handleDelete = (id) => {
    //Update
    // const index = id.findIndex((p) => p.id === id);

    handleDialog("Are you sure you want to delete?", true, id.title);
    idProductRef.current = id;
  };
  return (
    <AddWishList.Provider
      value={{
        wish,
        addToWish,
        removeFromWish,
        clearWish,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
        handleDelete,
      }}
    >
      {children}
      {dialog.isLoading && (
        <Dialog
          nameProduct={dialog.nameProduct}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}
    </AddWishList.Provider>
  );
}
