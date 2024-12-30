import React from 'react'
import { FaUserCircle, FaMedal } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import InfoCard from '../InfoCard'

const ProfileCard =  ({ userName, userEmail, onStartTransaction }) => {
  return (
    <div className="flex flex-wrap border-dark-gray border items-center justify-between gap-6 bg-gray rounded-lg py-6 px-4 mb-10">
    <div className="flex items-center gap-2">
      <div className="text-white sm:text-6xl text-5xl border-gold rounded-full border-[2px]">
        <FaUserCircle />
      </div>
      <div className="max-sm:text-sm">
        <p>{userName || 'johnFundz'}</p>
        <p className="font-medium text-white">{userEmail || 'Johndoe@gmail.com'}</p>
        <button 
          className="bg-gold hover:bg-opacity-80 transition-all ease-in-out duration-200 max-md:text-sm py-1 px-3 rounded-md transform translate-y-2" 
          onClick={onStartTransaction || undefined}
        >
          Start a Transaction
        </button>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3">
      <InfoCard icon={<MdVerified />} label="Verification Status" value="Unverified" />
      <InfoCard icon={<FaMedal />} label="Badge Status" value="Beginner" />
    </div>
  </div>
  )
}

export default ProfileCard
