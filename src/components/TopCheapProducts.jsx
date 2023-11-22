import React from "react";
import Product from "./Product";

const TopCheapProducts = ({ products }) => {
  // Sort the products based on price in descending order
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);

  // Take the top 5 cheapest products (you can adjust the number as needed)
  const cheapestProducts = sortedProducts.slice(0, 5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
      {cheapestProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default TopCheapProducts;
