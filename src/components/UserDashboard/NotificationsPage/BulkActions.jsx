import React from 'react';

const BulkActions = ({ onMarkAllRead, onClearAll }) => {
  return (
    <div className="flex gap-4">
      <button onClick={onMarkAllRead} className="bg-glass px-4 py-2 rounded-md">
        Mark All as Read
      </button>
      <button onClick={onClearAll} className="bg-glass px-4 py-2 rounded-md">
        Clear All Notifications
      </button>
    </div>
  );
};

export default BulkActions;
