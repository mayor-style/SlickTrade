import React from 'react';
import { Link } from 'react-router-dom';
import { FaKey } from 'react-icons/fa'; // Importing the key icon

const ResetPassword = () => {
  return (
    <div className="relative bg-hero w-full min-h-screen bg-cover bg-center bg-no-repeat px-4 py-12">
      {/* Overlay */}
      <div className="absolute hidden inset-0 bg-black opacity-50"></div>

      {/* Reset Password Container */}
      <div className="relative backdrop-blur-sm bg-light-black shadow-[0px_4px_12px_rgba(255,215,0,0.4),_0px_8px_24px_rgba(184,134,11,0.7)] border border-gold border-dashed px-8 py-10 rounded-lg max-w-lg mx-auto text-center text-white">
        {/* Icon Above Header */}
        <div className="flex justify-center mb-3">
          <FaKey className="text-5xl text-gold" />
        </div>

        <h1 className="text-3xl max-sm:text-2xl font-bold text-gold mb-2">Reset Your Password</h1>
        <p className="pb-5 text-sm border-b max-xs:text-xs tracking-wide border-dark-gray">
          Enter your email to receive a password reset link, or create a new password below.
        </p>

        <form className="mt-5">
          {/* Email Address */}
          <div className="mb-4 text-left">
            <label htmlFor="email" className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
          </div>

          {/* New Password */}
          <div className="mb-4 text-left">
            <label htmlFor="newPassword" className="block text-sm mb-1">New Password</label>
            <input
              type="password"
              id="newPassword"
              placeholder="Create a new password"
              required
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
          </div>

          {/* Confirm New Password */}
          <div className="mb-6 text-left">
            <label htmlFor="confirmNewPassword" className="block text-sm mb-1">Confirm New Password</label>
            <input
              type="password"
              id="confirmNewPassword"
              placeholder="Confirm your new password"
              required
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gold text-black py-2 rounded-md hover:bg-yellow-500 transition duration-200"
          >
            Reset Password
          </button>
        </form>

        <p className="mt-4 text-sm">
          Remembered your password?{' '}
          <Link to="/login" className="text-gold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
