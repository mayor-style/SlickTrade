import React from 'react';
import { FaSearch, FaBell, FaQuestionCircle, FaUserCircle } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { FaWallet, FaCogs } from 'react-icons/fa';
import { MdOutlineSwapHoriz, MdOutlineHelpCenter } from 'react-icons/md';
import { HiOutlineUsers } from 'react-icons/hi';
import { RiDashboardLine } from 'react-icons/ri';
import { BsChatDots } from 'react-icons/bs';
import logo from '../../assets/imgs/logo.png';

const Sidebar = () => {
  const pages = [
    { name: "Dashboard", path: "/user/dashboard", icon: <RiDashboardLine /> },
    { name: "Transactions", path: "/user/transactions", icon: <MdOutlineSwapHoriz /> },
    { name: "Wallet", path: "/user/wallet", icon: <FaWallet /> },
    { name: "Vendors", path: "/user/vendors", icon: <HiOutlineUsers /> },
    { name: "Messages/Chat", path: "/user/messages", icon: <BsChatDots /> },
    { name: "Profile Settings", path: "/user/profile-settings", icon: <FaCogs /> },
    { name: "Support/Help", path: "/user/support", icon: <MdOutlineHelpCenter /> },
  ];

  return (
    <div className="h-full bg-hero bg-cover bg-center relative flex ">
    
        <div className="absolute h-full w-full inset-0 backdrop-blur-sm"></div>
          {/* Sidebar */}
          
      <div className="h-full fixed z-10 top-0 left-0 flex flex-col max-md:hidden  border  backdrop-blur-md border-t-gray border-l-gray border-b-gray border-r-gray overflow-auto scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-gray lg:max-w-[270px] max-lg:w-[110px] py-4 px-3 pb-10 transition-all duration-300">

        {/* Logo */}
        <div className="flex justify-center lg:px-6 border-b border-b-gray pb-4 items-center gap-1 mb-10">
          <img src={logo} alt="SlickTrade Logo" className="object-cover w-11 h-auto" />
          <h1 className="tracking-wide text-xl max-lg:hidden text-white font-bold">
            <span className="text-gold">Slick</span>Trade
          </h1>
        </div>

        {/* Menu Section */}
        <ul className="flex w-full flex-col gap-4 px-4">
          {pages.map((page) => (
            <li key={page.name} className='group'>
              <Link
                className="flex items-center gap-3 p-2 lg:group-hover:bg-gold max-lg:justify-center group-hover:text-black text-white rounded-full transition-all duration-300"
                to={page.path}
              >
                <span className="'text-gold lg:group-hover:bg-black  max-lg:hover:text-black  max-lg:hover:bg-gold bg-gray max-lg:p-3 p-2 rounded-full max-lg:text-lg transition-all duration-300">
                  {page.icon}
                </span>
                <span className="text-white group-hover:text-black group-hover:font-semibold group-hover:text-sm max-lg:hidden">
                  {page.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="max-md:ml-0 flex-1 relative right-0 flex-col z-1 h-full overflow-auto max-md:w-full user-right-dashboard" >
        
        {/* Top Navbar */}
        <div className="flex px-4 justify-between h-[67px] sm:h-[77px] text-white border-b border-b-gray items-center">
          {/* Search Input */}
          <div className="search-bar border py-1 max-sm:text-sm bg-gray px-3 rounded-full justify-between flex items-center  border-dark-gray">
            <input type="text" className="outline-none sm:w-[200px] lg:w-[300px] bg-transparent" placeholder="Search here..." />
            <button type="submit" className="font-medium">
              <FaSearch />
            </button>
          </div>

          {/* Icons */}
          <div className="admin-nav-right sm:text-xl flex items-center gap-2 sm:gap-4">
            <Link
              to="#notifications"
              className="nav-icon bg-gray p-2 text-gold rounded-full hover:bg-gold hover:text-black transition-all ease-in-out duration-300"
            >
              <FaBell />
            </Link>
            <Link
              to="#help"
              className="nav-icon bg-gray p-2 text-gold rounded-full hover:bg-gold hover:text-black transition-all ease-in-out duration-300"
            >
              <FaQuestionCircle />
            </Link>
            <Link
              to="#profile"
              className="nav-icon bg-gray p-2 text-gold rounded-full hover:bg-gold hover:text-black transition-all ease-in-out duration-300"
            >
              <FaUserCircle />
            </Link>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="flex-1 p-6 overflow-auto ">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
