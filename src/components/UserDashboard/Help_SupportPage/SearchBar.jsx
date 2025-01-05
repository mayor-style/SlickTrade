// src/components/SearchBar/SearchBar.jsx
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="relative w-full max-w-3xl">
        <input
          type="text"
          placeholder="Search for help topics, FAQs, or issues..."
          className="w-full py-3 px-5 border rounded-lg bg-glass border-dark-gray shadow-sm focus:outline-none focus:ring-2 focus:ring-dark-gray"
        />
        <FiSearch className="absolute top-3 right-4 text-gold text-xl" />
      </div>
    </div>
  );
};

export default SearchBar;
