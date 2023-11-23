import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import Dialog from "../components/Dialog";

export default function CartItem({ item }) {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  const { id, brand, product_name, image_url_1, price, amount, description, total } =
    item;

  function formatPrice(price) {
    // Convert the price to a string
    const priceString = price.toString();

    // Split the string into whole and decimal parts
    const [wholePart, decimalPart] = priceString.split(".");

    // Add commas to the whole part for thousands
    const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Combine the whole and decimal parts, and add the PHP symbol
    const formattedPrice = `₱${formattedWholePart}${
      decimalPart ? `.${decimalPart}` : ""
    }`;

    return formattedPrice;
  }

  return (
    <div
      className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200
    w-full font-light text-gray-500"
    >
      <div
        className="w-full min-h-[150px] flex items-center
    gap-x-4"
      >
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image_url_1} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title and remove ico */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] 
          text-primary hover:underline"
            >
              {brand} / {product_name}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose
                className="text-gray-500 
              hover:text-red-500 transition"
              />
            </div>
          </div>
          <div
            className=" flex gap-x-2 h-[36px] 
        text-sm"
          >
            {/* quantity */}
            <div
              className="flex flex-1 max-w-[100px] items-center
          h-full border text-black font-medium"
            >
              {/* minus icon */}
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex  justify-center 
            items-center cursor-pointer h-full"
              >
                <IoMdRemove />
              </div>
              {/* amount */}
              <div
                className="h-full flex justify-center items-center
            px-2"
              >
                {amount}
              </div>
              {/* plus icon */}
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center 
            items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div
              className="flex-1 flex items-center 
          justify-around"
            >
              {formatPrice(price)}
            </div>
            {/* final price */}
            <div
              className="flex flex justify-end
          items-center text-black font-medium"
            >
              {`₱${(
                parseFloat(price.replace(/[^\d.]/g, "")) * amount
              ).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
