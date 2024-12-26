import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex text-white  justify-between py-[50px] px-[20px]'>
      <div className="">
        <h1 className='mb-3'>Company INFO</h1>
        <ul className='text-[#c2c2c2]'>
          <li className='hover:text-[gold] transition-all duration-500'><Link> About Us </Link></li >
          <li className='hover:text-[gold] transition-all duration-500'><Link> Contact Us </Link></li >
        </ul>
      </div>

      <div className="">
        <h1 className='mb-3'>LEGAL</h1>
        <ul className='text-[#c2c2c2]'>
          <li className='hover:text-[gold] transition-all duration-500'><Link> Terms of Service </Link></li>
          <li className='hover:text-[gold] transition-all duration-500'><Link> Privacy Policy </Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
