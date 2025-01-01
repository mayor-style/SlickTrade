import React from 'react';

const HighlightLastWord = ({ text }) => {
  const words = text.split(' '); // Split the string into words
  const lastWord = words.pop(); // Remove the last word
  const rest = words.join(' '); // Join the remaining words back together

  return (
    <h1 className="text-white font-semibold text-lg md:text-xl mb-4">
      {rest} <span className="text-gold">{lastWord}</span>
    </h1>
  );
};

export default HighlightLastWord;
