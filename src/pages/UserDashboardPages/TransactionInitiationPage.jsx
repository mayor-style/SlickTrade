import React, { useEffect, useState, useRef } from 'react';
import TransactionForm from '../../components/UserDashboard/TransactionInitiationPage/TransactionForm';
import MatchingVendors from '../../components/UserDashboard/TransactionInitiationPage/MatchingVendors';
import VendorProfileModal from '../../components/UserDashboard/TransactionInitiationPage/VendorProfileModal';
import ConfirmationSummary from '../../components/UserDashboard/TransactionInitiationPage/ConfirmationSummary';
import picture from '../../assets/imgs/user4.jpg';
import DashboardWelcomeMessage from '../../components/DashboardWelcomeMessage';

const TransactionInitiationPage = () => {
  const currentNairaRate = 1548.20;

  const [vendors, setVendors] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [transactionDetails, setTransactionDetails] = useState(null);
  const [startMatchingVendors, setStartMatchingVendors] = useState(false);

  const resultsSectionRef = useRef(null); // Reference for scrolling

  const findVendors = (formData) => {
    // Mock vendor fetching
    const mockVendors = [
      {
        id: 1,
        name: 'Kush',
        profilePicture: { picture },
        services: ['PayPal', 'Zelle'],
        verified: 'true',
        rating: 4.8,
        transactionLimit: '$50 - $500',
        rates: {
          paypal: 1200,
          Zelle: 1400,
        },
      },
      {
        id: 2,
        name: 'WireFundz',
        profilePicture: { picture },
        services: ['PayPal', 'Zelle', 'CashApp', 'MoneyGram'],
        verified: 'true',
        rating: 4.5,
        isBlocked: 'true',
        transactionLimit: '$50 - $1000',
        rates: {
          paypal: 1400,
          Zelle: 1300,
          CashApp: 800,
          MoneyGram: 1350,
        },
      },
      {
        id: 3,
        name: 'Pablo',
        isFavorite: 'true',
        profilePicture: { picture },
        services: ['Venmo', 'Zelle'],
        verified: 'true',
        rating: 3,
        transactionLimit: '$50 - $500',
        rates: {
          Venmo: 920,
          Zelle: 1300,
        },
      },
    ];

    setVendors(mockVendors);
    setStartMatchingVendors(true);
  };

  // Scroll to the results section when matching vendors are ready
  useEffect(() => {
    if (startMatchingVendors && resultsSectionRef.current) {
      resultsSectionRef.current.scrollIntoView({ behavior: 'smooth',
        block:'end', // ensures it scroll to the center of the viewport
       });
    }
  }, [startMatchingVendors]);

  const confirmVendor = () => {
    setTransactionDetails({
      service: 'PayPal',
      amount: 100,
      vendorName: selectedVendor.name,
      Rate: selectedVendor.rates.paypal,
    });
    setSelectedVendor(null);
  };

  return (
    <div className="relative">
      {/* Welcome Message */}
      <DashboardWelcomeMessage
        Header={'Start Your'}
        subtext={'Tell us what you need, and we’ll connect you with trusted vendors to get it done securely'}
        spanHeader={'Transaction'}
      />

      {/* Main Content */}
      <div className="py-4">
        <TransactionForm onFindVendors={findVendors} currentRate={currentNairaRate} />

        <div ref={resultsSectionRef}>
          <MatchingVendors vendors={vendors} onSelectVendor={setSelectedVendor} startMatchingVendors={startMatchingVendors} />
        </div>

        <VendorProfileModal
          vendor={selectedVendor}
          onConfirm={confirmVendor}
          onClose={() => setSelectedVendor(null)}
        />

        {transactionDetails && (
          <ConfirmationSummary
            transactionDetails={transactionDetails}
            currentRate={currentNairaRate}
            onClose={() => setTransactionDetails(null)}
          />
        )}
      </div>
    </div>
  );
};

export default TransactionInitiationPage;
