import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/HeroMen";
//import search icon
import { AiOutlineSearch } from "react-icons/ai";

export default function Luxury() {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return item.category === "Luxury";
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      {/* <Hero /> */}
      <section className="py-32">
        <div className="container mx-auto relative">
          <div className="mb-7">
            <form className="w-[300px] relative">
              <div className="relative mt-5">
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Search"
                  className="w-full p-2 rounded-full border-2 border-black bg-white text-black"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
                <button
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-black rounded-full"
                  onClick={handleSearchClick}
                >
                  <AiOutlineSearch className="fill-white"/>
                </button>
              </div>
            </form>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto
        md:max-w-none md:mx-0"
          >
            {filteredProducts
              .filter(
                (product) =>
                  searchTerm === "" ||
                  product.product_name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
              )
              .map((product) => (
                <Product product={product} key={product.id} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
