import React, { useState, useEffect, useRef } from 'react';
import VendorCard from '../VendorsPage/VendorCard';
import Spinner from '../../Spinner'; // Assuming Spinner is in the correct path

const MatchingVendors = ({ vendors, onSelectVendor, startMatchingVendors }) => {
  const [isLoading, setIsLoading] = useState(null);
  const specificSectionRef = useRef(null);
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    if (scroll && specificSectionRef.current) {
      specificSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Align to the center of the viewport
      });
    }
  }, [scroll]); // Runs when the component is rendered

  // Simulate loading effect
  useEffect(() => {
       if(startMatchingVendors){
        setIsLoading(true)
        const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
      setScroll(true)
}, 2000)

    return () => clearTimeout(timer); // Cleanup timer on unmount
}
  }, [startMatchingVendors]);

  return (
    <div className="mt-6">
      {isLoading ? (
        // Show Spinner during loading
        <div className="text-white tracking-wide text-center sm:text-lg my-4 px-2 py-4 rounded-lg backdrop-blur-lg bg-glass font-medium">
          <Spinner message={'Matching you with trusted Vendors...'} />
        </div>
      ) : (
        // Show vendors or fallback messages after loading
        startMatchingVendors ? (
          vendors.length > 0 ? (
            <div ref={specificSectionRef}>
              <h3 className="text-white tracking-wide text-center text-sm xs:text-lg sm:text-xl my-4 px-2 py-4 rounded-lg backdrop-blur-lg bg-glass font-medium">
                Here are trusted vendors ready to assist you. Select one to proceed.
              </h3>
              <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4">
                {vendors.map((vendor) => (
                  <VendorCard key={vendor.id} vendor={vendor} onSelect={onSelectVendor} />
                ))}
              </div>
            </div>
          ) : (
            <p ref={specificSectionRef} className="text-white text-center">
              No vendors are available for your request at the moment. Try adjusting your details or check back later!
            </p>
          )
        ) : null
      )}
    </div>
  );
};

export default MatchingVendors;
