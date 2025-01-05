import React from "react";

const ChatBubble = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`p-3 rounded-lg ${
          isUser ? "bg-blue-500 text-white" : "bg-gray  text-white"
        } max-w-xs`}
      >
        <p>{message.text}</p>
        <p className="text-xs text-white text-right mt-1">{message.time}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
