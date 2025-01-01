import React, { useEffect, useState } from 'react';
import { FaSearch, FaBell, FaQuestionCircle, FaUserCircle } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { FaWallet, FaCogs } from 'react-icons/fa';
import { MdOutlineSwapHoriz, MdOutlineHelpCenter } from 'react-icons/md';
import { HiOutlineUsers } from 'react-icons/hi';
import { RiDashboardLine } from 'react-icons/ri';
import { BsChatDots } from 'react-icons/bs';
import { RiMenuLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import logo from '../../assets/imgs/logo.png';

const Sidebar = () => {
 
  const [isSearch, setIsSearch] =useState(false);
  const [isOpen, setIsopen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('scroll-lock');
    } else {
      document.body.classList.remove('scroll-lock');
    }
    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('scroll-lock');
    };
  }, [isOpen]);



  const pages = [
    { name: "Dashboard", path: "/user/dashboard", icon: <RiDashboardLine /> },
    { name: "Transactions", path: "/user/transactions", icon: <MdOutlineSwapHoriz /> },
    { name: "Vendors", path: "/user/vendors", icon: <HiOutlineUsers /> },
    { name: "Wallet", path: "/user/wallet", icon: <FaWallet /> },
    { name: "Messages/Chat", path: "/user/messages", icon: <BsChatDots /> },
    { name: "Profile Settings", path: "/user/profile-settings", icon: <FaCogs /> },
    { name: "Support/Help", path: "/user/support", icon: <FaQuestionCircle /> },
    ...(isOpen
        ? [{ name: "Notifications", path: "/user/notifications", icon: <FaBell /> }]
        : []),
  ];


  return (
    <div className="h-full bg-hero bg-cover bg-center  relative flex ">
        {/*OVERLAY */}
        <div className={`absolute h-full w-full inset-0  ${isOpen? 'max-md:z-10 backdrop-blur-lg '  : ''} backdrop-blur-sm`}></div>

            {/* BEGINNING OF SIDEBAR 😎😎 */}       
      <div className={`h-full transition-all ease-in-out duration-300 fixed z-10 top-0 left-0 flex flex-col ${isOpen ? 'max-xs:w-full max-md:flex transform origin-left z-20 max-md:w-[270px] bg-black bg-opacity-70 ':' transform origin-left max-md:hidden '}  border  backdrop-blur-md border-t-gray border-l-gray border-b-gray border-r-gray overflow-auto scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-gray lg:max-w-[270px] max-lg:w-[110px] py-4 px-3 pb-10 `}>

         {/*HAMBURGER MENU */}
         <div className="cursor-pointer w-fit md:hidden text-white transition-all ease-in-out hover:bg-gold hover:text-black duration-300 ml-5 text-center flex md:hdden text-2xl bg-glass rounded-full border border-dark-gray  p-2 items-center justify-center mb-7"
          onClick={()=>setIsopen(!isOpen)}
          >
             <IoMdClose className=''/>
          </div>
        {/* Logo */}
        <div className={`flex justify-center ${isOpen? 'max-md:hidden': ""} lg:px-6 border-b  border-b-gray pb-4 items-center gap-1 mb-10`}>
          <img src={logo} alt="SlickTrade Logo" className="object-cover w-11 h-auto" />
          <h1 className="tracking-wide text-xl max-lg:hidden text-white font-bold">
            <span className="text-gold">Slick</span>Trade
          </h1>
        </div>

        {/* Menu Section */}
        <ul className="flex w-full transition-all duration-300 ease-in-out flex-col gap-4 px-4">
          {pages.map((page) => (
            <li key={page.name} className='group'>
              <Link
                className={`flex items-center gap-3 p-2 lg:group-hover:bg-gold max-lg:justify-center group-hover:text-black text-white rounded-full transition-all ease-in-out duration-300  ${isOpen? 'max-md:group-hover:bg-gold max-md:justify-start' :  ''}`}
                to={page.path}
                onClick={()=>setIsopen(!isOpen)}
              >
                <span className={`text-gold lg:group-hover:bg-black  max-lg:hover:text-black ${isOpen? 'max-md:group-hover:bg-black max-md:p-2 max-md:hover:text-gold' :  ''}  max-lg:hover:bg-gold bg-gray max-lg:p-3 p-2 rounded-full max-lg:text-lg transition-all duration-300`}>
                  {page.icon}
                </span>
                <span className={`text-white group-hover:text-black group-hover:font-semibold ${isOpen ? 'max-md:block': 'max-md:hidden'} group-hover:text-sm max-lg:hidden`}>
                  {page.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
            {/* END OF SIDEBAR 😎😎 */}

            {/* MAIN CONTENT AREA 😎😎 */}
      <div className={` max-md:ml-0 flex-1 relative right-0 flex-col z-1 h-full overflow-auto max-md:w-full user-right-dashboard`}  >    
        {/* Top Navbar */}
        <div className="flex px-4 justify-between h-[60px] md:h-[77px] text-white border-b border-b-gray items-center">

          {/*TOP NAVBAR CONTENT FOR SCREEN BELOW MEDIUM SIZE DOWNWARD!!! */}
          {/*HAMBURGER MENU */}
          <div className="cursor-pointer transition-all ease-in-out duration-300 md:hidden text-2xl"
          onClick={()=>setIsopen(!isOpen)}
          >
             <RiMenuLine/>
          </div>

          {/* Logo */}
          <div className={`flex md:hidden justify-center items-center gap-1 
            ${isSearch ? 'max-md:hidden': ''}`}>
          <img src={logo} alt="SlickTrade Logo" className="object-cover w-8 h-auto" />
          <h1 className="tracking-wide text-md  text-white font-bold">
            <span className="text-gold">Slick</span>Trade
          </h1>
        </div>

        {/* Search Input */}
        <div className={`search-bar md:hidden border py-2 text-sm bg-gray px-3 transition-all ease-in-out duration-300 rounded-full justify-between flex gap-2 items-center ${isSearch? 'border-dark-gray': 'border-none bg-transparent' }`} >
            <input type="text" className={`outline-none ${ isSearch? '':'hidden' } w-[250px] bg-transparent`} placeholder="Search here..." />
            <button type="submit" onClick={()=>setIsSearch(!isSearch)} className={`text-lg font-medium`}>
              <FaSearch />
            </button>
          </div>

          {/* TOP NAVBAR CONTENTS FOR SCREEN ABOVE MEDIUM  SIZE!!! */}
          {/* Search Input */}
          <div className="search-bar max-md:hidden border py-1 max-sm:text-sm bg-gray px-3 rounded-full justify-between flex items-center  border-dark-gray">
            <input type="text" className="outline-none sm:w-[200px] lg:w-[300px] bg-transparent" placeholder="Search here..." />
            <button type="submit" className="font-medium">
              <FaSearch />
            </button>
          </div>

          {/* Icons */}
          <div className="admin-nav-right max-md:hidden sm:text-xl flex items-center gap-2 sm:gap-4">
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
        <div className="flex-1 p-4 overflow-auto ">
          <Outlet />
        </div>

      </div>
            {/*END OF MAIN CONTENT AREA 😎😎 */}
    </div>
  );
};

export default Sidebar;
