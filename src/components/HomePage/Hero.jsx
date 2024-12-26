import React from 'react'
import Button from '../Button'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className='bg-hero bg-cover bg-center pt-[140px] pb-[100px] text-center text-white m-auto flex justify-center items-center px-[15px] sm:px-[50px] lg:px-[100px]  relative xl:px-[150px] flex-col gap-5 border-b border-dashed border-[gold] overflow-hidden'>
      <div className="absolute  h-full w-full bg-black opacity-40"></div>
      <motion.div 
      initial={{y:40, opacity:0}}

      animate={{y:0, opacity:1}}

      transition={{duration:1, ease:'easeIn'}}
      >
      <h1 className='lg:text-6xl md:text-5xl font-bold sm:text-4xl text-3xl relative leading-10'>
      <span> Experience </span>the Future of Safe and Seamless<span> Trade </span> 
      </h1>
      </motion.div>

      <p className='lg:text-xl tracking-wide md:text-lg max-sm:text-sm text-white relative'>
      Say goodbye to risks and uncertainity. Our Platform connects you with trusted vendors, offering a secure and efficient trading exeprience like never before.
      </p>

      <Button text={'GET STARTED TODAY'}/>
    </section>
  )
}

export default Hero
