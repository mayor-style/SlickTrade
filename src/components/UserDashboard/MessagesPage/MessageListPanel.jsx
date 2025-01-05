import React from "react";
import { FiSearch } from "react-icons/fi";
import ChatListItem from "./ChatListItem";

const MessageListPanel = ({ activeChat, setActiveChat }) => {
  const chats = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Please confirm the receipt...",
      timestamp: "2h ago",
      unread: 3,
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "Thank you for the update!",
      timestamp: "1d ago",
      unread: 0,
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray">
        <div className="flex items-center bg-gray rounded-md px-3 py-2">
          <FiSearch className="text-gold" />
          <input
            type="text"
            placeholder="Search vendors or chats..."
            className="w-full text-white bg-transparent focus:outline-none ml-2"
          />
        </div>
      </div>
      <div className="flex-1 w-full overflow-y-auto scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-gray ">
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            isActive={activeChat === chat.id}
            onClick={() => setActiveChat(chat.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageListPanel;
