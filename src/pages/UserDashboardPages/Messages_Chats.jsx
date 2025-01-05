import React, { useState } from "react";
import MessageListPanel from "../../components/UserDashboard/MessagesPage/MessageListPanel";
import ChatWindowPanel from "../../components/UserDashboard/MessagesPage/ChatWindowPanel";
import { MdOutlineMessage } from "react-icons/md";

const Messages = () => {
  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <aside className="w-full  md:w-1/3 border-b md:border-b-0 md:border-r bg-glass rounded-bl-xl rounded-tl-xl max-md:rounded-tr-xl border-dark-gray">
        <MessageListPanel activeChat={activeChat} setActiveChat={setActiveChat} />
      </aside>
      <main className="flex-1 ">
        {activeChat ? (
          <ChatWindowPanel activeChat={activeChat} />
        ) : (
          <div className="flex items-center justify-center h-full text-gold">
            <MdOutlineMessage size={35} />
            <p className="ml-4 text-lg">Select a chat to start messaging.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Messages;
