import React from "react";
import Product from "../components/Product";

export default function Search({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.Search || [];
  }
  //console.log(data);
  return (
    <div>
      <div className="result">
        {data.map((item) => (
          <Product key={product.id}/>
        ))}
      </div>
    </div>
  );
}
