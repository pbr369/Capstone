import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function Adminpanel() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(20);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); 

  
  const handleDelete = (id) => {
    axios
      .get(`http://127.0.0.1:8000/api/delete-product/${id}`)
      .then((response) => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const pageCount = Math.ceil(products.length / perPage);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };
  
  const offset = currentPage * perPage;
  const currentPageData = products.slice(offset, offset + perPage);

  return (
    <div className="p-4">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <Link to="/AddProducts">
        <button className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition duration-300">
          Add Product
        </button>
      </Link>
      <Link to="/Ordersadmin">
        <button className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition duration-300 mx-5">
          Manage Orders
        </button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {currentPageData.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={product.image_url_1}
              alt={product.product_name}
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <p className="text-xl font-bold mb-2">{product.product_name}</p>
            <p className="text-gray-600">{product.brand}</p>
            <p className="text-lg mt-2">PHP {product.price}</p>
            <div className="mt-4 flex items-center space-x-4">
              <Link
                to={`/Updateproducts/${product.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
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
        activeClassName={"bg-[#1d1d1d] text-white mx-1"}
      />
    </div>
  );
}
