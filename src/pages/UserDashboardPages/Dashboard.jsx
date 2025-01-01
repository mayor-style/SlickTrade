import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
import StarRating from '../../components/StarRating'
import { GoArrowUpRight } from "react-icons/go";
import { MdDoneAll, MdPendingActions, MdVerified } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { FaMedal } from 'react-icons/fa';
import Button from '../../components/Button';
import ProfileCard from '../../components/UserDashboard/DashboardPage/ProfileCard';
import StatsCard from '../../components/UserDashboard/DashboardPage/StatsCard';
import Notifications from '../../components/UserDashboard/DashboardPage/Notifications';
import PendingTasks from '../../components/UserDashboard/DashboardPage/PendingTasks';
import VerifyAccountBanner from '../../components/UserDashboard/DashboardPage/VerifyAccountBanner';
import ChartWidget from '../../components/UserDashboard/DashboardPage/ChartWidget';
import TransactionsTable from '../../components/UserDashboard/TransactionsPage/TransactionTable';
import HighlightLastWord from '../../components/HighlightLastWord';

const Dashboard = () => {

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
      ];

  return (
    <div className=' min-h-screen relative rounded-lg '>
        
        <div>
            {/*WELCOME MESSAGE */}
         <div className=" mb-5 text-white items-center">           
        <h1 className=' lg:text-4xl sm:text-3xl text-2xl  text-white font-semibold '>
          Welcome back, <span className='font-bold'>Slick!</span>
        </h1>
        <p className=' max-xs:text-xs max-lg:text-sm'>Manage your transactions and stay Updated effortlessly.</p>
          </div>
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
           <TransactionsTable rowsPerPage={10} viewAll={true} transactions={mockData} tableTitle={<HighlightLastWord text={'Recent Transactions'} />}/>

           
  );

        

      
      </div> 
    </div>
  )
}

export default Dashboard
