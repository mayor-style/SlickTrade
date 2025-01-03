import React from 'react';
import PrimaryButton from '../../PrimaryButton';

const ConfirmationSummary = ({ transactionDetails, fees }) => {
  return (
    <div className="bg-glass backdrop-blur-lg p-4 rounded-lg text-white mt-6">
      <h3 className="text-lg font-semibold text-white">Confirmation Summary</h3>
      <p className="text-white">Service: {transactionDetails.service}</p>
      <p className="text-white">Amount: {transactionDetails.amount}</p>
      <p className="text-white">Vendor: {transactionDetails.vendorName}</p>
      <p className="text-white">Fees: {fees}</p>
      <div className="mt-4">
        <PrimaryButton text={'Confirm Transaction'}/>
     </div>
    </div>
  );
};

export default ConfirmationSummary;
