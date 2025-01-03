import React, { useState, useEffect } from 'react';
import TabsNavigation from '../../components/UserDashboard/VendorsPage/TabsNavigation';
import SearchAndFilters from '../../components/UserDashboard/VendorsPage/SearchAndFilters';
import VendorList from '../../components/UserDashboard/VendorsPage/VendorList';
import DashboardWelcomeMessage from '../../components/DashboardWelcomeMessage';
import picture from '../../assets/imgs/user2.jpg';
import VendorProfileModal from '../../components/UserDashboard/TransactionInitiationPage/VendorProfileModal';
import Spinner from '../../components/Spinner';

const VendorsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [filter, setFilter] = useState('');
  const [selectedVendor, setSelectedVendor] = useState(null);

  // Debounce Logic: Update `debouncedSearchTerm` after 1 second of inactivity
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setIsSearching(false); // Stop spinner
    }, 1000); // 1-second delay

    return () => clearTimeout(handler); // Cleanup on unmount or input change
  }, [searchTerm]);

  const tabs = [
    { label: 'All Vendors (10)', key: 'all' },
    { label: 'Favorites (4)', key: 'favorites' },
    { label: 'Blocked Vendors (2)', key: 'blocked' },
  ];

  
  const vendors = [
    // Mock vendor data
    {
      id: 1,
      name: 'Kush',
      profilePicture: {picture},
      services: ['PayPal', 'Zelle'],
      verified: true,
      rating: 4.8,
      transactionLimit: '$50 - $500',
      rates: {
       paypal:1200,
       Zelle:1400,
      },
    },
    {
      id: 2,
      name: 'WireFundz',
      profilePicture: {picture},
      services: ['PayPal', 'Zelle', 'CashApp', 'MoneyGram'],
      verified: true,
      rating: 4.5,
      isBlocked:true,
      transactionLimit: '$50 - $1000',
      rates: {
        paypal:1200,
        Zelle:1400,
       },
    },
    {
      id: 3,
      name: 'Pablo',
      isFavorite:true,
      profilePicture: {picture},
      services: ['Venmo', 'Zelle'],
      verified: true,
      rating: 3,
      transactionLimit: '$50 - $500',
      rates: {
        paypal:1200,
        Zelle:1400,
       },
    },
    {
      id: 4,
      name: 'Idan',
      profilePicture: {picture},
      services: ['PayPal', 'CashApp'],
      verified: true,
      rating: 4.9,
      transactionLimit: '$50 - $800',
      rates: {
        paypal:1200,
        Zelle:1400,
       },
    },
    {
      id: 5,
      name: 'Jay-z',
      profilePicture: {picture},
      services: ['PayPal', 'Zelle', 'Uk Banks'],
      verified: false,
      rating: 2.8,
      transactionLimit: '$50 - $300',
      rates: {
        paypal:1200,
        Zelle:1400,
       },
    },
    {
      id: 6,
      name: 'PaypalQueen',
      profilePicture: {picture},
      services: ['PayPal'],
      verified: true,
      rating: 4,
      isFavorite:true,
      transactionLimit: '$50 - $2000',
      rates: {
        paypal:1200,
        Zelle:1400,
       },
    },
    {
      id: 7,
      name: 'SlickWire',
      profilePicture: {picture},
      services: ['PayPal', 'Western Union'],
      verified: true,
      rating: 4,
      isBlocked:true,
      transactionLimit: '$50 - $1500',
      rates: {
        paypal:1000,
        Zelle:1240,
       },
    },
    {
      id: 8,
      name: 'CashApp King',
      profilePicture: {picture},
      services: ['CashApp'],
      verified: true,
      rating: 5,
      isFavorite:true,
      transactionLimit: '$50 - $5000',
      rates: {
        paypal:1200,
        Zelle:1400,
       },
    },
    {
        id: 9,
        name: 'Ijoba',
        profilePicture: {picture},
        services: ['PayPal', 'Zelle'],
        verified: true,
        rating: 1,
        isFavorite:true,
        transactionLimit: '$50 - $200',
        rates: {
          paypal:1200,
          Zelle:1400,
         },
      },
    {
        id: 10,
        name: 'Gustavo',
        profilePicture: {picture},
        services: ['PayPal', 'Venmo'],
        verified: true,
        rating: 5,
        transactionLimit: '$50 - $500',
        rates: {
          paypal:1200,
          Zelle:1400,
         },
      },
    // Add more vendors as needed
  ];

  const handleTabChange = (index) => setActiveTab(index);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setIsSearching(true); // Show spinner when typing
  };

  const handleFilter = (e) => setFilter(e.target.value);

  // Filter vendors based on activeTab, debouncedSearchTerm, and filter
  const filteredVendors = vendors.filter((vendor) => {
    if (activeTab === 1 && !vendor.isFavorite) return false;
    if (activeTab === 2 && !vendor.isBlocked) return false;
    return (
      vendor.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) &&
      (!filter || vendor.services.includes(filter))
    );
  });

  return (
    <div className="h-full w-full relative">
      {/* Welcome Message */}
      <DashboardWelcomeMessage
        Header={'Find Your Trusted'}
        spanHeader={'Vendors'}
        subtext={
          'Browse, favorite, or block vendors. Connect seamlessly for smooth transactions.'
        }
      />

      <div className="bg-gray p-4 py-10 rounded-lg">
        <TabsNavigation activeTab={activeTab} onTabChange={handleTabChange} tabs={tabs} />
        <SearchAndFilters searchTerm={searchTerm} onSearch={handleSearch} onFilter={handleFilter} />

        {/* Show Spinner When Searching */}
        {isSearching && <div className="text-center m-auto  my-4">
          <Spinner message={'Loading...'} />
          </div>}

        <VendorList vendors={filteredVendors} selectedVendor={setSelectedVendor} />

        <VendorProfileModal
          vendor={selectedVendor}
          onClose={() => setSelectedVendor(null)}
        />
      </div>
    </div>
  );
};

export default VendorsPage;
