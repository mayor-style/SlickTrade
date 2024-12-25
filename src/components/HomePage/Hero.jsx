import React from 'react'
import Button from '../Button'

const Hero = () => {
  return (
    <section className='bg-hero bg-cover bg-center pt-[140px] pb-[100px] text-center text-white m-auto flex justify-center items-center px-[15px] sm:px-[50px] lg:px-[100px]  relative xl:px-[150px] flex-col gap-5 border-b border-dashed border-[gold] overflow-hidden'>
      <div className="absolute  h-full w-full bg-black opacity-40"></div>
      <h1 className='lg:text-6xl md:text-5xl font-bold sm:text-4xl text-3xl relative leading-10'>
      <span> Your </span>Gateway to Secure, Seamless, and Profitable<span> Transactions </span> 
      </h1>
      <p className='lg:text-xl tracking-wide md:text-lg max-sm:text-sm text-white relative'>
       Break barriers in global trading. Connect with trusted vendors, trade effortlessly, and secure your success with SlickTrade-Your partner in reliable transactions.
      </p>

      <Button text={'START TRADING SECURELY'}/>
    </section>
  )
}

export default Hero
