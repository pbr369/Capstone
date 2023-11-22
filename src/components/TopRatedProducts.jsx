import React from "react";
import Product from "../components/Product";

const TopRatedProducts = ({ products }) => {
  // Sort the products based on sold quantity in descending order
  const sortedProducts = [...products].sort((a, b) => b.rate - a.rate);

  // Take the top 5 sold products (you can adjust the number as needed)
  const topRatedProducts = sortedProducts.slice(0, 5);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto
        md:max-w-none md:mx-0"
    >
      {topRatedProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default TopRatedProducts;
