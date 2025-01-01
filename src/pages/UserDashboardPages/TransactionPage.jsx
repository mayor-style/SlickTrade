import React from 'react'
import StatsCard from '../../components/UserDashboard/DashboardPage/StatsCard';
import { MdDoneAll, MdPendingActions } from 'react-icons/md';
import { AiOutlineDollarCircle} from 'react-icons/ai';
import { BiErrorAlt} from 'react-icons/bi';
 import TransactionCharts from '../../components/UserDashboard/TransactionsPage/TransactionsChart';
import TransactionTable from '../../components/UserDashboard/TransactionsPage/TransactionTable';
import HighlightLastWord from '../../components/HighlightLastWord';


const TransactionPage = () => {
  
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

  const mockData = [
    { id: "TRX001", date: "2024-12-27", amount: "$500", type: "PayPal Pickup", vendor: "Vendor1", status: "Completed" },
    { id: "TRX002", date: "2024-12-26", amount: "$300", type: "Zelle Pickup", vendor: "Vendor2", status: "Pending" },
    { id: "TRX001", date: "2024-12-27", amount: "$500", type: "PayPal Pickup", vendor: "Vendor1", status: "Completed" },
    { id: "TRX002", date: "2024-12-26", amount: "$300", type: "Zelle Pickup", vendor: "Vendor2", status: "Pending" },
    { id: "TRX001", date: "2024-12-27", amount: "$500", type: "PayPal Pickup", vendor: "Vendor1", status: "Completed" },
    { id: "TRX002", date: "2024-12-26", amount: "$300", type: "Zelle Pickup", vendor: "Vendor2", status: "Pending" },
    {
      id: "TRX123456",
      date: "2024-12-27",
      amount: "$500",
      type: "PayPal ",
      vendor: "Vendor123",
      status: "Completed",
    },
    {
      id: "TRX123457",
      date: "2024-12-26",
      amount: "$230",
      type: "CashApp ",
      vendor: "Vendor456",
      status: "Pending",
    },
    {
      id: "TRX123458",
      date: "2024-12-25",
      amount: "$90",
      type: "Zelle ",
      vendor: "Vendor789",
      status: "Cancelled",
    },
    {
      id: "TRX123459",
      date: "2024-12-24",
      amount: "$980",
      type: "GiftCard Redeem",
      vendor: "Vendor101",
      status: "Disputed",
    },
    {
      id: "TRX123460",
      date: "2024-12-23",
      amount: "$794",
      type: "Purchase of Log",
      vendor: "Vendor202",
      status: "Completed",
    },
    {
      id: "TRX123461",
      date: "2024-12-22",
      amount: "$120",
      type: "PayPal ",
      vendor: "Vendor303",
      status: "Completed",
    },
    {
      id: "TRX123462",
      date: "2024-12-21",
      amount: "$600",
      type: "CashApp ",
      vendor: "Vendor404",
      status: "Pending",
    },
    {
      id: "TRX123463",
      date: "2024-12-20",
      amount: "$320",
      type: "GiftCard Redeem",
      vendor: "Vendor505",
      status: "Cancelled",
    },
    {
      id: "TRX123464",
      date: "2024-12-19",
      amount: "$500",
      type: "Zelle ",
      vendor: "Vendor606",
      status: "Disputed",
    },
    {
      id: "TRX123465",
      date: "2024-12-18",
      amount: "$125",
      type: "Purchase of Log",
      vendor: "Vendor707",
      status: "Completed",
    },
    // Add more mock data here (total of 17 rows)
  ];
  
  return (

    <div className='h-full w-full'>

         <div>
            {/*WELCOME MESSAGE */}
         <div className=" mb-5 text-white items-center">           
        <h1 className=' lg:text-4xl sm:text-3xl text-2xl  text-white font-semibold '>
         Manage Your<span className='font-bold'> Transactions</span>
        </h1>
        <p className=' max-xs:text-xs max-lg:text-sm'>Keep track of your pending , completed, and dispited trades in one place.</p>
          </div>
        </div>
        {/* FIRST ROW */}
        
        {/* Stats Cards */}
        <StatsCard statsDetails={statsDetails} />

        <hr className='text-dark-gray my-8'/>

        {/* TRANSACTIONS CHARTS */}
         <TransactionCharts /> 

        <hr className='text-dark-gray my-8'/>

        {/* TRNSCATIONS TABLE */}
        <TransactionTable rowsPerPage={10} transactions={mockData} tableTitle={<HighlightLastWord text={'Transaction History'} />} /> 

    
    
    </div>
  )
}

export default TransactionPage
