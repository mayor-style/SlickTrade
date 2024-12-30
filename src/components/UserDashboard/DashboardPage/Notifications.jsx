import React from 'react';
import { FaBell, FaInfoCircle, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Notifications = () => {
  const notifications = [
    { id: 1, icon: <FaBell className="text-yellow-500" />, message: 'Vendor132 accepted your transaction.', timestamp: '2 hours ago', type: 'alert' },
    { id: 2, icon: <FaInfoCircle className="text-blue-500" />, message: 'Platform update scheduled for tomorrow.', timestamp: '5 hours ago', type: 'announcement' },
    { id: 3, icon: <FaCheckCircle className="text-green-500" />, message: 'Your profile verification is complete.', timestamp: '1 day ago', type: 'success' },
    { id: 4, icon: <FaExclamationCircle className="text-red-500" />, message: 'Payment method needs updating.', timestamp: '2 days ago', type: 'warning' },
    { id: 5, icon: <FaInfoCircle className="text-blue-500" />, message: 'New features added to the platform.', timestamp: '3 days ago', type: 'announcement' },
  ];

  return (
    <div className="bg-gray border border-dark-gray rounded-lg p-4  w-full">
      <div className=" mb-4">
        <h2 className="text-lg mb-1 font-semibold text-white">Recent <span>Notifications</span></h2>
        <button className=" text-xs xs:text-sm text-black bg-gold transition-all ease-in-out duration-200 px-4 py-1 rounded-md hover:bg-opacity-80">
          Mark All as Read
        </button>
      </div>
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className="flex items-center gap-3 bg-glass border border-dark-gray p-3 rounded-md hover:bg-opacity-90"
          >
            <div className="text-xl">{notification.icon}</div>
            <div>
              <p className="text-sm text-white">{notification.message}</p>
              <p className="text-xs text-gray-400">{notification.timestamp}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
