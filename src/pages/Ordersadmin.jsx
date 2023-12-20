import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProductContext } from "../contexts/ProductContext";

const Ordersadmin = () => {
  const [selectedCategory, setSelectedCategory] = useState("ToShip");
  const [orders, setOrders] = useState([]);
  const { products } = useContext(ProductContext);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    };
    
    const handleMarkAsShipped = async (orderId) => {
      try {
        // Make an API call to mark the order as shipped
        await axios.put(`http://127.0.0.1:8000/api/mark-as-shipped/${orderId}`);

        // Refetch the data to update the component
        fetchData();
      } catch (error) {
        console.error("Error marking order as shipped:", error);
      }
    };

    const handleCancelOrder = async (orderId) => {
      try {
        // Make an API call to cancel the order
        await axios.put(`http://127.0.0.1:8000/api/cancel-order/${orderId}`);

        // Refetch the data to update the component
        fetchData();
      } catch (error) {
        console.error("Error canceling order:", error);
      }
    };

    const handleCompleteOrder = async (orderId) => {
      try {
        // Make an API call to cancel the order
        await axios.put(`http://127.0.0.1:8000/api/complete-order/${orderId}`);

        // Refetch the data to update the component
        fetchData();
      } catch (error) {
        console.error("Error canceling order:", error);
      }
    };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/showorders/${selectedCategory}`);

        const ordersWithProductInfo = response.data.map((order) => {
          const product = products.find(
            (product) => product.id === order.product_id
          );
          return {
            ...order,
            product_name: product ? product.product_name : "Product Not Found",
            image_url_1: product ? product.image_url_1 : "",
            price: product ? product.price : 0,
            // Add other product-related fields as needed
          };
        });

        setOrders(ordersWithProductInfo);
      } catch (error) {
        if (error.response) {
          console.error("Error response:", error.response.data);
        } else {
          console.error("Error:", error.message);
        }
      }
    };

    fetchData();
  }, [selectedCategory, products]);

  return (
    <div className="p-6">
      <br />
      <br />
      <br />
      <br />
      <Link to="/AdminPanel">
        <button className="bg-[#1d1d1d] text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition duration-300">
          Back
        </button>
      </Link>
      <div className="flex space-x-4 bg-gray-800 text-white p-4">
        <Link
          to="/Ordersadmin"
          className={`${
            selectedCategory === "toship" ? "border-b-2 border-white" : ""
          } px-4 py-2`}
          onClick={() => handleCategoryChange("toship")}
        >
          To Ship
        </Link>
        <Link
          to="/Ordersadmin"
          className={`${
            selectedCategory === "toreceive" ? "border-b-2 border-white" : ""
          } px-4 py-2`}
          onClick={() => handleCategoryChange("toreceive")}
        >
          To Received
        </Link>
        <Link
          to="/Ordersadmin"
          className={`${
            selectedCategory === "completed" ? "border-b-2 border-white" : ""
          } px-4 py-2`}
          onClick={() => handleCategoryChange("completed")}
        >
          Completed Orders
        </Link>
        <Link
          to="/Ordersadmin"
          className={`${
            selectedCategory === "cancelled" ? "border-b-2 border-white" : ""
          } px-4 py-2`}
          onClick={() => handleCategoryChange("cancelled")}
        >
          Cancelled Orders
        </Link>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">{selectedCategory} Orders</h2>
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="border-b py-2">
              <div className="flex items-center">
                <div className="w-16 h-16 overflow-hidden rounded-full mr-4">
                  <img
                    src={order.image_url_1}
                    alt={order.product_name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="font-bold">{order.product_name}</div>
                  <div>PHP {order.price}</div>
                  {(selectedCategory === "toship" && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleMarkAsShipped(order.id)}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                      >
                        Mark as Shipped
                      </button>
                      <button
                        onClick={() => handleCancelOrder(order.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  )) ||
                    (selectedCategory === "toreceive" && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleCompleteOrder(order.id)}
                          className="bg-green-500 text-white px-2 py-1 rounded"
                        >
                          Complete
                        </button>
                        <button
                          onClick={() => handleCancelOrder(order.id)}
                          className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ordersadmin;
