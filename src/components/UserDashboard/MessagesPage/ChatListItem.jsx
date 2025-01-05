import React from "react";
import { MdPersonOutline } from "react-icons/md";

const ChatListItem = ({ chat, isActive, onClick }) => (
  <div
    className={`flex w-full items-center justify-between p-4 cursor-pointer hover:bg-dark-gray ${
      isActive ? "bg-gray" : ""
    }`}
    onClick={onClick}
  >
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gray rounded-full flex items-center justify-center">
        <MdPersonOutline size={24} className="text-gold" />
      </div>
      <div>
        <p className="font-medium text-white">{chat.name}</p>
        <p className="text-sm text-white truncate">{chat.lastMessage}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-xs text-white">{chat.timestamp}</p>
      {chat.unread > 0 && (
        <span className="px-2 py-1 text-xs text-white bg-red-500 rounded-full">
          {chat.unread}
        </span>
      )}
    </div>
  </div>
);

export default ChatListItem;
