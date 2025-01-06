import React, { useEffect, useState } from 'react';
import PrimaryButton from '../../PrimaryButton';
import Spinner from '../../Spinner';
import useOnScreenAnimation from '../../UseOnScreenAnimation';

const ConfirmationSummary = ({ transactionDetails, currentRate, onClose }) => {
  if(!transactionDetails) return null;

  useOnScreenAnimation("hidden-sec", "show-sec")

  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    if(transactionDetails){
      setIsLoading(true)
    const timer=  setTimeout(()=>{
        setIsLoading(false)
      }, 1000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }

  },[transactionDetails])

  const generalDollarToNairaRate = currentRate; // General conversion rate
  const vendorRate = transactionDetails.Rate; // Vendor-specific rate per dollar
  const amount = transactionDetails.amount; // Transaction amount in dollars

  // Step 1: Amount in dollars and naira (before vendor rate)
  const amountInDollars = amount;
  const amountInNairaAtGeneralRate = amount * generalDollarToNairaRate;

  // Step 2: Amount in naira after vendor rate
  const amountInNairaAtVendorRate = amount * vendorRate;

  // Step 3: Platform fees (5%)
  const feesInDollars = amount * 0.05;
  const feesInNaira = feesInDollars * vendorRate;

  // Step 4: Final payout after all fees
  const finalPayoutInDollars = amountInDollars - feesInDollars;
  const finalPayoutInNaira = amountInNairaAtVendorRate - feesInNaira;

  return (
    <div className="fixed transition-all duration-300 ease-in-out inset-0 bg-glass backdrop-blur-sm z-50 px-4 text-white flex justify-center hidden-sec items-center">
      {
        isLoading? ( <div className='text-center '>
           <Spinner  lg={true}/>
        </div> ):

    (<div className="bg-gray text-white w-full md:w-[55%] h-[90%] rounded-t-2xl md:rounded-xl p-6 overflow-y-auto relative shadow-lg scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-gray">
     {/* Header Section */}
     <div className="flex justify-between items-center border-b border-dark-gray pb-3 mb-4">
      <h3 className="text-xl font-bold text-white">Confirmation Summary</h3>

      <button
            onClick={onClose}
            className="text-white border font-bold border-dark-gray hover:bg-gold hover:text-black rounded-full py-2 px-3"
          >
            ✕
          </button>
          </div>
          <h1 className=' my-4 font-bold text-lg'> You've selected Vendor {transactionDetails.vendorName}. Review the details below and confirm to start your transaction.</h1>
      <p className="text-sm text-gray-300">Service: <span className="font-light text-white">{transactionDetails.service}</span></p>
      <p className="text-sm text-gray-300">Amount: <span className="font-light text-white">${amount}</span></p>
      <p className="text-sm text-gray-300">Vendor: <span className="font-light text-white">{transactionDetails.vendorName}</span></p>
      <p className="text-sm text-gray-300">Vendor Rate: <span className="font-light text-white">₦{vendorRate.toLocaleString()} / dollar</span></p>
      <hr className="my-4 border-dark-gray" />
      
      <h3 className="text-lg font-bold text-white mb-2">Detailed Calculations</h3>

      {/* Step 1 */}
      <p className="text-sm text-gray-300 font-semibold">Step 1: Amount Before Vendor Rate</p>
      <p className="text-sm text-gray-300">
        In Dollars: <span className="font-light text-white">${amountInDollars.toFixed(2)}</span>
      </p>
      <p className="text-sm text-gray-300">
        In Naira (General Rate): <span className="font-light text-white">₦{amountInNairaAtGeneralRate.toLocaleString()}</span>
      </p>
      <hr className="my-3 border-dark-gray" />

      {/* Step 2 */}
      <p className="text-sm text-gray-300 font-semibold">Step 2: Amount After Vendor Rate</p>
      <p className="text-sm text-gray-300">
        In Naira (Vendor Rate): <span className="font-light text-white">₦{amountInNairaAtVendorRate.toLocaleString()}</span>
      </p>
      <hr className="my-3 border-dark-gray" />

      {/* Step 3 */}
      <p className="text-sm text-gray-300 font-semibold">Step 3: Platform Fees (5%)</p>
      <p className="text-sm text-gray-300">
        In Dollars: <span className="font-light text-white">${feesInDollars.toFixed(2)}</span>
      </p>
      <p className="text-sm text-gray-300">
        In Naira (Vendor Rate): <span className="font-light text-white">₦{feesInNaira.toLocaleString()}</span>
      </p>
      <hr className="my-3 border-dark-gray" />

      {/* Step 4 */}
      <p className="text-sm text-gray-300 font-semibold">Step 4: Final Payout After All Fees</p>
      <p className="text-sm text-gray-300">
        In Dollars: <span className="font-light text-white">${finalPayoutInDollars.toFixed(2)}</span>
      </p>
      <p className="text-sm text-gray-300">
        In Naira: <span className="font-light text-white">₦{finalPayoutInNaira.toLocaleString()}</span>
      </p>

      <div className="mt-6">
        <PrimaryButton text={'Confirm Transaction'} />
      </div>
    </div>
    
    )
  }
    </div>
    
  );
};

export default ConfirmationSummary;
