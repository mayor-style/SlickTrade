import React from 'react';

const VendorProfileModal = ({ vendor, onConfirm, onClose }) => {
  if (!vendor) return null;
  console.log(vendor)
  
  return (
    <div className="fixed transition-all duration-300 ease-in-out inset-0 bg-glass backdrop-blur-sm z-50 px-6 text-white flex justify-center items-center">
      <div className="bg-gray border-dark-gray border py-8 px-4 rounded-lg sm:max-w-lg w-full">
        <h2 className="text-lg font-semibold">{vendor.name}</h2>
        <p>Rating: {vendor.rating}</p>
        <p>Trust Score: trust score % here</p>
        <p>Recent Transactions: Transaction history here</p>
        <p><span>Rates: </span> {vendor.rates.paypal}</p>
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="btn-secondary border-dark-gray p-2 border hover:bg-gold">Cancel</button>
          <button onClick={onConfirm} className="btn-primary border-dark-gray p-2 border hover:bg-green-400">Confirm Selection</button>
        </div>
      </div>
    </div>
  );
};

export default VendorProfileModal;
