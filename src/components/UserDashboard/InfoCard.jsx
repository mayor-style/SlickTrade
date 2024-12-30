import React from 'react'
import { GoArrowUpRight } from 'react-icons/go';

const InfoCard = ({ icon, label, value }) => {
  return (
    <div className="bg-glass border space-y-2 border-dark-gray text-white p-3 rounded-lg">
    <span>{icon}</span>
    <p className="xs:text-sm text-xs">{label}</p>
    <div className="flex items-center justify-between">
      <h1 className="tracking-wide">{value}</h1>
      <span className="cursor-pointer"><GoArrowUpRight /></span>
    </div>
  </div>
  )
}

export default InfoCard
