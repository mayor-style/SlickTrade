import React from 'react';

const DropdownSelect = ({ label, options, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-white mb-2">{label}</label>
      <select
        className="w-full p-2 border border-dark-gray rounded-lg bg-gray text-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelect;
