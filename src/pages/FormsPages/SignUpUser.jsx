import React from 'react';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa'; // Importing the lock icon

const SignUpUser = () => {
  return (
    <div className="relative bg-hero w-full min-h-screen bg-cover bg-center bg-no-repeat px-4 py-12">
      {/* Overlay */}
      <div className="absolute hidden inset-0 bg-black opacity-50"></div>

      {/* Sign Up Container */}
      <div className="relative backdrop-blur-sm bg-light-black shadow-[0px_4px_12px_rgba(255,215,0,0.4),_0px_8px_24px_rgba(184,134,11,0.7)] border border-gold border-dashed px-8 py-10 rounded-lg max-w-lg mx-auto text-center text-white">
        {/* Icon Above Header */}
        <div className="flex justify-center mb-3">
          <FaLock className="text-5xl text-gold" />
        </div>

        <h1 className="text-3xl max-sm:text-2xl font-bold text-gold mb-2">Get Started Today</h1>
        <p className="pb-5 text-sm border-b max-xs:text-xs tracking-wide border-dark-gray">
          Join a secure community of users, receive payments effortlessly, and take control of your international transactions.
        </p>

        <form className="mt-5 max-xs:text-sm">
          {/* Full Name */}
          <div className="mb-4 text-left ">
            <label htmlFor="fullName" className="block text-sm mb-1">Full Name </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              required
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
          </div>

          {/* Email */}
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

          {/* Phone */}
          <div className="mb-4 text-left">
            <label htmlFor="phone" className="block text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              required
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
          </div>

          {/* Username */}
          <div className="mb-4 text-left">
            <label htmlFor="username" className="block text-sm mb-1">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              required
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-4 text-left">
            <label htmlFor="password" className="block text-sm mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              required
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4 text-left">
            <label htmlFor="confirmPassword" className="block text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="mb-6 text-left flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              required
              className="form-checkbox text-gold rounded-md bg-dark-gray border border-dark-gray focus:ring-1 focus:ring-gold"
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the{' '}
              <Link to="/terms-and-conditions" className="text-gold hover:underline">
                Terms and Conditions
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gold text-black py-2 rounded-md hover:bg-yellow-500 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-gold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpUser;
