// src/components/QuickActions/QuickActions.jsx
import React from "react";
import { FaEnvelope, FaQuestionCircle, FaVideo, FaServer } from "react-icons/fa";

const actions = [
  { label: "Contact Support", icon: <FaEnvelope />, link: "/contact" },
  { label: "FAQs", icon: <FaQuestionCircle />, link: "#faq" },
  { label: "View Tutorials", icon: <FaVideo />, link: "#tutorials" },
  { label: "Check System Status", icon: <FaServer />, link: "/status" },
];

const QuickActions = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4">
      {actions.map((action, index) => (
        <a
          key={index}
          href={action.link}
          className="flex items-center justify-center gap-2 bg-glass text-gold border border-dark-gray rounded-lg shadow-md px-6 py-3 hover:backdrop-blur-sm transition-all"
        >
          {action.icon}
          <span className="font-medium text-white">{action.label}</span>
        </a>
      ))}
    </div>
  );
};

export default QuickActions;
