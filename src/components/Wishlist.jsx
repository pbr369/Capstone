import React, { useContext } from "react";
//
import { Link } from "react-router-dom";
//icon
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
//components
import WishItem from "./WishItem";
//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
import { WishListContext } from "../contexts/WishListContext";
//cart context
import { AddWishList } from "../contexts/AddWishList";
import Dialog from "../components/Dialog";

export default function Wishlist() {
  const { wishlistOpen, handleClose } = useContext(WishListContext);
  const { wish, clearWish, total, itemAmount, handleDelete } =
    useContext(AddWishList);

  return (
    <div>
      <div
        className={`${wishlistOpen ? "right-0" : "-right-full"}
  w-full bg-white fixed top-0 h-full shadow-2xl
  md:w-[35vw] xl:max-w-[30vw] transition-all duration-300
  z-20 px-4 lg:px-[35px]`}
      >
        <div className="flex items-center justify-between py-6 border-b">
          <div
            className="uppercase text-sm
    font-semibold"
          >
            WishList
          </div>
          {/* icons */}
          <div
            onClick={handleClose}
            className="cursor-pointer w-8 h-8 flex 
    justify-center items-center"
          >
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>
        <div
          className="flex flex-col gap-y-2 h-[520px] lg:h-[640px]
    overflow-y-auto overflow-x-hidden border-b"
        >
          {wish.map((item) => {
            return <WishItem item={item} key={item.id} />;
          })}
        </div>
        <div
          className="flex flex-col gap-y-3 py-4
    mt-4"
        >
          <div
            className="flex w-full justify-end
      items-center"
          >
            {/* clear cart */}
            <div
              // onClick={clearCart}
              className="cursor-pointer py-4 bg-red-500
        text-white w-12 h-12 flex justify-center items-center
        text-xl"
              onClick={handleDelete}
            >
              <FiTrash2 />
            </div>
          </div>
          {/* <Link
            to="/"
            className="bg-primary flex p-4 justify-center items-center
      text-white w-full font-medium"
          >
            Add to Cart
          </Link> */}
        </div>
      </div>
    </div>
  );
}
