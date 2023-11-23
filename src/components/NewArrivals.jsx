import React from 'react';
import { Link } from "react-router-dom";
import featuredmen from "../img/featuredmen.png";
import featuredwomen from "../img/featuredwomen.png";
import womenjewelry from "../img/womenjewelry.png";

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
                    to={`/Luxury`}
                  >
                    <span className="absolute inset-0" />
                    Luxury
                  </Link>
                </h3>
              </div>
            </article>
          </section>
        </article>
      </section>
    </div>
  );
}
