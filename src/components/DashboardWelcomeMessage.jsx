import React from 'react'

const DashboardWelcomeMessage = ({Header, spanHeader, subtext}) => {
  return (
    <div>
      <div className=" mb-5 text-white items-center">           
        <h1 className=' lg:text-4xl sm:text-3xl text-2xl  text-white font-semibold '>
          {Header} <span className='font-bold'>{spanHeader}</span>
        </h1>
        <p className=' max-xs:text-xs max-lg:text-sm'>{subtext}</p>
          </div>
    </div>
  )
}

export default DashboardWelcomeMessage
