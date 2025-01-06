import React from 'react';

const NotificationCard = ({ icon, title, subtext, timestamp, actionLabel, onActionClick, unread }) => {
  return (
    <div className={`bg-glass p-4 rounded-lg flex items-start gap-4 ${unread ? 'border-l-4 border-gold' : ''}`}>
      <div className="text-gold">{icon}</div>
      <div className="flex-1">
        <h3 className="font-bold">{title}</h3>
        <p className="text-white">{subtext}</p>
        <small className="text-gray">{timestamp}</small>
      </div>
      {actionLabel && (
        <button onClick={onActionClick} className="text-gold underline">
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default NotificationCard;
