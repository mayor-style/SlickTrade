import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/imgs/logo.png';
import Spinner from '../../components/Spinner'; // Assume a reusable spinner component
import Button from '../../components/Button';

const EmailVerifyResult = () => {
  const navigate = useNavigate();

  // Simulating verification status: 'success' or 'failed'
  const [status, setStatus] = useState('success'); // Initial state is 'success'
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (status === 'success') {
      const successTimeout = setTimeout(() => {
        setRedirecting(true);
        const redirectTimeout = setTimeout(() => {
          navigate('/user'); // Redirect to homepage
        }, 3000);
        return () => clearTimeout(redirectTimeout);
      }, 3000);
      return () => clearTimeout(successTimeout);
    }else if(status === 'failed' ) {
        const failedTimeout = setTimeout(() => {
            setRedirecting(true);
            const redirectTimeout = setTimeout(() => {
              navigate('/email-verification'); // Redirect to Reverify email
            }, 3000);
            return () => clearTimeout(redirectTimeout);
          }, 3000);
          return () => clearTimeout(failedTimeout);
    }
  }, [status, navigate]);

  return (
    <main className='py-[100px] flex w-[100%] px-[10px] min-h-screen m-auto bg-hero bg-cover bg-center relative'>
      {/* Black Overlay */}
      <div className="inset-0 absolute backdrop-blur-sm h-full w-full "></div>

      {/* Content Container */}
      <div 
        className="bg-light-black backdrop-blur-sm border border-gold border-dashed transition-all py-10 px-3 md:px-5 max-w-[93%] sm:max-w-lg text-sm sm:text-base flex items-center flex-col justify-center m-auto rounded-lg relative"
        id='verificationResultContainer'>

        {/* Header */}
        <div className="text-center  pb-4">
          <div className="flex items-center border-b border-b-dark-gray justify-center gap-1 pb-3"> 
            <img src={logo} alt="logo" className='w-11 h-auto sm:w-15' />
            <h1 className='font-bold text-2xl sm:text-3xl text-center text-white'>
              <span>Slick</span>Trade
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center bg-glass p-4 rounded-lg text-white">
          {status === 'success' ? (
            <>
              <h2 className='sm:text-3xl text-2xl text-gold font-semibold'>Email Verified Successfully</h2>
              <p className='my-3'>Your email has been verified. You will be redirected to your dashboard...</p>

               {/* Show spinner during redirect */}
               {redirecting && 
             <div className="bg-gray p-3 border-dark-gray rounded-lg ">
            <Spinner  message="Redirecting to Your User Dashboard..." />
             </div>
             }
            </>
          ) : (
            <>
              <h2 className='sm:text-3xl text-2xl text-red-600 font-semibold'>Email Verification Failed</h2>
              <p className='my-3'>We could not verify your email. You will be redirected to Re-verify</p>
               {/* Show spinner during redirect */}
               {redirecting && 
             <div className="bg-gray p-3 border-dark-gray rounded-lg ">
            <Spinner  message="Redirecting to Re-Verify your email..." />
             </div>
             }
            </>
          )}
        </div>

        {/* Footer */}
        <p className='pt-5 text-white text-center max-xs:text-xs w-[100%]'>
          Need help? Contact our <span className='text-gold'>Support Team</span>.
        </p>
      </div>
    </main>
  );
};

export default EmailVerifyResult;
