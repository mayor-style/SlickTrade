import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/imgs/logo.png';
import Button from '../../components/Button';

const EmailVerify = () => {
    const location = useLocation();
    const userEmail = location?.state?.Email || 'Your email';

    return (
        <main className='py-[100px] flex w-[100%] px-[10px] min-h-screen m-auto bg-hero bg-cover bg-center relative'>
            {/* Black Overlay */}
            <div className="left-0 absolute hidden h-full w-full top-0 bg-black opacity-70 z-1"></div>

            {/* Content Container */}
            <div 
                className="bg-light-black backdrop-blur-md border border-gold border-dashed  transition-all py-10 px-5 md:px-12 max-w-[90%] sm:max-w-md lg:max-w-lg text-sm sm:text-base flex items-center flex-col justify-center m-auto rounded-lg shadow-[0px_4px_12px_rgba(255,215,0,0.4),_0px_8px_24px_rgba(184,134,11,0.7)] relative"
                id='emailVerifyContainer' >

                {/* Header */}
                <div className="text-center pb-8">
                    <div className="flex items-center justify-center gap-1 pb-1"> 
                        <img src={logo} alt="logo" className='w-12 h-auto sm:w-16' />
                        <h1 className='font-bold text-2xl sm:text-4xl text-center text-white'>
                            <span>Slick</span>Trade
                        </h1>
                    </div>
                    <p className='border-b pb-3 max-xs:text-xs border-dark-gray'>
                        Finalize your Registration by
                        Securing Your Account With Email Verification.
                    </p>  
                </div>

                {/* Main Content */}
                <div className="text-center text-white">
                    <h2 className='text-3xl text-gold font-semibold'>Verify Your Email!</h2>
                    <p className='mt-3'>
                        We have sent a verification email to <strong className='text-white'>{userEmail}</strong>.
                    </p>
                    <p className='mt-3'>
                        If you don't see the email in your inbox, check your spam or junk folder.
                    </p>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col gap-3 items-center justify-center mt-8 w-full">

                    {/* Resend Verification Link */}
                    <button
                    className="w-full bg-gold text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition duration-200"
                >
                Resend Verification Link
                </button>

                    {/* Change Email */}
                    <button
                    className="w-full bg-gold text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition duration-200"
                >
                Change Email
                </button>

                {/* email success */}
                <Link
                    to={'/email-verification-result'}
                    className="w-full bg-gold text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition text-center duration-200"
                >
                Stimulate Email Success
                </Link>

                 </div>

                {/* Footer */}
                <p className='pt-5 text-white text-center max-xs:text-xs w-[100%]'>
                    Need help? Contact our <span className='text-gold'>Support Team</span>.
                </p>
            </div>
    
        </main>
    );
};

export default EmailVerify;
