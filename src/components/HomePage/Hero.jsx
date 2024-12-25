import React from 'react'

const Hero = () => {
  return (
    <section className='bg-hero bg-cover bg-center max-md:py-[150px] md:min-h-screen text-center text-white m-auto flex justify-center items-center px-[15px] sm:px-[50px] lg:px-[100px] xl:px-[150px] flex-col gap-5 border-b border-dashed border-[gold] overflow-hidden'>
      <h1 className='lg:text-7xl md:text-6xl font-semibold sm:text-5xl text-4xl'>
      <span> Discover </span>the Slickness  of Secured <span>Trade </span> 
      </h1>
      <p className='lg:text-xl md:text-lg max-sm:text-sm'>
        Say bye to getting ripped off yur hard earned money fequently! The best solution is fro you right here. Trade with confident and slick withiut ever worrying of getting ripped!
      </p>

      <button className="bg-[gold] bg-opacity-90 hover:bg-opacity-100 text-black px-5 py-1 border-none font-semibold outline-none transition-all duration-200 md:text-lg md:py-2 md:px-6  mt-3 mb-5 lg:text-xl lg:py-3 lg:px-7 ">
        Get Started
      </button>
    </section>
  )
}

export default Hero
