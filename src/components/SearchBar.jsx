import React, { useState } from "react";
//import search icon
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  const handleSearchClick = () => {
    onSearch(searchText);
  };
  return (
    <div>
      <form className="w-[300px] relative">
        <div className="relative">
          <input
            type="search"
            id="searchInput"
            placeholder="Search"
            className="w-full p-2 rounded-full bg-white-800"
            onChange={handleInput}
            onKeyPress={handleEnterKeyPressed}
            value={searchText}
          />
          <button
            className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full"
            onClick={handleSearchClick}
          >
            <AiOutlineSearch />
          </button>
        </div>
      </form>
    </div>
  );
}
