import React from "react";
import { FiPaperclip, FiSend } from "react-icons/fi";

const ChatInput = () => (
  <div className="flex rounded-br-xl max-md:rounded-bl-xl items-center bg-glass backdrop-blur-sm p-4 border-t border-dark-gray">
    <button className="p-2 text-black hover:text-dark-gray">
      <FiPaperclip size={20} />
    </button>
    <input
      type="text"
      placeholder="Type your message..."
      className="flex-1 px-4 py-2 mx-3 rounded-full bg-gray focus:outline-none"
    />
    <button className="p-2 text-blue-500 hover:text-blue-700">
      <FiSend size={20} />
    </button>
  </div>
);

export default ChatInput;
