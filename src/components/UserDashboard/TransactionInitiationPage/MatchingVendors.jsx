import React from 'react';
import VendorCard from '../VendorsPage/VendorCard';

const MatchingVendors = ({ vendors, onSelectVendor }) => {
    console.log(onSelectVendor)
  return (
    <div className="mt-6">
      {vendors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} onSelect={onSelectVendor} />
          ))}
        </div>
      ) : (
        <p className="text-white">No vendors are available for your request at the moment. Try adjusting your details or check back later!</p>
      )}
    </div>
  );
};

export default MatchingVendors;
