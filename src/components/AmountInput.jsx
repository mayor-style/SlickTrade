import React from 'react';

const AmountInput = ({ label, value, onChange }) => {
  return (
    <div className="mb-4 font-montserrat">
      <label className="block text-white mb-2">{label}</label>
      <input
        type="number"
        className="w-full p-2 border border-dark-gray rounded-lg bg-gray text-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter amount"
      />
    </div>
  );
};

export default AmountInput;
