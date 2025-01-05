import React from "react";
import ChatWindowHeader from "./ChatWindowHeader.jsx";
import ChatBubble from "./ChatBubble.jsx";
import ChatInput from "./ChatInput.jsx";

const ChatWindowPanel = ({ activeChat }) => {
  const messages = [
    { id: 1, sender: "vendor", text: "Hello! How can I assist you?", time: "10:00 AM" },
    { id: 2, sender: "user", text: "I need help with my last payment.", time: "10:05 AM" },
  ];

  return (
    <div className="flex flex-col h-full">
      <ChatWindowHeader />
      <div className="flex-1 overflow-y-auto p-4 bg-glass ">
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatWindowPanel;
