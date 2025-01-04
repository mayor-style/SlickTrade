import React from 'react';

const ToggleSwitch = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <span className=" font-medium text-white">{label}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`w-12 h-6 flex items-center rounded-full transition-colors duration-300 ${
            checked ? 'bg-yellow-500' : 'bg-dark-gray'
          }`}
        >
          <div
            className={`h-5 w-5 bg-white rounded-full shadow transition-transform duration-300 transform ${
              checked ? 'translate-x-6' : 'translate-x-1'
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
