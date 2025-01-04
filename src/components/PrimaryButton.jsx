import React from 'react';

const PrimaryButton = ({ text, type = 'button', onClick, disabled, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-2 px-4 text-white bg-gold rounded-lg hover:bg-opacity-80 transition-all duration-200 ease-in-out ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }  ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
