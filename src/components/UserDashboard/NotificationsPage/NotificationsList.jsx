import React from 'react';
import NotificationCard from './NotificationCard';

const NotificationsList = ({ notifications }) => {
  return (
    <div className="mt-4 grid gap-4">
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} {...notification} />
      ))}
    </div>
  );
};

export default NotificationsList;
