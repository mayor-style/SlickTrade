import React from 'react';

const TabsNavigation = ({ activeTab, onTabChange, tabs }) => {
  return (
    <div className="flex max-xs:flex-wrap max-xs:justify-center bg-glass backdrop-blur-md rounded-full max-xs:rounded-lg border border-dark-gray space-x-4 items-center justify-between border-b px-4 py-2 mb-2 text-white">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange(index)}
          className={`px-4 py-1 max-sm:text-sm max-xs:text-xs rounded-full  ${
            activeTab === index ? 'bg-gold max-sm:text-xs text-black font-semibold' : 'hover:text-gold'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabsNavigation;
