import React from 'react';

const Tabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { label: 'All Notifications', icon: '🔔', key: 'all' },
    { label: 'Transaction Updates', icon: '💳', key: 'transactions' },
    { label: 'Platform Alerts', icon: '⚠️', key: 'alerts' },
    { label: 'Messages', icon: '💬', key: 'messages' },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-4 border-b items-center border-dark-gray pb-4">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`flex items-center border rounded-full max-xs:text-xs max-md:text-sm border-dark-gray gap-2 px-4 py-2 ${
            activeTab === tab.key ? 'text-gold  bg-glass rounded-full' : 'text-gray'
          }`}
        >
          <span >{tab.icon}</span>
          <span className='text-white font-semibold'>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
