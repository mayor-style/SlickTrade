import React from "react";
import { MdPersonOutline } from "react-icons/md";

const ChatWindowHeader = () => (
  <div className="flex items-center justify-between p-4 border-b bg-glass backdrop-blur-sm md:rounded-tr-xl border-dark-gray">
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gray rounded-full flex items-center justify-center">
        <MdPersonOutline size={24} className="text-gray" />
      </div>
      <div>
        <p className="font-medium text-white">John Doe</p>
        <p className="text-sm text-white">Status: In Progress</p>
      </div>
    </div>
  </div>
);

export default ChatWindowHeader;
