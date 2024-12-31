import React, { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { FaCrown, } from 'react-icons/fa';
import { GiDiamondTrophy} from "react-icons/gi";
import {  MdOutlineEmojiEmotions } from 'react-icons/md';

const ProgressBadgeCard = () => {

    // icons dynamically for each level
     const icons = {
        beginner: <MdOutlineEmojiEmotions className="text-green-500 text-xl" />,
        pro: <GiDiamondTrophy className="text-blue-500 text-xl" />,
        expert: <FaCrown className="text-gold text-xl" />,
      };

    const [completedTransactions, setCompletedTransactions] = useState(1); // Example starting value
  const totalTransactions = 5; // Transactions needed to become a Pro User
  const progressPercent = Math.min((completedTransactions / totalTransactions) * 100, 100);

  const getProgressText = () => {
    const remainingTransactions = totalTransactions - completedTransactions;
    if (remainingTransactions > 0) {
      return `Complete ${remainingTransactions} transaction${remainingTransactions > 1 ? 's' : ''} to reach "Pro User"`;
    }
    return `Congratulations! You've achieved "Pro User" status.`;
  };

  return (
    <div className="bg-glass border space-y-4 border-dark-gray text-white py-4 lg:px-2 px-4 rounded-lg">
      <div className="flex items-center justify-between">
        <p className="xs:text-sm text-xs font-semibold">User Progress</p>
        <span className="cursor-pointer"><GoArrowUpRight /></span>
      </div>
      <h1 className=" flex whitespace-nowrap flex-wrap items-center gap-1 ">
        Your current level: <span className="font-medium text-white xs:text-sm text-xs"> Beginner</span>
        <span> {icons['beginner']}</span>
      </h1>
      <div className="flex items-center gap-2">
       <span>{icons['pro']}</span>
        <p className="text-xs tracking-wide">{getProgressText()}</p>
      </div>
      <div className="w-full bg-dark-gray rounded-full h-2 overflow-hidden">
        <div
          className="bg-gold h-full rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <button
        onClick={() => setCompletedTransactions((prev) => Math.min(prev + 1, totalTransactions))}
        className="bg-gold text-white text-xs xs:text-sm px-4 py-2 rounded-md mt-2 bg-opacity-70 hover:bg-opacity-80"
      >
        Complete Transaction
      </button>
    </div>
  )
}

export default ProgressBadgeCard
