import React from 'react';

const Tabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { label: 'All Notifications', icon: '🔔', key: 'all' },
    { label: 'Transaction Updates', icon: '💳', key: 'transactions' },
    { label: 'Platform Alerts', icon: '⚠️', key: 'alerts' },
    { label: 'Messages', icon: '💬', key: 'messages' },
  ];

  return (
    <div className="flex max-md:justify-center flex-wrap gap-4 border-b border-gray pb-2">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`flex items-center gap-2 px-4 py-2 ${
            activeTab === tab.key ? 'text-gold border-b-2 border-gold' : 'text-gray'
          }`}
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
