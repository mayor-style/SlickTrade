import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBriefcase } from 'react-icons/fa'; // Importing the briefcase icon
import Spinner from '../../components/Spinner';

const SignUpVendor = () => {
  const navigate = useNavigate();

  // Form data collection declaration
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    Email: '',
    Phone: '',
    username: '',
    Password: '',
    confirmPassword: '',
  });

  // Declare error texts for each input
  const [errors, setErrors] = useState({
    fullName: '',
    businessName: '',
    Email: '',
    Phone: '',
    username: '',
    Password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const [backendError, setBackendError] = useState('');

  // VALIDATE PASSWORD RULES ARE FOLLOWED
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // VALIDATE ALL FORM INPUTS
  const validateForm = () => {
    let formErrors = { ...errors };
    let isValid = true;

    if (!formData.fullName) {
      formErrors.fullName = 'Full name is required.';
      isValid = false;
    } else {
      formErrors.fullName = '';
    }

    if (!formData.Email) {
      formErrors.Email = 'Email is required.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
      formErrors.Email = 'Invalid email format.';
      isValid = false;
    } else {
      formErrors.Email = '';
    }

    if (!formData.Phone) {
      formErrors.Phone = 'Phone number is required.';
      isValid = false;
    } else if (!/^\d+$/.test(formData.Phone)) {
      formErrors.Phone = 'Phone number must contain only digits.';
      isValid = false;
    } else {
      formErrors.Phone = '';
    }

    if (!formData.username) {
      formErrors.username = 'Username is required.';
      isValid = false;
    } else {
      formErrors.username = '';
    }

    if (!formData.Password) {
      formErrors.Password = 'Password is required.';
      isValid = false;
    } else if (!validatePassword(formData.Password)) {
      formErrors.Password = 'Password must be at least 6 characters long, contain at least one letter, one number, and one special character.';
      isValid = false;
    } else {
      formErrors.Password = '';
    }

    if (formData.Password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match.';
      isValid = false;
    } else {
      formErrors.confirmPassword = '';
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true); // Show loading spinner
      setBackendError(''); // Reset any previous backend error message

      const dataToSend = {
        fullName: formData.fullName,
        businessName: formData.businessName,
        Email: formData.Email,
        Phone: formData.Phone,
        username: formData.username,
        Password: formData.Password,
      };

      try {
        // Simulating a delay for API call
        setTimeout(() => {
          setLoading(false); // Hide loading spinner
          navigate('/email-verification', { state: dataToSend });
        }, 3000);
      } catch (error) {
        setLoading(false); // Hide loading spinner
        if (error.response) {
          // Backend responded with an error
          setBackendError(error.response.data.message || 'Something went wrong. Please try again.');
        } else if (error.request) {
          // No response received from the server
          setBackendError('Server unavailable. Please check your internet connection and try again.');
        } else {
          // General error during setup or sending request
          setBackendError('An unexpected error occurred. Please try again.');
        }
      }
    }
  };

  return (
    <div className="relative bg-hero w-full min-h-screen bg-cover bg-center bg-no-repeat px-4 py-12">
      {/* Overlay */}
      <div className="absolute hidden inset-0 bg-black opacity-50"></div>

      {/* Sign Up Vendor Container */}
      <div className="relative backdrop-blur-sm bg-light-black shadow-[0px_4px_12px_rgba(255,215,0,0.4),_0px_8px_24px_rgba(184,134,11,0.7)] border border-gold border-dashed px-8 py-10 rounded-lg max-w-lg mx-auto text-center text-white">

        <div className="flex justify-center mb-3">
          <FaBriefcase className="text-5xl text-gold" />
        </div>

        <h1 className="text-3xl max-sm:text-2xl font-bold text-gold mb-2">Join as a Vendor</h1>
        <p className="pb-5 text-sm border-b max-xs:text-xs tracking-wide border-dark-gray">
          Expand your reach, connect with clients, and grow your business with ease.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 max-xs:text-sm">
          {/* Full Name */}
          <div className="mb-4 text-left">
            <label htmlFor="fullName" className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>

          {/* Business Name */}
          <div className="mb-4 text-left">
            <label htmlFor="businessName" className="block text-sm mb-1">Business Name(optional)</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Enter your business name if you have any.."
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-4 text-left">
            <label htmlFor="Email" className="block text-sm mb-1">Email</label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
            {errors.Email && <p className="text-red-500 text-xs mt-1">{errors.Email}</p>}
          </div>

          {/* Phone */}
          <div className="mb-4 text-left">
            <label htmlFor="Phone" className="block text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              id="Phone"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
            {errors.Phone && <p className="text-red-500 text-xs mt-1">{errors.Phone}</p>}
          </div>

          {/* Username */}
          <div className="mb-4 text-left">
            <label htmlFor="username" className="block text-sm mb-1">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username"
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
          </div>

          {/* Password */}
          <div className="mb-4 text-left">
            <label htmlFor="Password" className="block text-sm mb-1">Password</label>
            <input
              type="password"
              id="Password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
            {errors.Password && <p className="text-red-500 text-xs mt-1">{errors.Password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-4 text-left">
            <label htmlFor="confirmPassword" className="block text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className="w-full p-3 rounded-md border-dashed bg-gray text-white border border-dark-gray focus:ring-1 focus:ring-gold focus:outline-none"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
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
          {/* Backend Error */}
          {backendError && <p className="text-red-500 text-sm text-center mb-3">{backendError}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-md text-sm font-bold text-black bg-gold tracking-wide mt-1 border-none hover:opacity-90 ${
              loading ? 'cursor-not-allowed opacity-50' : ''
            }`}
          >
            {loading ? <Spinner color={'black'} message="Processing..." /> : 'Create Vendor Account'}
          </button>

          <p className="mt-3 text-white text-sm max-xs:text-xs text-center">
            Already registered?{' '}
            <Link to="/login" className="text-gold underline">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpVendor;

             
