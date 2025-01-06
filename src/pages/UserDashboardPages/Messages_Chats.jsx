import React, { useState } from "react";
import { FiSend, FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi"; // Choose the appropriate icon
import DashboardWelcomeMessage from "../../components/DashboardWelcomeMessage";

const ChatPage = () => {
  // Sample chats with messages
  const chatData = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Can we reschedule?",
      time: "2:30 PM",
      messages: [
        { id: 1, sender: "user", content: "Hi, John. Are we still on schedule?" },
        { id: 2, sender: "vendor", content: "Let me check. Can we reschedule?" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "Thanks for your help!",
      time: "1:15 PM",
      messages: [
        { id: 1, sender: "user", content: "Thanks for helping me earlier!" },
        { id: 2, sender: "vendor", content: "You're welcome, anytime!" },
      ],
    },
    {
      id: 3,
      name: "Vendor Support",
      lastMessage: "Your issue has been resolved.",
      time: "12:45 PM",
      messages: [
        { id: 1, sender: "user", content: "My account was locked, please help." },
        { id: 2, sender: "vendor", content: "Your issue has been resolved." },
      ],
    },
  ];

  const [chats] = useState(chatData);
  const [activeChatId, setActiveChatId] = useState(chatData[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [showMessages, setShowMessages] = useState(false)

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  const handleChatSelect = (id) => {
    setActiveChatId(id);
    setShowMessages(true)
  };

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    activeChat.messages.push({ id: Date.now(), sender: "user", content: newMessage });
    setNewMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="h-full">
      <DashboardWelcomeMessage
        Header="Messages"
        subtext="Communicate with your vendors for updates, clarifications, or queries."
      />

      <div className="flex h-screen">
        {/* Sidebar: Chat List */}
        <aside className={`lg:w-1/3 max-lg:w-[100%] md:rounded-tl-lg max-lg:rounded-lg ${showMessages ? "max-lg:hidden" : ""} md:rounded-bl-lg max-lg:border-none bg-gray border-r overflow-y-auto scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-gray border-dark-gray`}>
          {/* Search input */}
          <div className="p-[19px] border-b border-dark-gray">
            <div className="relative">
              <FiSearch className="absolute left-3 top-3 text-white" />
              <input
                type="text"
                placeholder="Search chats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none bg-glass border-glass focus:ring-2 focus:ring-gold text-white"
              />
            </div>
          </div>

          {/* Chat List */}
          <ul className="">
            {chats
              .filter((chat) => chat.name.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((chat) => (
                <li
                  key={chat.id}
                  onClick={() => handleChatSelect(chat.id)}
                  
                  className={`p-4 border-b border-dark-gray cursor-pointer flex items-center gap-4 ${
                    chat.id === activeChatId ? "bg-dark-gray" : "hover:bg-glass"
                  }`}
                >
                  <div className="bg-dark-gray p-2 rounded-full">
                    <AiOutlineUser className="text-2xl text-gray" />
                  </div>
                  <div className="flex-1 w-full truncate">
                    <h3 className="max-xl:text-sm max-lg:text-lg text-lg text-white font-semibold truncate">
                      {chat.name}
                    </h3>
                    <p className="max-xl:text-xs max-lg:text-sm text-sm text-white truncate">
                      {chat.lastMessage}
                    </p>
                  </div>
                  <span className="text-xs">{chat.time}</span>
                </li>
              ))}
          </ul>
        </aside>

        {/* Main Chat Window */}
        <main className={`flex-1 max-lg:rounded-lg max-lg:w-full ${showMessages? "" : "max-lg:hidden"} flex flex-col md:rounded-tr-lg md:rounded-br-lg bg-gray`}>
          {/* Chat Header */}
          <header className="p-4 border-b border-dark-gray flex items-center gap-4">
            <div className="text-white lg:hidden cursor-pointer" 
            onClick={()=>setShowMessages(false)}
            >
             <FiArrowLeft className="text-xl" />
            </div>
            <div className="bg-dark-gray p-2 rounded-full">
              <AiOutlineUser className="text-3xl text-gray" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">{activeChat.name}</h1>
              <p className="text-sm">Active now</p>
            </div>
          </header>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {activeChat.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-sm p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-gold text-white"
                      : "bg-dark-gray text-black"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <footer className="p-4 border-t border-dark-gray">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-2 text-white border bg-glass border-glass rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                onClick={sendMessage}
                className="bg-dark-gray text-white p-2 rounded-lg hover:bg-glass transition-all"
              >
                <FiSend className="text-xl" />
              </button>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default ChatPage;
