import React from 'react'
import about from '../../assets/imgs/about.jpg'
import { RiShieldCheckFill } from 'react-icons/ri';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { AiOutlineLock } from 'react-icons/ai';


const About = () => {
  return (
    <div className=' flex max-lg:block w-full bg-gray overflow-hidden text-white gap-10  lg:py-[100px] py-[70px] px-[15px] md:px-[20px]'>
      <div className="l:h-[500px] max-lg:hidden relative">
        <img src={about} alt="About image" className='max-w-[400px] l:max-w-[500px] h-full object-cover rounded-3xl relative z-10 border border-[gold] border-dashed' />
        <div className="absolute h-full w-full bg-[black] borde border-[gold] border-dashed top-0 rounded-3xl py-10 -rotate-3"></div>
      </div>

      <div className="">
        <h1 className='sm:text-4xl text-3xl mb-5 '>
          <span className='text-[gold]  font-bold'>Slick</span><span className='text-white font-bold'>Trade:</span> Built for Trust, Designed for Success.
        </h1>
        <p className='sm:tracking-wide tracking-wider text-xs sm:text-sm leading-relaxed'>At SlickTrade, we prioritize your peace of mind. Our platform is crafted to enable safe, fast, and reliable international transactions for users and vendors alike. Whether you’re a business owner, a hustler, or a service provider, we’re here to make your trading experience smooth and secure.</p>

        <div className="flex flex-col gap-5 mt-5">
         <div className="flex text-[15px] sm:text-lg tracking-wide items-center gap-2">
         <RiShieldCheckFill color='gold' />
         <h1 >Industry-leading escrow system for ultimate safety.</h1>
         </div>
         <div className="flex text-[15px] sm:text-lg tracking-wide items-center gap-2">
         <HiOutlineCurrencyDollar  color='gold'/>
         <h1>Transparent transaction policies with no hidden fees.</h1>
         </div>
         <div className="flex items-center text-[15px] tracking-wide sm:text-lg gap-2">
         <IoNotificationsOutline  color='gold' />
         <h1>Real-time notifications and insights for seamless trading.
         </h1>
         </div>
         <div className="flex text-[15px] tracking-wide items-center sm:text-lg gap-2">
         <AiOutlineLock  color='gold'/>
         <h1>Privacy-first approach, keeping your activities confidential.
         </h1>
         </div>
        </div>

      </div>
    </div>
  )
}

export default About;
