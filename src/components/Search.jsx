import React from "react";
import Product from "../components/Product";
import { useNavigate } from "react-router-dom";

export default function Search({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const history = useNavigate();

  const handleSearch = () => {
    // Perform search logic based on your requirements
    const filteredResults = products.filter((product) =>
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  let data = [];

  if (result && result.data) {
    data = result.data.Search || [];
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="result">
        {data.map((item) => (
          <Product key={item.id} />
        ))}
      </div>
    </div>
  );
};