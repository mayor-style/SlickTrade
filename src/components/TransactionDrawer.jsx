import React from 'react';
import HighlightLastWord from '../components/HighlightLastWord'


const TransactionDrawer = ({ isOpen, onClose, transaction }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-glass backdrop-blur-sm z-50 flex items-end md:items-center justify-center">
      <div className="bg-gray text-white w-full md:w-[40%] h-[90%] rounded-t-2xl md:rounded-xl p-6 overflow-y-auto relative shadow-lg scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-gray">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b border-dark-gray pb-3 mb-4">
          <div>
           <HighlightLastWord  text={'Transaction Details'}/>
            <p className="text-gray-400 text-sm">Transaction ID: {transaction.id}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white border font-bold border-dark-gray hover:bg-gold hover:text-black rounded-full py-2 px-3"
          >
            ✕
          </button>
        </div>

        {/* Transaction Overview Section */}
        <div className="mb-6">
          <p className="sm:text-3xl xs:text-2xl text-xl font-bold text-gold">${transaction.amount}</p>
          <span
            className={`inline-block mt-2 text-sm font-medium px-3 py-1 rounded-full ${
              transaction.status === 'Completed'
                ? 'bg-green-500 text-white'
                : transaction.status === 'Pending'
                ? 'bg-yellow-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {transaction.status}
          </span>
          <p className="text-gray-300 mt-2 max-xs:text-sm"><span className='font-medium text-white'>Service:</span> {transaction.service}</p>
        </div>

        {/* User & Vendor Info Section */}
        <div className="mb-6 max-xs:text-sm">
          <h4 className="font-medium text-lg text-gold mb-2">User Info</h4>
          <p><span className='font-medium text-white'>Username:</span> {transaction.user.name}</p>
          <p><span className='font-medium text-white'>Email:</span> {transaction.user.email}</p>
          <h4 className="font-medium text-lg text-gold mt-4 mb-2">Vendor Info</h4>
          <p><span className='font-medium text-white'>Username:</span>  {transaction.vendor.name}</p>
          <p><span className='font-medium text-white'>Rating:</span> ⭐ {transaction.vendor.rating}/5</p>
          <button
            onClick={() => window.location.href = `/vendor/${transaction.vendor.id}`}
            className="mt-3 bg-gold text-black hover:bg-opacity-90 px-4 py-2 rounded-md text-sm"
          >
            View Vendor Profile
          </button>
        </div>

        {/* Key Transaction Details Section */}
        <div className="mb-6 max-xstext-sm">
          <h4 className="font-medium text-lg mb-3">Key Details</h4>
          <ul className="list-disc list-inside text-gray-300">
            <li><span className='font-semibold text-white'>Date:</span> {transaction.date}</li>
            <li><span className='font-semibold text-white'>Time:</span> {transaction.time}</li>
            <li><span className='font-semibold text-white'>Platform Fee:</span> ${transaction.platformFee}</li>
            <li><span className='font-semibold text-white'>Net Amount:</span> ${transaction.netAmount}</li>
          </ul>
        </div>

        {/* Notes Section */}
        <div className="mb-6 max-xs:text-sm">
          <h4 className="font-medium text-lg mb-2">Notes:</h4>
          <p className="text-gray-400">{transaction.notes}</p>
        </div>

        {/* Action Buttons Section */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="border border-dark-gray hover:bg-dark-gray px-4 py-2 rounded-md text-white text-sm"
          >
            Close
          </button>
          {transaction.canOpenDispute && (
            <button
              onClick={() => console.log('Open dispute action')}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white text-sm"
            >
              Open Dispute
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionDrawer;
