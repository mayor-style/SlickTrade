import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="">{subtitle}</p>
    </div>
  );
};

export default Header;
