import React from 'react';

const SearchBar = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-glass max-sm:text-sm text-white px-4 py-2 rounded-md w-full max-w-md focus:outline-none"
    />
  );
};

export default SearchBar;
