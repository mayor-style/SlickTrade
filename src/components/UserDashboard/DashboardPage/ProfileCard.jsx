import React from 'react'
import { FaCrown, FaUserCircle, FaMedal } from 'react-icons/fa';
import { GiDiamondTrophy} from "react-icons/gi";
import { MdVerified,  MdOutlineEmojiEmotions } from 'react-icons/md';
import InfoCard from '../InfoCard'
import ProgressBadgeCard from './ProgressBadgeCard';
import {Link} from 'react-router-dom'

const ProfileCard =  ({ userName, userEmail, onStartTransaction, level }) => {

  const icons = {
    beginner: <MdOutlineEmojiEmotions className="text-green-500 text-xl" />,
    pro: <GiDiamondTrophy className="text-blue-500 text-xl" />,
    expert: <FaCrown className="text-gold text-xl" />,
  };

  return (
    <div className="flex flex-wrap bordr-dark-gray border items-center justify-between gap-6 max-sm:gap-8 bg-gray rounded-lg py-6 px-4 mb-10">
    <div className="flex items-center gap-2">
      <div className="text-white sm:text-6xl text-5xl border-gold rounded-full border-[2px]">
        <FaUserCircle />
      </div>
      <div className="max-sm:text-sm">
        <p>{userName || 'johnFundz'}</p>
        <p className="font-medium text-white">{userEmail || 'Johndoe@gmail.com'}</p>
        <button 
          className="bg-gold hover:bg-opacity-80 transition-all ease-in-out duration-200 max-md:text-sm  py-1 px-3 rounded-md transform translate-y-2" 
          onClick={onStartTransaction || undefined}
        >
          <Link to={'/user/transaction-initiate'}>Start a Transaction</Link>
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      <InfoCard icon={<MdVerified />} label="Verification Status" value="70% Complete" content={`Get your account verified today to increase your authenticity.`}/>
      <InfoCard icon={<FaMedal />} label="Badge Status" value={level || 'Beginner'} levelIcon={icons['beginner']} content={'Continue to stay active, and transact ethically to grow to the next milestone and enjoy premium benefits!'} />
      <ProgressBadgeCard />
    </div>
  </div>
  )
}

export default ProfileCard
