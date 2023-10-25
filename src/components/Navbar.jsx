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
import { FaRegUser } from "react-icons/fa";
//
const Header = () => {
  //headerstate
  const [isActive, setIsActive] = useState(true);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  //event listener


  //bagong add
    const menuItems = [
      {
        title: "New & Featured",
        link: "/",
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
        title: "Shoes",
        link: "/Shoes",
      },
      {
        title: "Jewelry",
        link: "/Jewelry",
      },
    ];


  return (
    <>
      <div
        className="bg-black-navbar shadow-md bg-none
    fixed w-full z-10 transition-all"
      >
        {/* <div className="text-center py-2">
          <a href="#">
            <span className="text-white">
              FREE SHIPPING ORDERS 1,000+ & FREE RETURNS
            </span>
          </a>
        </div> */}
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
                id="searchInput"
                placeholder="Seach"
                className="w-full p-2 rounded-full bg-white-800"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full">
                <AiOutlineSearch
                  onClick={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </button>
            </div>
            {/* <div className="absolute top-20 p-4 bg-slate-800 
            text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
            </div> */}
          </form>
          {/* cart */}
            
          <div className="cursor-pointer flex relative">
            <div className="px-3">
            <Link to = "/Login"><FaRegUser className="text-2xl text-white" /></Link>
            </div>

        

            <BsBag
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-white"
            />
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
