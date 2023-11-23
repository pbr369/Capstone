import React, { useContext, useEffect, useState } from "react";
//
import { SidebarContext } from "../contexts/SidebarContext";
import { WishListContext } from "../contexts/WishListContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
//icons
import { BsBag } from "react-icons/bs";
import Logo from "../img/logo.png";
//import search icon
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
//redux
import { useDispatch } from "react-redux";
//import searchbar
import SearchBar from "./SearchBar";
import Search from "./Search";
import Login from "../pages/Login";
import Wishlist from "./Wishlist";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  //headerstate
  const [isActive, setIsActive] = useState(true);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { wishlistOpen, setWishlistOpen } = useContext(WishListContext);
  const { itemAmount } = useContext(CartContext);
  const [searchResults, setSearchResults] = useState([]);
  
  //event listener

  //search
  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = setSearchResults(text);
    setState((prevState) => {
      setSearchResults(results);
      return { ...prevState, results: results };
    });
  };

  //modal
  const [modalOpen, setModalOpen] = useState(false);

  // Modal toggle function
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
const hamtoggleModal = () => {
  setHamburgerOpen(!hamburgerOpen);
};
  //bagong add
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

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
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
        <div className="container mx-auto flex justify-between items-center h-full py-2">
          {/* logo */}
          <Link to={"/"}>
            <img className="w-[90px]" src={Logo} alt="" />
          </Link>
          {/* add menus */}

          <div className="nav-mid flex gap-4 text-white text-lg hidden lg:flex px-4 mx-auto font-semibold font-heading space-x-6">
            {menuItems.map((item, idx) => (
              <Link key={idx} to={item.link}>
                {item.title}
              </Link>
            ))}
          </div>
          {/* justify end search and cart */}

          {/* search bar */}
           {/* <div className="hidden lg:flex">
            <SearchBar onSearch={onSearch} />
          </div> */}
          {/* cart */}

          {/* reg */}
          <div className="cursor-pointer flex relative">
            <div className="px-2">
              <FaRegUser
                onClick={toggleModal}
                className="text-2xl text-white"
              />
            </div>
            {/* wishlist */}
            <div
              className="px-2"
              onClick={() => setWishlistOpen(!wishlistOpen)}
            >
              <FaRegHeart className="text-2xl text-white" />
            </div>
            {/* bag */}
            <div className="px-2" onClick={() => setIsOpen(!isOpen)}>
              <BsBag className="text-2xl text-white" />
              <div
                className="animate-bounce bg-red-500 absolute right-1 -bottom-1
        text-[12px] w-[18px] h-[18px] text-white rounded-full flex
        justify-center items-center"
              >
                {itemAmount}
              </div>
            </div>
            {/* hamburger */}
            <div
              className="lg:hidden absolute -top-[2px] -right-8"
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
                className="fill-white"
              >
                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <Login closeLoginModal={toggleModal} />}
      {wishlistOpen && <Wishlist />}
      {hamburgerOpen && <HamburgerMenu closeHamburger={hamtoggleModal} />}
    </div>
  );
};