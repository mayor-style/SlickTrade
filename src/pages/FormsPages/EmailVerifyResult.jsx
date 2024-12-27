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
          navigate('/'); // Redirect to homepage
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
      <div className="left-0 absolute hidden h-full w-full top-0 bg-black opacity-70 z-1"></div>

      {/* Content Container */}
      <div 
        className="bg-light-black backdrop-blur-sm border border-gold border-dashed transition-all py-10 px-5 md:px-12 max-w-[90%] sm:max-w-md lg:max-w-lg text-sm sm:text-base flex items-center flex-col justify-center m-auto rounded-lg shadow-[0px_4px_12px_rgba(255,215,0,0.4),_0px_8px_24px_rgba(184,134,11,0.7)] relative"
        id='verificationResultContainer'>

        {/* Header */}
        <div className="text-center  pb-4">
          <div className="flex items-center  justify-center gap-1 pb-1"> 
            <img src={logo} alt="logo" className='w-12 h-auto sm:w-16' />
            <h1 className='font-bold text-2xl sm:text-4xl text-center text-white'>
              <span>Slick</span>Trade
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center text-white">
          {status === 'success' ? (
            <>
              <h2 className='text-3xl text-gold bold'>Email Verified Successfully</h2>
              <p className='my-3'>Your email has been verified. You will be redirected to your dashboard...</p>

               {/* Show spinner during redirect */}
               {redirecting && 
             <div className="bg-gray p-3 rounded-lg border-dark-gray">
            <Spinner  message="Redirecting to Your User Dashboard..." />
             </div>
             }
            </>
          ) : (
            <>
              <h2 className='text-3xl text-red-600 font-semibold'>Email Verification Failed</h2>
              <p className='my-3'>We could not verify your email. You will be redirected to Re-verify</p>
               {/* Show spinner during redirect */}
               {redirecting && 
             <div className="bg-gray p-3 rounded-lg border-dark-gray">
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
