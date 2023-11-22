import React from "react";
import Product from "../components/Product";

const TopSoldProducts = ({ products }) => {
  // Sort the products based on sold quantity in descending order
  const sortedProducts = [...products].sort((a, b) => b.sold - a.sold);

  // Take the top 5 sold products (you can adjust the number as needed)
  const topSoldProducts = sortedProducts.slice(0, 5);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto
        md:max-w-none md:mx-0"
    >
      {topSoldProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default TopSoldProducts;
