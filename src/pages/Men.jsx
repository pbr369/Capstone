import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/HeroMen";
import { AiOutlineSearch } from "react-icons/ai";
import ReactPaginate from "react-paginate";

export default function Allproducts() {
  const { products } = useContext(ProductContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order

  const productsPerPage = 20;
  const pagesVisited = pageNumber * productsPerPage;

  // Sort products based on price
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  // Filter sorted products based on search term
  const filteredProducts = sortedProducts.filter(
    (product) =>
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.category.toLowerCase() === "men"
  );

  const pageCount = Math.ceil(sortedProducts.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div>
      <section className="py-36">
        <div className="container mx-auto relative">
          <div className="mb-7 flex justify-between items-center">
            <form className="w-[300px] relative mr-2">
              <div className="relative">
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
                  onClick={(e) => {
                    e.preventDefault();
                    setPageNumber(0); // Reset to the first page when searching
                  }}
                >
                  <AiOutlineSearch className="fill-white" />
                </button>
              </div>
            </form>
            <div className="relative">
              <label className="mr-2">Sort By:</label>
              <select
                value={sortOrder}
                onChange={handleSortChange}
                className="p-2 rounded-full border-2 border-black bg-white text-black"
              >
                <option value="asc">Cheapest</option>
                <option value="desc">Most Expensive</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts
              .slice(pagesVisited, pagesVisited + productsPerPage)
              .map((product) => (
                <Product product={product} key={product.id} />
              ))}
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={
              "pagination flex justify-center mt-8 bg-white rounded-lg"
            }
            pageLinkClassName={
              "list-none flex justify-center items-center text-lg gap-5 px-4 py-2 cursor-pointer rounded-md font-normal"
            }
            previousLinkClassName={
              "list-none flex justify-center items-center text-lg gap-5 px-4 py-2 cursor-pointer rounded-md font-normal"
            }
            nextLinkClassName={
              "list-none flex justify-center items-center text-lg gap-5 px-4 py-2 cursor-pointer rounded-md font-normal"
            }
            disabledClassName={"text-gray-500 cursor-not-allowed"}
            activeClassName={"bg-gray-700/100 text-white mx-1"}
          />
        </div>
      </section>
    </div>
  );
}
