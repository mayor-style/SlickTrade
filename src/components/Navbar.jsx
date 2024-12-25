import React from 'react'
import logo from '../assets/imgs/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='p-4 justify-between fixed top-0 left-0 right-0 flex lg:justify-around w-full items-center text-white bg-[rgba(0,0,0,0.5)] backdrop-blur-xl shadow-md shadow-light-black border-b border-gray'>
      <div className="flex justify-center items-center gap-1 lg:w-full">
        <img src={logo} alt="SlickTrade Logo" className='sm:max-w-12 h-auto max-w-10' />
        <h1 className='tracking-wide sm:text-xl text-lg font-semibold'>SlickTrade</h1>
      </div>

      <ul className='lg:flex lg:w-full hidden flex-row w-full justify-center items-center gap-7 tracking-wider'>
        <li><Link className='link hover:text-[gold] transition-all duration-200'>About</Link></li>
        <li><Link className='link hover:text-[gold] transition-all duration-200'>Features</Link></li>
        <li><Link className='link hover:text-[gold] transition-all duration-200'>How It Works</Link></li>
      </ul>

      <div className="flex lg:w-full justify-center items-center">
        <button className='lg:px-[20px] px-[10px] lg:py-[10px] py-[10px] font-[500] lg:text-[14px] sm:text-xs uppercase border border-[rgb(94,94,94)] text-[10px] text-white cursor-pointer hover:bg-[gold] hover:font-semibold hover:text-black transition-all duration-300'>
          Sign Up / Sign In
        </button>
      </div>
    </nav>
  )
}

export default Navbar
