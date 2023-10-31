import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Middle from "../components/Middle";


export default function Home() {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return item.category === "men's clothing" || item.category === "women's clothing";
  });

  // const [state, setState] = useState({
  //   results: [],
  // });

  // const onSearch = async (text) => {

  //   setState((prevState) => {
  //     return { ...prevState, results: results };
  //   });
  // };

  return (
    <div>
      <Hero />
      <Middle />
      {/* <Search results={state.results} /> */}
    </div>
  );
};