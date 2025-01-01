import React from 'react'
import StatsCard from '../../components/UserDashboard/DashboardPage/StatsCard';
import { MdDoneAll, MdPendingActions } from 'react-icons/md';
import { AiOutlineDollarCircle} from 'react-icons/ai';
import { BiErrorAlt} from 'react-icons/bi';
 import TransactionCharts from '../../components/UserDashboard/TransactionsPage/TransactionsChart';
import TransactionTable from '../../components/UserDashboard/TransactionsPage/TransactionTable';


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
        <TransactionTable /> 

    
    
    </div>
  )
}

export default TransactionPage
