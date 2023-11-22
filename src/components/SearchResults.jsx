import React from "react";
import Product from "../components/Product";

const SearchResults = ({ location }) => {
  const searchResults = location.state?.searchResults || [];

  return (
    <div>
      <h2>Search Results</h2>
      <div className="result">
        {searchResults.map((item) => (
          <Product key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
