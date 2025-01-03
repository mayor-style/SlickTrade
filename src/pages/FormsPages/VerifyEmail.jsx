import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/imgs/logo.png';

const VerifyEmail = () => {
    const location = useLocation();
    const userEmail = location?.state?.Email || 'Your email';

    return (
        <main className='py-[100px] flex w-[100%] px-[10px] min-h-screen m-auto bg-hero bg-cover bg-center relative'>
            {/* Black Overlay */}
            <div className="inset-0 absolute backdrop-blur-sm h-full w-full"></div>

            {/* Content Container */}
            <div 
                className="bg-light-black backdrop-blur-md border border-gold border-dashed transition-all py-10 px-3 md:px-5 max-w-[93%]  sm:max-w-lg text-sm sm:text-base flex items-center flex-col justify-center m-auto rounded-lg  relative"
                id='emailVerifyContainer'
            >
                {/* Header */}
                <div className="text-center pb-10">
                    <div className="flex items-center justify-center gap-1 pb-1"> 
                        <img src={logo} alt="logo" className='w-11 h-auto sm:w-15' />
                        <h1 className='font-bold text-2xl sm:text-3xl text-center text-white'>
                            <span>Slick</span>Trade
                        </h1>
                    </div>
                    <p className='border-b pb-3 max-xs:text-xs border-dark-gray'>
                        Finalize your Registration by
                        Securing Your Account With Email Verification.
                    </p>  
                </div>

                {/*Message content*/}
                <div className="bg-glass p-4 rounded-lg">
                {/* Main Content */}
                <div className="text-center p-2 rounded-lg text-white">
                    <h2 className='text-3xl text-gold font-semibold'>Verify Your Email</h2>
                    <p className='mt-3'>
                        We have sent a verification email to <strong className='text-white'>{userEmail}</strong>.
                    </p>
                    <p className='mt-3'>
                        If you don't see the email in your inbox, check your spam or junk folder.
                    </p>
                </div>

                {/* Action Section */}
                <div className="flex flex-col gap-3 items-center justify-center mt-8 w-full">
                    {/* Resend Verification Link */}
                    <div className="w-full text-center text-white">
                        <p className="mb-2 text-sm">
                            Still didn’t get any email? Click below to resend.
                        </p>
                        <button
                            className="w-full bg-gold text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition duration-200"
                        >
                            Resend Verification Link
                        </button>
                    </div>

                    {/* Change Email */}
                    <button
                        className="w-full bg-gold text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition duration-200"
                    >
                        Change Email
                    </button>

                    {/* Email Success Simulation */}
                    <Link
                        to={'/email-verification-result'}
                        className="w-full bg-gold text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition text-center duration-200"
                    >
                        Stimulate Email Success
                    </Link>
                </div>
                </div>
                {/* Footer */}
                <p className='pt-5 text-white text-center max-xs:text-xs w-[100%]'>
                    Need help? Contact our <span className='text-gold'>Support Team</span>.
                </p>
            </div>
        </main>
    );
};

export default VerifyEmail;
