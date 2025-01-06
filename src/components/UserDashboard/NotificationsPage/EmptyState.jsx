import React from 'react';

const EmptyState = ({ icon, title, subtitle, cta, onCtaClick }) => {
  return (
    <div className="text-center mt-12">
      <div className="text-gold max-sm:text-4xl text-6xl">{icon}</div>
      <h2 className="text-2xl max-sm:text-xl max-xs:text-lg font-bold mt-4">{title}</h2>
      <p className="text-white mt-2 max-sm:text-sm max-xs:text-xs">{subtitle}</p>
      <button onClick={onCtaClick} className="bg-gold px-6 py-3 max-sm:text-sm rounded-md mt-4">
        {cta}
      </button>
    </div>
  );
};

export default EmptyState;
