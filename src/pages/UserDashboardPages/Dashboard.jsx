import React, { useState } from 'react';
import ProfileCard from '../../components/UserDashboard/DashboardPage/ProfileCard';
import StatsCard from '../../components/UserDashboard/DashboardPage/StatsCard';
import Notifications from '../../components/UserDashboard/DashboardPage/Notifications';
import PendingTasks from '../../components/UserDashboard/DashboardPage/PendingTasks';
import VerifyAccountBanner from '../../components/UserDashboard/DashboardPage/VerifyAccountBanner';
import ChartWidget from '../../components/UserDashboard/DashboardPage/ChartWidget';
import TransactionsTable from '../../components/UserDashboard/TransactionsPage/TransactionTable';
import HighlightLastWord from '../../components/HighlightLastWord';
import DashboardWelcomeMessage from '../../components/DashboardWelcomeMessage';
import TransactionDrawer from '../../components/TransactionDrawer';
import ComboboxDemo from '../../components/ComboboxDemo';

const Dashboard = () => {

  const mockData = [
    {
      id: 'TRX001',
      amount: 500,
      status: 'Completed',
      service: 'PayPal Pickup',
      user: {
        name: 'Jane Doe',
        email: 'janedoe@gmail.com',
      },
      vendor: {
        id: 'vendor1',
        name: 'Vendor1',
        rating: 4.5,
      },
      date: 'December 27, 2024',
      time: '10:00 AM',
      platformFee: 25,
      netAmount: 475,
      notes: 'Transaction completed via PayPal Pickup.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX002',
      amount: 300,
      status: 'Pending',
      service: 'Zelle Pickup',
      user: {
        name: 'John Smith',
        email: 'johnsmith@gmail.com',
      },
      vendor: {
        id: 'vendor2',
        name: 'Vendor2',
        rating: 4.7,
      },
      date: 'December 26, 2024',
      time: '11:30 AM',
      platformFee: 15,
      netAmount: 285,
      notes: 'Transaction is still in progress via Zelle Pickup.',
      canOpenDispute: true, // Ongoing transaction
    },
    {
      id: 'TRX003',
      amount: 90,
      status: 'Cancelled',
      service: 'Zelle',
      user: {
        name: 'Alice Johnson',
        email: 'alicejohnson@gmail.com',
      },
      vendor: {
        id: 'vendor789',
        name: 'Vendor789',
        rating: 4.2,
      },
      date: 'December 25, 2024',
      time: '02:00 PM',
      platformFee: 5,
      netAmount: 85,
      notes: 'Transaction was cancelled by the user.',
      canOpenDispute: false, // Cancelled transaction
    },
    {
      id: 'TRX004',
      amount: 980,
      status: 'Disputed',
      service: 'GiftCard Redeem',
      user: {
        name: 'Michael Brown',
        email: 'michaelbrown@gmail.com',
      },
      vendor: {
        id: 'vendor101',
        name: 'Vendor101',
        rating: 4.8,
      },
      date: 'December 24, 2024',
      time: '04:15 PM',
      platformFee: 50,
      netAmount: 930,
      notes: 'Transaction is under dispute for incorrect amount transfer.',
      canOpenDispute: true, // Already disputed
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
      ];

      const [selectedTransaction, setSelectedTransaction] = useState(null); // State to hold the selected transaction
        const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer visibility
      
        const handleRowClick = (transaction) => {
          setSelectedTransaction(transaction); // Set the transaction to display
          setIsDrawerOpen(true); // Open the drawer
        };
      
        const closeDrawer = () => {
          setSelectedTransaction(null); // Clear the selected transaction
          setIsDrawerOpen(false); // Close the drawer
        };

  return (
    <div className=' min-h-screen relative rounded-lg '>
        
        <div>
            {/*WELCOME MESSAGE */}
        <DashboardWelcomeMessage Header={'Welcome back,'}
          spanHeader={'Slick!'} subtext={'Manage your transactions and stay Updated effortlessly.'}
        />
      {/* verify Account Banner */}
      <VerifyAccountBanner />

        {/* FIRST ROW */}

        {/* Pofile Card Section*/}
         <ProfileCard />
  
        {/* Stats Cards Section*/}
        <StatsCard />

        <hr className='text-dark-gray my-8'/>

        {/* SECOND ROW */}

        {/*Recent Notification And Pending Task Section*/}
        <div className="flex max-md:flex-wrap gap-4 ">
          <Notifications />
          <PendingTasks />
        </div>
     
        <hr className='text-dark-gray my-8'/>
      
        {/* THIRD ROW */}
          {/*Chart Widget */}
          <ChartWidget />
          {/* Transaction Histories */}
           <TransactionsTable rowsPerPage={10} viewAll={true} transactions={mockData} tableTitle={<HighlightLastWord text={'Recent Transactions'} />}
           onRowClick={handleRowClick}
           />

            {/* TRANSACTION DETAILS DRAWER */}
        {isDrawerOpen && (
          <TransactionDrawer
            isOpen={isDrawerOpen}
            onClose={closeDrawer}
            transaction={selectedTransaction} // Pass the selected transaction
          />
    )}

  );

        

      
      </div> 
    </div>
  )
}

export default Dashboard
