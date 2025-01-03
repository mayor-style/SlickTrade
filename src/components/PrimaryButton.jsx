import React from 'react';

const PrimaryButton = ({ text, type = 'button', onClick, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full p-3 text-white bg-gold rounded-lg hover:bg-dark-gold ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
