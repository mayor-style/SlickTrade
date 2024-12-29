import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
import StarRating from '../../components/StarRating'
import { GoArrowUpRight } from "react-icons/go";
import { MdDoneAll, MdPendingActions, MdVerified } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { FaMedal } from 'react-icons/fa';

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
        
        <div className="" id='user-stats'>
            {/*HEADER */}
        <div className=" mb-5 text-white items-center">
            
      <h1 className=' lg:text-4xl sm:text-3xl text-2xl  text-white font-semibold '>
        Welcome back, <span className='font-bold'>Slick!</span>
      </h1>
      <p className=' max-xs:text-xs max-lg:text-sm'>Manage your transactions and stay Updated effortlessly.</p>
      </div>
        

            {/* USER DETAILS */}
        <div className="flex flex-wrap border-dark-gray border items-center justify-between gap-4 bg-gray rounded-lg py-6 px-4 mb-10">
            <div className="flex items-center gap-2">
        <div className="text-white sm:text-5xl text-4xl border-gold rounded-full border-[2px]">
                <FaUserCircle />
            </div>
            <div className='max-sm:text-sm'>
                <p >Slick</p>
                <p className='font-medium text-white'>Slick123@gmail.com</p>
            </div>

            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="bg-glass border space-y-2 border-dark-gray text-white p-3 rounded-lg">
                    <span><MdVerified /></span>
                    <p className='xs:text-sm text-xs'>Verification Status</p>
                    <div className="flex items-center justify-between">
                    <h1 className='tracking-wide'>Unverified</h1>
                    <span className='cursor-pointer'><GoArrowUpRight /></span>
                    </div>
                </div>
                <div className="bg-glass border space-y-2 border-dark-gray text-white p-3 rounded-lg">
                    <span><FaMedal /></span>
                    <p className='xs:text-sm text-xs'>Badge Status</p>
                    <div className="flex items-center justify-between">
                    <h1 className='tracking-wide'>Beginner</h1>
                    <span className='
                    cursor-pointer'><GoArrowUpRight /> </span>
                    </div>
                </div>
            </div>
        </div>

        
            <div className="h-full">
            {/* STAT CARDS */}
        <div className="bg-gray h-full border border-dark-gray p-4 py-6 rounded-lg">
            <h2 className='text-white  mb-3 font-semibold max-lg:text-3xl max-sm:text-2xl max-xs:text-xl text-4xl'>Stats <span>Cards</span></h2>
        <div className=" grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">

            <div className="p-2 py-3 border border-dark-gray text-white space-y-2 bg-glass rounded-lg">
                <div className="sm:text-3xl text-2xl"><MdDoneAll /></div>
                <h2 className='max-sm:text-sm'>Total Transactions Completed</h2>
                <p className='sm:text-xl text-lg font-medium  text-gold'>0</p>
            </div>
            <div className="p-2 text-white border border-dark-gray bg-glass space-y-2 rounded-lg">
                <div className="sm:text-3xl text-2xl"><MdPendingActions /></div>
                <h2 className='max-sm:text-sm'>Pending Transactions</h2>
                <p className='sm:text-xl text-lg font-medium  text-gold'>0</p>
            </div>
            <div className="p-2 text-white bg-glass space-y-2 border border-dark-gray rounded-lg">
                <div className="sm:text-3xl text-2xl"><AiFillStar /></div>
                <h2 className='max-sm:text-sm'>User Rating</h2>
                <p className='text-gold flex items-center gap-2'>4.8/5 
                    <span><StarRating rating={4.8} /></span>
                </p>
            </div>
        </div>

        </div>

        <hr className='text-dark-gray my-5'/>
      
             {/* TRANSACTION HISTORIES */}
             <div className="bg-gray h-full text-white w-full border border-dark-gray px-4 py-6 rounded-lg">
      <h1 className="sm:text-2xl text-lg font-semibold mb-2">
        Transaction <span className="">History</span>
      </h1>
      <div className="w-fit my-2">
        <button className="bg-gold bg-opacity-70 text-sm text-white px-4 py-2 rounded-md hover:bg-opacity-80">
          View All
        </button>
      </div>
      <div className="w-full border p-4 rounded-lg border-dark-gray overflow-auto  scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-gray">
        <table className="table-auto  w-full text-left text-sm">
          <thead className="bg-gold bg-opacity-70">
            <tr className=''>
              <th className="px-4 py-2">Transaction ID</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Transaction Type</th>
              <th className="px-4 py-2">Vendor</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((transaction, index) => (
              <tr
                key={transaction.id}
                className={ ` border-b border-dark-gray hover:bg-gray`}
              >
                <td className="px-4 py-2">{transaction.id}</td>
                <td className="px-4 py-2">{transaction.date}</td>
                <td className="px-4 py-2">{transaction.time}</td>
                <td className="px-4 py-2">{transaction.type}</td>
                <td className="px-4 py-2">{transaction.vendor}</td>
                <td
                  className={`p-4 ${
                    transaction.status === "Completed"
                      ? "text-green-500"
                      : transaction.status === "Pending"
                      ? "text-yellow-500"
                      : transaction.status === "Cancelled"
                      ? "text-red-500"
                      : "text-purple-500"
                  }`}
                >
                  {transaction.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

        </div>

        {/* RIGHT SECTION */}
      <div className="min-h-screen h-full  border border-dark-gray rounded-lg bg-gray" id='initiate-transaction'>

      
      </div>
      </div> 
    </div>
  )
}

export default Dashboard
