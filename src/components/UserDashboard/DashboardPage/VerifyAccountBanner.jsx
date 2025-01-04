import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const VerifyAccountBanner = () => {
  const progressPercentage = 70; // Example: current progress
  const [isShow, setIsShow] = useState(false);

  return (
    <div className=" text-white pb-4 rounded-lg shadow-lg w-full">
      {/* Responsive Collapsible Version */}
      <div className=" bg-gray border border-dashed border-gold p-4 rounded-lg mb-4">
        <div className="flex cursor-pointer justify-between mb-2 items-center" onClick={()=>setIsShow(!isShow)}>
        <h2 className="xs:text-lg text-white font-semibold">
          Unlock Higher Transaction Limits!
        </h2>
        <span className='text-lg transition-all ease-in-out duration-200 cursor-pointer' onClick={()=>setIsShow(!isShow)}>
            {isShow ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
        </div>
        <div className={`${isShow? '': 'hidden'} transition-all duration-300 ease-in-out`}>
        <p className="text-xs text-gray-700">
          Verify your account today to access higher transaction limits and unlock more features.
        </p>
        <div className="relative w-full bg-dark-gray h-3 rounded-full overflow-hidden my-2">
          <div
            className="absolute top-0 left-0 bg-gold h-full rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-xs text-right mb-2">{progressPercentage}% Complete</p>
        <button
          className="bg-gold text-black hover:bg-opacity-80  py-2 px-6 rounded-md  text-sm"
          onClick={() => alert('Redirecting to verification page...')}
        >
          Verify Now
        </button>
        </div>
      </div>
     
    </div>
  );
};

export default VerifyAccountBanner;
