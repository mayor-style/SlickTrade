import React, { useState } from 'react';
import TransactionForm from '../../components/UserDashboard/TransactionInitiationPage/TransactionForm';
import MatchingVendors from '../../components/UserDashboard/TransactionInitiationPage/MatchingVendors';
import VendorProfileModal from '../../components/UserDashboard/TransactionInitiationPage/VendorProfileModal';
import ConfirmationSummary from '../../components/UserDashboard/TransactionInitiationPage/ConfirmationSummary';
import picture from '../../assets/imgs/user4.jpg'
import DashboardWelcomeMessage from '../../components/DashboardWelcomeMessage'

const TransactionInitiationPage = () => {

    const [vendors, setVendors] = useState([]);
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [transactionDetails, setTransactionDetails] = useState(null);
  
    const findVendors = (formData) => {
      // Mock vendor fetching
      const mockVendors = [
        {
                 id: 1,
                 name: 'Kush',
                 profilePicture: {picture},
                 services: ['PayPal', 'Zelle'],
                 verified: 'true',
                 rating: 4.8,
                 transactionLimit: '$50 - $500',
               },
               {
                 id: 2,
                 name: 'WireFundz',
                 profilePicture: {picture},
                 services: ['PayPal', 'Zelle', 'CashApp', 'MoneyGram'],
                 verified: 'true',
                 rating: 4.5,
                 isBlocked:'true',
                 transactionLimit: '$50 - $1000',
               },
               {
                 id: 3,
                 name: 'Pablo',
                 isFavorite:'true',
                 profilePicture: {picture},
                 services: ['Venmo', 'Zelle'],
                 verified: 'true',
                 rating: 3,
                 transactionLimit: '$50 - $500',
               },
      ];
      setVendors(mockVendors);
    };
  
    const confirmVendor = () => {
      setTransactionDetails({
        service: 'PayPal',
        amount: 100,
        vendorName: selectedVendor.name,
      });
      setSelectedVendor(null);
    };

  return (
    <div className='relative'>
      
    {/* Welcome Message */}
    <DashboardWelcomeMessage Header={'Start Your'} subtext={'Tell us what you need, and we’ll connect you with trusted vendors to get it done securely' }  spanHeader={'Transaction' } />

    {/*Main cOntent */}

    <div className="p-4">
      <TransactionForm onFindVendors={findVendors} />
      <MatchingVendors vendors={vendors} onSelectVendor={setSelectedVendor} />
      <VendorProfileModal
        vendor={selectedVendor}
        onConfirm={confirmVendor}
        onClose={() => setSelectedVendor(null)}
      />
      {transactionDetails && (
        <ConfirmationSummary
          transactionDetails={transactionDetails}
          fees="$5"
        />
      )}
    </div>

    </div>
  )
}

export default TransactionInitiationPage
