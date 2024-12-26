import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex text-white  justify-between py-[50px] px-[20px]'>
      <div className="">
        <h1 className='mb-3'>Company Info</h1>
        <ul>
          <li><Link> About Us </Link></li>
          <li><Link> Contact Us </Link></li>
        </ul>
      </div>

      <div className="">
        <h1 className='mb-3'>Legal</h1>
        <ul>
          <li><Link> Terms of Service </Link></li>
          <li><Link> Privacy Policy </Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
