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
      <section className="py-16">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto
        md:max-w-none md:mx-0"
          >
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};