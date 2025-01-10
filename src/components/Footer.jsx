import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';
import { FaTwitter, FaTelegramPlane, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Social Icons

const Footer = () => {
  return (
    <footer className=" text-white py-12 px-6 sm:px-12">
      <div className="max-w-screen-xl mx-auto max-md:gap-[90px] flex flex-wrap-reverse justify-center md:justify-between items-center">
        
        {/* Left Section: Logo and Copyright */}
        <div className="flex flex-col max-md:items-center md:items-start  md:text-start items-center  text-center ">
          {/* Logo Section */}
          <div className="flex items-center  gap-1 mb-6">
          <img src={logo} alt="SlickTrade Logo" className='max-w-11 h-auto ' />
          <h1 className='tracking-wide text-xl  font-semibold'><span>Slick</span>Trade</h1>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex gap-4 mb-4 ">
            <a href="#" className="text-gold hover:text-yellow-400">
              <FaTelegramPlane size={20} />
            </a>
            <a href="#" className="text-gold hover:text-yellow-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gold hover:text-yellow-400">
              <FaWhatsapp size={20} />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm ">&copy; 2024 SlickTrade. All Rights Reserved.</p>
        </div>

        {/* Right Section: Links */}
        <div className="flex gap-16 ">
          {/* Company Info */}
          <div>
            <h1 className="mb-3 font-semibold">Company Info</h1>
            <ul className="text-[#c2c2c2]">
              <li className="hover:text-gold transition-all duration-500">
                <Link to="#">About Us</Link>
              </li>
              <li className="hover:text-gold transition-all duration-500">
                <Link to="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h1 className="mb-3 font-semibold">Legal</h1>
            <ul className="text-[#c2c2c2]">
              <li className="hover:text-gold transition-all duration-500">
                <Link to="#">Terms of Service</Link>
              </li>
              <li className="hover:text-gold transition-all duration-500">
                <Link to="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
