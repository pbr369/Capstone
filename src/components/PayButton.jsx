import React, { useContext } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { CartContext } from "../contexts/CartContext";

const PayButton = ({ cartItems }) => {

  const { cart } =
    useContext(CartContext);
  
  const handleCheckout = () => {
    console.log("Cart data:", cart); //debug
    axios
      .post(`http://localhost:4242/stripe/create-checkout-session`, {
        cartItems: cart,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button className="bg-primary flex p-4 justify-center items-center
      text-white w-full font-medium" onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};

export default PayButton;
