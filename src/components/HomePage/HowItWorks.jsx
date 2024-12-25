import React from 'react'
import how_work from '../../assets/imgs/about.jpg'

const HowItWorks = () => {

  const user = [
    {index:1, title: 'SignUp and Get Verified', text: 'Create your account, and verify your identity for a secure experience'},

    {index:2, title: 'Choose Your Transaction', text: 'Specify your needs, select payment methods, and initiate a transaction'},

    {index:3, title: 'Get Matched With Trusted Vendors', text: 'Our smart algorithm connects you with the best vendors in real time'},

    {index:4, title: 'Complete The Deal Safely', text: 'Your transactions are safeguarded with our escrow system. Ensuring risk-free transactions.'},

    {index:5, title: 'Finalize And Rate Your Experience', text: 'Recieve your funds seamlessly to your preffered account or wallet, rate the vendor, and grow the SlickTrade community.'},
  ]

  const vendor = [
    {index:1, title: 'Create and Verify Your Vendor Account', text: 'Link your payment methods and set up your business profile'},

    {index:2, title: 'Fund Your Collateral', text: 'Maintain an active balance to participate in transactions securely.'},

    {index:3, title: 'Accept Offers and Get Paid', text: 'Respond to transaction requests, confirm payments and earn while providing value.'},

    {index:4, title: 'Build your reputation', text: 'Gain ratings, attract more deals, and climb the ranks of trusted vendors.'},

    {index:5, title: 'Enjoy Your Rewards', text: 'Withdraw your earnings seamlessly and keep growing.'},
  ]

  return (
    <section className='bg-black min-h-screen py-[100px] px-[20px] overflow-hidden'>
      <h1 className='text-center text-white sm:text-4xl text-3xl max-xs:text-2xl font-bold'>How <span>Slick</span>Trade Works In 5 Simple <span>Steps</span></h1>
      <div className="py-2 flex items-center gap-5 mt-5 px-3 shadow-md shadow-gray bg-gray border border-[rgb(94,94,94)] rounded-full m-auto w-fit ">
      <p className='bg-[gold] text-sm font-medium text-black px-3 py-1 max-xs:text-xs rounded-full cursor-pointer'>For Users</p>
      <p className='cursor-pointer max-xs:text-xs text-sm'>For Vendors</p>
      </div>

      <div className="flex max-lg:flex-col gap-5 items-center justify-center">
      <div className="flex flex-col mt-10 gap-6 text-white max-lg:w-full">
        {
          user.map((x)=>{
            return <div key={x.index} className="border-b-2 flex gap-5 items-center just border-gray pb-2">       
              <h1 className=' l:text-3xl max-xs:text-xl text-2xl'>{x.index}</h1>
            <div className="">
            <h1 className='l:text-2xl max-xs:text-lg text-xl font-semibold mb-2'> {x.title}</h1>    
            <p className='max-l:text-sm max-xs:text-xs tracking-wide'>{x.text}</p>
            </div>
          </div>
          })
        }
      </div>

      <div className="sm:h-[500px] h-[300px] m-auto">
        <img src={how_work} className='sm:max-w-[500px] max-w-[400px] max-xs:max-w-[300px] h-full object-cover rounded-t-full border border-[gold] shadow-xl shadow-gray border-dashed rounded-b-xl' alt="How it works image" />
      </div>
      </div>
    </section>
  )
}

export default HowItWorks
