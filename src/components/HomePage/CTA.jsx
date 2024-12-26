import React from 'react'
import Button from '../Button'

const CTA = () => {
  return (
    <section className='py-[100px] border-b border-t border-t-gold border-gray border-dashed  px-[20px] sm:px-[100px] text-center text-white flex flex-col gap-5'>
      <h1 className='sm:text-4xl text-3xl max-xs:text-2xl font-bold text-center'><span>Ready</span> to Experience Secure <span>Trading?</span></h1>
      <p className='tracking-wide max-sm:text-sm'>
        Join the the thousands of users and vendors experiencing secure, seamless trading on SlickTrade.
      </p>
    <div className="w-fit m-auto">
      <Button text={"START TRADING WITH CONFIDENCE"} />
      </div>
    </section>
  )
}

export default CTA
