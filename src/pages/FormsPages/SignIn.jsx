import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaTwitter, FaLock } from 'react-icons/fa'; // Example header icon

const SignIn = () => {
  return (
    <div className="relative bg-hero w-full min-h-screen bg-cover bg-center bg-no-repeat px-4 py-12">
      {/* Overlay */}
      <div className="absolute hidden inset-0 bg-black opacity-50"></div>

      {/* Sign In Container */}
      <div className="relative  backdrop-blur-sm bg-light-black shadow-[0px_4px_12px_rgba(255,215,0,0.4),_0px_8px_24px_rgba(184,134,11,0.7)] border border-gold border-dashed px-8 py-10 rounded-lg max-w-lg mx-auto text-center text-white">
        {/* Header Icon */}
        <div className="text-gold text-5xl flex justify-center mb-4">
          <FaLock /> {/* Header Icon */}
        </div>
        
        <h1 className="text-3xl max-sm:text-2xl font-bold text-gold mb-2">Welcome Back!</h1>
        <p className="pb-5 text-sm border-b max-xs:text-xs tracking-wide border-dark-gray">
          Securely login to manage your transactions, connect with vendors / users, and keep track of progress.
        </p>

        <form className="mt-5">
          {/* Email Field */}
          <div className="mb-4 text-left">
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 text-left">
            <label htmlFor="password" className="block text-sm mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="mb-6 flex items-center justify-between">
            <label className="inline-flex items-center text-sm">
              <input
                type="checkbox"
                className="form-checkbox text-gold rounded-md bg-dark-gray border border-dark-gray focus:ring-1 focus:ring-gold"
              />
              <span className="ml-2">Remember Me</span>
            </label>
            <Link to="/reset-password" className="text-gold text-sm hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-gold text-black py-2 rounded-md hover:bg-yellow-500 transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Social Sign-In */}
        <div className="mt-6 hidden">
          <div className="flex items-center justify-between">
            <div className="h-[1px] bg-gray-700 w-1/3"></div>
            <p className="text-sm">Or sign up with:</p>
            <div className="h-[1px] bg-gray-700 w-1/3"></div>
          </div>
          <div className="flex justify-center gap-4 mt-4 text-black">
            <div className="p-3 bg-gold rounded-full cursor-pointer">
              <FaGoogle className="text-2xl" />
            </div>
            <div className="p-3 bg-gold rounded-full cursor-pointer">
              <FaFacebook className="text-2xl" />
            </div>
            <div className="p-3 bg-gold rounded-full cursor-pointer">
              <FaTwitter className="text-2xl" />
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm">
          Don't have an account?{' '}
          <Link to="/signup-signin" className="text-gold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
