// src/components/LiveChat/LiveChatWidget.jsx
import React from "react";
import { FaCommentDots } from "react-icons/fa";

const LiveChatWidget = () => {
  return (
    <div className="fixed animate-bounce transition-all duration-200 ease-in-out bottom-6 right-6">
      <button
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        onClick={() => alert("Chat with us live! (Integration Pending)")}
      >
        <FaCommentDots className="text-2xl" />
        <span className="font-medium">Live Chat</span>
      </button>
    </div>
  );
};

export default LiveChatWidget;
