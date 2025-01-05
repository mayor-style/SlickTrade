import React from 'react';

const EmptyState = ({ icon, title, subtitle, cta, onCtaClick }) => {
  return (
    <div className="text-center mt-12">
      <div className="text-gold text-6xl">{icon}</div>
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="text-gray mt-2">{subtitle}</p>
      <button onClick={onCtaClick} className="bg-glass px-6 py-3 rounded-md mt-4">
        {cta}
      </button>
    </div>
  );
};

export default EmptyState;
