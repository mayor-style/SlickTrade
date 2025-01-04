import React from 'react';

const AmountInput = ({ label, value, onChange }) => {
  return (
    <div className="mb-4 ">
      <label className="block text-white mb-2">{label}</label>
      <input
        type="number"
        className="w-full p-2 border font-montserrat max-sm:text-sm border-dark-gray rounded-lg bg-gray text-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter amount"
      />
    </div>
  );
};

export default AmountInput;
