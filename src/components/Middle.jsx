import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import imgdisc from "../img/25disc.png";
import midwomen1 from "../img/mid-women1.png";
import midwomen2 from "../img/mid-women2.png";
import midwomen3 from "../img/mid-women3.png";
import midwomen4 from "../img/mid-women4.png";
import TopSoldProducts from "./TopSoldProducts";
import TopRatedProducts from "./TopRatedProducts";
import TopCheapProducts from "./TopCheapProducts";

export default function NewArrivals() {
    const { products } = useContext(ProductContext);

    const filteredProducts = products.filter((item) => {
      return item;
    });

  return (
    <div>
      <div className="da relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-center dark:bg-black" />
        <div className="group relative mx-auto flex w-fit w-fit rounded-xl shadow-xl ring-gray-900/5">
          <div className="h-full w-full overflow-hidden border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <img
              src={imgdisc}
              className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
              alt=""
            />
          </div>
          <div className="absolute bottom-0 m-0 mx-5 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-12 group-hover:scale-110">
            <div className="text-white font-bold mb-2 md:text-5xl">
              MEMBER
            </div>
            <div className="text-white font-bold mb-2 md:text-5xl">
              EXCLUSIVE
            </div>
            <div className="text-sm font-light text-gray-200 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-3">
              <div className="text-sm font-light text-gray-200 mb-2 hidden sm:grid">
                We’re making it easy for Clothify Rewards members to get a head
                start on holiday shopping. Must be logged in for the discount to
                apply at checkout.
              </div>
            </div>
            <Link to={`/Register`}>
              <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-5">
            Top Sold Products
          </h2>
        </div>
        <div>
          <TopSoldProducts products={filteredProducts} />
        </div>
      </div>
      <div className="container mx-auto mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-10">
            Top Rated Products
          </h2>
        </div>
        <div>
          <TopRatedProducts products={filteredProducts} />
        </div>
      </div>
      <div className="container mx-auto mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-10">
            Below 1K Deals
          </h2>
        </div>
        <div>
          <TopCheapProducts products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
