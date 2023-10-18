import React, { useContext, useEffect, useState } from "react";
//
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
//icons
import { BsBag } from "react-icons/bs";
import Logo from "../img/logo.svg";
//import search icon
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  //headerstate
  const [isActive, setIsActive] = useState(true);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  //event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  //bagong add
    const menuItems = [
      {
        title: "New & Featured",
        link: "/",
      },
      {
        title: "Men",
        link: "/blogs",
      },
      {
        title: "Women",
        link: "/about",
      },
      {
        title: "Kids",
        link: "/contact",
      },
      {
        title: "Shoes",
        link: "/contact",
      },
      {
        title: "Jewelry",
        link: "/contact",
      },
    ];

    const menuRight = [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        ),
        link: "/",
      },
      {
        icon: (
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="graphics-symbol"
            aria-hidden="true"
            width="16"
            height="16"
            color="currentColor"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 3.19935C7.3 2.17974 6.1625 1.5 4.85 1.5C2.75 1.5 1 3.19935 1 5.23856C1 8.97712 8 14.5 8 14.5C8 14.5 15 8.97712 15 5.23856C15 3.19935 13.25 1.5 11.15 1.5C9.8375 1.5 8.7 2.17974 8 3.19935Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        ),
        link: "/",
      },
      {
        icon: (
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="graphics-symbol"
            aria-hidden="true"
            width="16"
            height="16"
            color="currentColor"
          >
            <path
              d="M1.5 5C1.5 4.72386 1.72386 4.5 2 4.5H14C14.2761 4.5 14.5 4.72386 14.5 5V15C14.5 15.2761 14.2761 15.5 14 15.5H2C1.72386 15.5 1.5 15.2761 1.5 15V5Z"
              stroke-linecap="round"
              stroke="currentColor"
            ></path>
            <path
              d="M5 7.5V3C5 2 6 0.5 8 0.5C10 0.5 11 2 11 3V7.5"
              stroke-linecap="round"
              stroke="currentColor"
            ></path>
          </svg>
        ),
        link: "/",
      },
    ];

  return (
    <>
      <div
        className="bg-black-navbar shadow-md bg-none
    fixed w-full z-10 transition-all"
      >
        <div className="text-center py-2">
          <a href="#">
            <span className="text-white">
              FREE SHIPPING ORDERS 1,000+ & FREE RETURNS
            </span>
          </a>
        </div>
        <div className="grid-line"></div>
        <div className="container mx-auto flex justify-between items-center h-full py-2">
          {/* logo */}
          <Link to={"/"}>
            <img className="w-[40px]" src={Logo} alt="" />
          </Link>
          {/* add menus */}

          <div className="nav-mid flex gap-7 text-white text-lg">
            {menuItems.map((item, idx) => (
              <Link key={idx} to={item.link}>
                {item.title}
              </Link>
            ))}
          </div>
          {/* justify end search and cart */}

          {/* search bar */}
          <form className="w-[300px] relative">
            <div className="relative">
              <input
                type="search"
                placeholder="Seach"
                className="w-full p-2 rounded-full bg-white-800"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full">
                <AiOutlineSearch />
              </button>
            </div>
            <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2"></div>
          </form>
          {/* cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl text-white" />
            <div
              className="bg-red-500 absolute -right-2 -bottom-2
        text-[12px] w-[18px] h-[18px] text-white rounded-full flex
        justify-center items-center"
            >
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
