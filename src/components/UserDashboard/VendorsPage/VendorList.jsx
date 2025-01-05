import React from 'react';
import VendorCard from './VendorCard';
import HighlightLastWord from '../../HighlightLastWord';

const VendorList = ({ vendors, selectedVendor }) => {
  return (
    <div className="">
      {vendors && vendors.length > 0 ? (
        // Render vendor cards in a grid layout
        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-y-8 gap-4">
          {vendors.map((vendor) => (
            <VendorCard key={vendor.id} onSelect={selectedVendor} vendor={vendor} />
          ))}
        </div>
      ) : (
        // Render a "No Result Found" message
        <h1 className="text-center py-4 text-lg font-semibold">
          <HighlightLastWord text="No Result Found..." />
        </h1>
      )}
    </div>
  );
};

export default VendorList;
