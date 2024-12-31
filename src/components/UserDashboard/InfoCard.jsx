import React from 'react'
import { GoArrowUpRight } from 'react-icons/go';

const InfoCard = ({ icon, label, value, content, levelIcon }) => {
  return (
    <div className="bg-glass border space-y-2 border-dark-gray flex flex-col  justify-between text-white p-3 rounded-lg">
      <div className="flex gap-2  flex-col">
    <span className='text-2xl'>{icon}</span>
    <p className="xs:text-lg text-sm">{label}</p>
    <h1 className=' tracking-wider text-sm'>{content || `Get your account verified to increase your authenticity.`}</h1>
    </div>
    <div className="flex bottom-0 items-center justify-between">
      <h1 className="tracking-wide flex gap-1 items-center">{value} <span>{levelIcon}</span></h1>
      <span className="cursor-pointer"><GoArrowUpRight /></span>
    </div>
  </div>
  )
}

export default InfoCard
