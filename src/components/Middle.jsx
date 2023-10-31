import React from 'react';
import featuredmen from "../img/featuredmen.png";
import featuredwomen from "../img/featuredwomen.png";
import womenjewelry from "../img/womenjewelry.png";
import imgdisc from "../img/25disc.png";
import { Link } from "react-router-dom";
//import images
import midmen1 from "../img/mid-men1.png"
import midmen2 from "../img/mid-men2.png";
import midmen3 from "../img/mid-men3.png";
import midmen4 from "../img/mid-men4.png";
import midwomen1 from "../img/mid-women1.png";
import midwomen2 from "../img/mid-women2.png";
import midwomen3 from "../img/mid-women3.png";
import midwomen4 from "../img/mid-women4.png";

export default function NewArrivals() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12 mt-24">
        <article>
          <h2 className="text-2xl font-extrabold text-gray-900">
            Shop New Arrivals
          </h2>
          <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            <article
              className="relative w-full h-64 bg-cover bg-center group overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
              style={{
                backgroundImage: `url(${featuredmen})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out" />
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                <h3 className="text-center">
                  <Link
                    className="text-white text-2xl font-bold text-center"
                    to={`/Men`}
                  >
                    <span className="absolute inset-0" />
                    Men
                  </Link>
                </h3>
              </div>
            </article>
            <article
              className="relative w-full h-64 bg-cover bg-center group overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
              style={{
                backgroundImage: `url(${featuredwomen})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out" />
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                <h3 className="text-center">
                  <Link
                    className="text-white text-2xl font-bold text-center"
                    to={`/Women`}
                  >
                    <span className="absolute inset-0" />
                    Women
                  </Link>
                </h3>
              </div>
            </article>
            <article
              className="relative w-full h-64 bg-cover bg-center group overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
              style={{
                backgroundImage: `url(${womenjewelry})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out" />
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                <h3 className="text-center">
                  <Link
                    className="text-white text-2xl font-bold text-center"
                    to={`/Jewelry`}
                  >
                    <span className="absolute inset-0" />
                    Jewelry
                  </Link>
                </h3>
              </div>
            </article>
          </section>
        </article>
      </section>
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
            <div className="text-5xl text-white font-bold">MEMBER</div>
            <div className="text-5xl text-white font-bold">EXCLUSIVE</div>
            <div className="text-sm font-light text-gray-200 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-3">
              <div className="grid-item1 mb-3">
                We’re making it easy for Clothify Rewards members to get a head
                start on holiday shopping. Must be logged in for discount to
                apply at checkout.
              </div>
            </div>
            <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
              <Link to={`/Register`}>Register Now</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-5">
            Shop Men's Fashion
          </h2>
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto
        md:max-w-none md:mx-0"
        >
          <div className="relative grid-item1 border-2 border-[#e4e4e4] h-auto">
            <img src={midmen1} alt="" />
            <button className="absolute bottom-20 left-28 bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
              <Link to={`/Men`}>Shop Men</Link>
            </button>
          </div>
          <div className="relative grid-item2 border-2 border-[#e4e4e4] h-auto">
            <img src={midmen2} alt="" />
            <button className="absolute bottom-20 left-28 bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
              <Link to={`/Men`}>Shop Men</Link>
            </button>
          </div>
          <div className="relative grid-item3 border-2 border-[#e4e4e4] h-auto">
            <img src={midmen3} alt="" />
            <button className="absolute bottom-20 left-28 bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
              <Link to={`/Men`}>Shop Men</Link>
            </button>
          </div>
          <div className="relative grid-item4 border-2 border-[#e4e4e4] h-auto">
            <img src={midmen4} alt="" />
            <button className="absolute bottom-20 left-28 bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
              <Link to={`/Men`}>Shop Men</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-10">
            Shop Women's Fashion
          </h2>
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto
        md:max-w-none md:mx-0"
        >
          <div className="relative grid-item1 border-2 border-[#e4e4e4] h-full">
            <img src={midwomen1} alt="" />
            <button className="absolute bottom-20 left-24 bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
              <Link to={`/Women`}>Shop Women</Link>
            </button>
          </div>
          <div className="relative grid-item2 border-2 border-[#e4e4e4] h-full">
            <img src={midwomen2} alt="" />
            <button className="absolute bottom-20 left-24 bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
              <Link to={`/Women`}>Shop Women</Link>
            </button>
          </div>
          <div className="relative grid-item3 border-2 border-[#e4e4e4] h-full">
            <img src={midwomen3} alt="" />
            <button className="absolute bottom-20 left-24 bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
              <Link to={`/Women`}>Shop Women</Link>
            </button>
          </div>
          <div className="relative grid-item4 border-2 border-[#e4e4e4] h-full">
            <img src={midwomen4} alt="" />
            <button className="absolute bottom-20 left-24 bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
              <Link to={`/Women`}>Shop Women</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
