import React, { useState } from 'react';
import StatsCard from '../../components/UserDashboard/DashboardPage/StatsCard';
import { MdDoneAll, MdPendingActions } from 'react-icons/md';
import { AiOutlineDollarCircle} from 'react-icons/ai';
import { BiErrorAlt} from 'react-icons/bi';
 import TransactionCharts from '../../components/UserDashboard/TransactionsPage/TransactionsChart';
import TransactionTable from '../../components/UserDashboard/TransactionsPage/TransactionTable';
import HighlightLastWord from '../../components/HighlightLastWord';
import DashboardWelcomeMessage from '../../components/DashboardWelcomeMessage';
import { mockData } from '../../components/TransactionMockData';
import TransactionDrawer from '../../components/TransactionDrawer';


const TransactionPage = () => {

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
  
  const statsDetails = [
    {
      icon: <MdDoneAll />,
      label: 'Total Transactions Completed',
      valueClass: true,
      value: 0,
    },
    {
      icon: <MdPendingActions />,
      label: 'Pending Transactions',
      valueClass: true,
      value: 0,
    },
    {
      icon: <AiOutlineDollarCircle />, // Appropriate for "Total Amount Earned"
      label: 'Total Amount Earned',
      valueClass: true,
      value: 0,
    },
    {
      icon: <BiErrorAlt />, // Appropriate for "Disputed Transactions"
      label: 'Disputed Transactions',
      valueClass: true,
      value: 0,
    },
  ];

  return (

    <div className="h-full relative w-full">
    <div>
      {/*WELCOME MESSAGE */}
      <DashboardWelcomeMessage
        subtext={'Keep track of your pending, completed, and disputed trades in one place.'}
        Header={'Manage Your'}
        spanHeader={"Transactions"}
      />
    </div>

    {/* Stats Cards */}
    <StatsCard statsDetails={statsDetails} />

    <hr className="text-dark-gray my-8" />

    {/* TRANSACTIONS CHARTS */}
    <TransactionCharts />

    <hr className="text-dark-gray my-8" />

    {/* TRANSACTIONS TABLE */}
    <TransactionTable
      rowsPerPage={10}
      transactions={mockData}
      tableTitle={<HighlightLastWord text={'Transaction History'} />}
      onRowClick={handleRowClick} // Pass the handler as a prop
    />

    {/* TRANSACTION DETAILS DRAWER */}
    {isDrawerOpen && (
      <TransactionDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        transaction={selectedTransaction} // Pass the selected transaction
      />
    )}
  </div>
  )
}

export default TransactionPage
