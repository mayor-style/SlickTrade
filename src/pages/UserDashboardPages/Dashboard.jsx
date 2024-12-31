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
import TransactionHistory from '../../components/UserDashboard/DashboardPage/TransactionHistory';
import Notifications from '../../components/UserDashboard/DashboardPage/Notifications';
import PendingTasks from '../../components/UserDashboard/DashboardPage/PendingTasks';
import VerifyAccountBanner from '../../components/UserDashboard/DashboardPage/VerifyAccountBanner';
import ChartWidget from '../../components/UserDashboard/DashboardPage/ChartWidget';

const Dashboard = () => {

    const mockData = [
        {
          id: "TRX123456",
          date: "2024-12-27",
          time: "10:45 AM",
          type: "PayPal Pickup",
          vendor: "Vendor123",
          status: "Completed",
        },
        {
          id: "TRX123457",
          date: "2024-12-26",
          time: "08:30 PM",
          type: "CashApp",
          vendor: "Vendor456",
          status: "Pending",
        },
        {
          id: "TRX123458",
          date: "2024-12-25",
          time: "02:15 PM",
          type: "Zelle",
          vendor: "Vendor789",
          status: "Cancelled",
        },
        {
          id: "TRX123459",
          date: "2024-12-24",
          time: "11:00 AM",
          type: "GiftCard Redeem",
          vendor: "Vendor101",
          status: "Disputed",
        },
        {
          id: "TRX123460",
          date: "2024-12-23",
          time: "05:45 PM",
          type: "Purchase of Log",
          vendor: "Vendor202",
          status: "Completed",
        },
        {
          id: "TRX123461",
          date: "2024-12-22",
          time: "01:30 PM",
          type: "PayPal Pickup",
          vendor: "Vendor303",
          status: "Completed",
        },
        {
          id: "TRX123462",
          date: "2024-12-21",
          time: "09:00 AM",
          type: "CashApp",
          vendor: "Vendor404",
          status: "Pending",
        },
        {
          id: "TRX123463",
          date: "2024-12-20",
          time: "07:15 PM",
          type: "GiftCard Redeem",
          vendor: "Vendor505",
          status: "Cancelled",
        },
        {
          id: "TRX123464",
          date: "2024-12-19",
          time: "06:20 AM",
          type: "Zelle",
          vendor: "Vendor606",
          status: "Disputed",
        },
        {
          id: "TRX123465",
          date: "2024-12-18",
          time: "03:45 PM",
          type: "Purchase of Log",
          vendor: "Vendor707",
          status: "Completed",
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
           <TransactionHistory />

           
  );

        

      
      </div> 
    </div>
  )
}

export default Dashboard
