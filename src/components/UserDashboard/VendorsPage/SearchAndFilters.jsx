import React from 'react';

const SearchAndFilters = ({ searchTerm, onSearch, onFilter }) => {
  return (
    <div className="flex flex-wrap items-center justify-between mb-4 max-md:gap-4 p-4 bg-glass backdrop-blur-md rounded-lg">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearch}
        placeholder="Search vendors by name, service, or rating..."
        className="flex-1 px-4 py-2 border border-dark-gray rounded-lg bg-gray text-white"
      />
      <div className="flex space-x-4 items-center sm:ml-4">
        <select
          onChange={onFilter}
          className="px-4 py-2 border border-dark-gray rounded-lg bg-gray text-white"
        >
          <option value="">Filter by Service</option>
          <option value="PayPal">PayPal</option>
          <option value="CashApp">CashApp</option>
          <option value="Zelle">Zelle</option>
        </select>
        <select
          onChange={onFilter}
          className="px-4 py-2 border border-dark-gray rounded-lg bg-gray text-white"
        >
          <option value="">Filter by Rating</option>
          <option value="4">4 stars and above</option>
          <option value="3">3 stars and above</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilters;
