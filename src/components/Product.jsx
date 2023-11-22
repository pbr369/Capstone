import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CartContext } from "../contexts/CartContext";
import { AddWishList } from "../contexts/AddWishList";
import Star from "../components/Star";
import SearchBar from "../components/SearchBar";
//search
import { useSelector } from "react-redux";
import Search from "./Search";

export default function Product({ product }) {
  const { addToCart } = useContext(CartContext);
  const { addToWish } = useContext(AddWishList);

  //add to wishlist
   const [isLiked, setIsLiked] = useState(false);

   const toggleLike = () => {
     setIsLiked(!isLiked);

     // Toggle the like status and add/remove the product to/from the wishlist
     addToWish(product, product.id);
   };

  //
  const { id, image_url_1, category, product_name, price, rate, brand, reviews_num, sold } = product;
  //search function
  const [searchTerm, setSearchTerm] = useState("");

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
    <div>
      <div
        className="border border-[#e4e4e4] h-[300px] mb-4
      relative overflow-hidden group transition"
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="relative">
            <button onClick={toggleLike}>
              <div
                className="flex justify-center items-center text-black 
          w-12 h-12 absolute -top-3 -left-7"
              >
                {isLiked ? (
                  <FaHeart className="text-md text-red-500" />
                ) : (
                  <FaRegHeart className="text-md" />
                )}
              </div>
            </button>
            {/* image */}
            <div
              className="w-[200px] mx-auto flex justify-center 
          items-center"
            >
              <img
                className="max-h-[250px] group-hover:scale-110
            transition duration-300"
                src={image_url_1}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* buttons */}
        <div
          className="absolute top-6 -right-11 
      group-hover:right-5 text-white p-2
      flex flex-col items-center justify-center gap-y-2 opacity-0
      group-hover:opacity-100 transition-all duration-300"
        >
          {/* ========================================= */}
          <button onClick={() => addToCart(product, id)}>
            <div
              className="flex justify-center items-center text-white 
          w-12 h-12 bg-black"
            >
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center
        items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category, title and price */}
      <div>
        <div className="text-lg capitalize text-gray-700">
          {brand} / {category}
        </div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{product_name}</h2>
        </Link>
        <Star stars={rate} reviews={sold}></Star>
        <div className="font-semibold">{formatPrice(price)}</div>
      </div>
    </div>
  );
}
