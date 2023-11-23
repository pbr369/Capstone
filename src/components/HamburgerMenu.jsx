import React, { useState, useContext } from "react";
//
import { Link } from "react-router-dom";
//icon
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
//components
import CartItem from "./CartItem";
//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
//cart context
import { CartContext } from "../contexts/CartContext";
import Dialog from "../components/Dialog";
import PayButton from "./PayButton";


export default function HamburgerMenu({ closeHamburger }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

    const closeHamburgermenu = () => {
      closeHamburger(); // Close the modal
    };
  
    const menuItems = [
      {
        title: "All Products",
        link: "/Allproducts",
      },
      {
        title: "Men",
        link: "/Men",
      },
      {
        title: "Women",
        link: "/Women",
      },
      {
        title: "Kids",
        link: "/Kids",
      },
      {
        title: "Luxury",
        link: "/Luxury",
      },
      {
        title: "Sports",
        link: "/Sports",
      },
      {
        title: "Shoes",
        link: "/Shoes",
      },
      {
        title: "Bag",
        link: "/Bag",
      },
    ];
  return (
    <div>
      <div
        className="w-full bg-white fixed h-full shadow-2xl
   xl:max-w-[30vw] transition-all duration-300
  z-20 px-4 lg:px-[35vw] lg:hidden"
      >
        <div className="flex items-center justify-end py-6 border-b">
          {/* icons */}
          <div
            onClick={closeHamburgermenu}
            className="cursor-pointer w-8 h-8 flex 
    justify-end items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
              className="fill-black"
            >
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col text-black text-lg px-4 mx-auto font-semibold font-heading">
          {menuItems.map((item, idx) => (
            <Link key={idx} to={item.link} onClick={closeHamburgermenu}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
