import React, { useContext } from "react";
import axios from "axios";
import { CartContext } from "../contexts/CartContext";

const PayButton = ({ userId, cartItems }) => {
  const { cart } = useContext(CartContext);

  const handleCheckout = () => {
    console.log("PayButton.jsx - Cart data:", cart);
    console.log("PayButton.jsx - User ID:", userId);
    axios
      .post(`http://127.0.0.1:8000/api/stripe/create-checkout-session`, {
        cartItems: cart,
        customer_id: userId, // Include the user ID in the request payload
      })
      .then((response) => {
        console.log("Axios response:", response);
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((error) => {
        console.error("PayButton.jsx - Error making axios request:", error);
      });
  };



  return (
    <>
      <button
        className="bg-primary flex p-4 justify-center items-center
      text-white w-full font-medium"
        onClick={() => handleCheckout()}
      >
        Check out
      </button>
    </>
  );
};

export default PayButton;
