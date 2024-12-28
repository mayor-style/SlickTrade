import React from 'react'
import { FaSearch, FaBell, FaQuestionCircle, FaUserCircle } from 'react-icons/fa';

const UserNavbar = () => {
  return (
    <div className='w-full h-full'>
        <div className="flex left-0 top-0 items-center text-xl text-white justify-between py-2 px-4">

        <div className="admin-nav-center">
        <div className="search-bar">
          <input type="text" placeholder="Search here..." />
          <button type="submit">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="admin-nav-right flex">
        <a href="#notifications" className="nav-icon">
          <FaBell />
        </a>
        <a href="#help" className="nav-icon">
          <FaQuestionCircle />
        </a>
        <a href="#profile" className="nav-icon">
          <FaUserCircle />
        </a>
      </div>
        </div>
      
    </div>
  )
}

export default UserNavbar
