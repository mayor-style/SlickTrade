import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Button = ({text, disabled=false}) => {
  return (
    <div className={`flex justify-center items-center relative gap-3 ${disabled ? 'bg-zinc-600' : 'bg-gold'}  ${disabled ? 'opacity-80' : ''}   ${disabled ? 'cursor-not-allowed' : 'cursor-pointer '} py-2 max-xs:pl-3 max-xs:py-[7px] pl-5 pr-2 rounded-full active:opacity-100 hover:opacity-80 transition duration-300 ease-in-out`}>
      <p className='text-sm max-md:text-[13px] max-sm:text-[12px] max-xs:text-[11px] font-bold text-black tracking-wide'>{text}</p>
      <span className='text-md text-black max-md:text-sm max-md:p-2 bg-white p-3 rounded-full max-xs:text-[12px] font-black'><GoArrowUpRight /></span>

    </div>
  )
}

export default Button
