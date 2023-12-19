import React, { useState } from "react";
import { Link } from "react-router-dom";

const OrderCategoryBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("To Ship");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

    return (
        <div>
            <br /><br /><br /><br /><br />
        <div className="flex space-x-4 bg-gray-800 text-white p-4">
          <Link
            to="/orders/to-ship"
            className={`${
              selectedCategory === "To Ship" ? "border-b-2 border-white" : ""
            } px-4 py-2`}
            onClick={() => handleCategoryChange("To Ship")}
          >
            To Ship
          </Link>
          <Link
            to="/orders/to-received"
            className={`${
              selectedCategory === "To Received"
                ? "border-b-2 border-white"
                : ""
            } px-4 py-2`}
            onClick={() => handleCategoryChange("To Received")}
          >
            To Received
          </Link>
          <Link
            to="/orders/completed"
            className={`${
              selectedCategory === "Completed Orders"
                ? "border-b-2 border-white"
                : ""
            } px-4 py-2`}
            onClick={() => handleCategoryChange("Completed Orders")}
          >
            Completed Orders
          </Link>
        </div>
      </div>
    );
};

export default OrderCategoryBar;
