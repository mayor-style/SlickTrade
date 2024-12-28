import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/imgs/logo.png'
import useOnScreenAnimation from '../../components/UseOnScreenAnimation';

const SignUpLoginPage = () => {
  useOnScreenAnimation("hidden-scale", "show-scale")
  
  return (
    <main className='py-[100px] flex w-[100%] px-[10px] min-h-screen m-auto bg-hero bg-cover bg-center relative'>
    {/* Black Overlay */}
    <div className="absolute left-0 top-0 h-full w-full backdrop-blur-sm"></div>
  
   {/* Form Container */}
      <div 
        className="bg-light-black backdrop-blur-sm border border-gold border-dashed hidden-scale transition-all py-10 px-5 md:px-12 max-w-[90%] sm:max-w-md lg:max-w-lg text-sm sm:text-base flex items-center flex-col justify-center m-auto rounded-lg shadow-[0px_4px_12px_rgba(255,215,0,0.4),_0px_8px_24px_rgba(184,134,11,0.7)] relative"
        id='formContainer'>
        
        {/* Title */}
        <div className="text-center pb-8">
        <div className="flex items-center justify-center gap-1 pb-1"> 
          <img src={logo} alt="logo" className='w-12 h-auto sm:w-16' />
          <h1 className='font-bold text-2xl sm:text-4xl 
          text-center text-white'><span>Slick</span>Trade</h1>
          </div>   
          <p className='border-b pb-3 max-xs:text-xs border-dark-gray'>Connecting Users and Vendors With Seamless Transactions.</p>  
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col gap-5 items-center justify-center font-bold w-full">
          {/* Sign up as User */}
          <Link 
            to={'/signup-user'} 
            className='outline-none w-full max-w-[80%] text-center text-white bg-gray border border-dashed border-dark-gray rounded-full py-3 md:py-4 active:opacity-90 hover:opacity-80 transition duration-200 ease-in-out'>
            Sign up as a User
          </Link>

          {/* Sign up as Vendor */}
          <Link 
            to={'/signup-vendor'} 
            className='text-center w-full max-w-[80%] border border-dashed border-dark-gray text-white bg-gray rounded-full py-3 md:py-4 active:opacity-90 hover:opacity-80 transition duration-200 ease-in-out'>
            Sign up as a Vendor
          </Link>

          {/* Login */}
          <Link 
            to={'/login'} 
            className='text-center w-full max-w-[80%] border border-dashed border-dark-gray bg-transparent text-white active:opacity-90 hover:opacity-80 transition duration-200 ease-in-out rounded-full py-2 md:py-3 active:bg-gold active:text-black'>
            Log in
          </Link>
        </div>

          {/* Terms and Policies */}
          <p className='pt-5 text-white text-center max-xs:text-xs w-[100%] '>
            By signing up you agree to our <Link className='text-gold' to='/'>Terms</Link> and <Link className='text-gold' to='/'>Policy</Link>
          </p>
      </div> 

  </main>
  
  )
}

export default SignUpLoginPage;
