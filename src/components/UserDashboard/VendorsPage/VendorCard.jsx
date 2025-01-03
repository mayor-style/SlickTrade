import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import picture from '../../../assets/imgs/user.jpg'

const VendorCard = ({ vendor, onSelect }) => {
  return (
    <div className="p-4 py-6 border border-dark-gray backdrop-blur-md bg-glass h-full w-full rounded-lg text-white space-y-4">
      <div className="flex items-center space-x-3">
        <img
          src={picture}
          alt={`${vendor.name} profile`}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{vendor.name}</h3>
        
        </div>
      </div>
      <div className="text-sm space-y-2">
        <p>
          <span className="font-medium text-white">Verified:</span> {vendor.verified ? 'Yes' : 'No'}
        </p>
        <p className='flex items-center gap-2'>
          <span className="font-medium text-white">Rating:</span>{' '}
          <span className="text-gold flex items-center">
            {vendor.rating} <AiFillStar className="ml-1" />
          </span>
        </p>
        <p>
          <span className="font-medium text-white">Transaction Limit:</span> {vendor.transactionLimit}
        </p>
        <p className="">
        <span className="font-medium text-white">Services: </span> 
          {vendor.services.join(', ')}</p>
      </div>

      <div className="flex items-center text-sm space-x-2">
        <button className="px-4 py-2 bg-gold rounded-lg hover:bg-opacity-80 text-black"   onClick={() => onSelect(vendor)}>
          View Profile
        </button>
       {vendor.isBlocked ?
        <button className="px-4 py-2 bg-gray text-gold border border-dark-gray rounded-lg hover:bg-dark-gray">
        Unblock
      </button>
       :  
       <button className="px-4 py-2 bg-gray text-gold border border-dark-gray rounded-lg hover:bg-dark-gray">
       Start Transaction
     </button>
       }
      </div>
    </div>
  );
};

export default VendorCard;
