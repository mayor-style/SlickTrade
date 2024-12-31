import React from 'react'
import { FaQuoteRight } from "react-icons/fa";
import DP from '../../assets/imgs/user.jpg'
import useOnScreenAnimation from '../UseOnScreenAnimation';

const Testimonial = () => {
  useOnScreenAnimation("hidden-scale", "show-scale")

    const testimony= [
        {
          id: 1,
          name: 'Sarah A.',
          review: 'SlickTrade transformed how I handle international payments. The trust system and instant matching are unbeatable!',
          status: 'User'
        },
        {
          id: 2,
          name: 'Emeka O.',
          review: 'As a vendor, SlickTrade gave me a steady stream of transactions while ensuring security for all my deals!',
          status: 'Vendor'
        },
        {
          id: 3,
          name: 'Tariq St.',
          review: 'SlickTrade transformed how I handle international payments. The trust system and instant matching are unbeatable!',
          status: 'Vendor'
        },
    ];

  return (
    <section className='overflow-hidden py-[100px] px-[20px] bg-gray'>
       <div className="mb-10 text-white text-center  transition-all duration-700 hidden-sec">
          <h1 className="text-[gold] text-xl mb-2 tracking-wider font-bold">TESTIMONIAL</h1>
          <h2 className="sm:text-4xl text-3xl max-xs:text-2xl font-bold">Reviews and Comments</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-[50px] ">
          {testimony.map((testify) => (
            <div
              key={testify.id}
              className="relative hidden-scale max-w-[350px] h-auto rounded-lg border bg-black p-6 transition duration-500 hidden-sec text-white group  hover:border-black hover:bg-[gold] hover:shadow-xl hover:bg-opacity-70 hover:text-blac border-dashed border-[gold]"
            >
              <div className="flex items-center mb-2 gap-6">
                <img
                  src={DP}
                  alt="Profile"
                  className="h-12 w-12 object-cover rounded-full"
                />
                <div>
                  <h6 className="font-semibold tracking-wide">@{testify.name}</h6>
                  <p className=" text-xs tracking-wide transition duration-500 my-1 py-1 border bg-gray border-dark-gray text-white font-medium text-center rounded-full group-hover:font-semibold group-hover:border-black group-hover:bg-white group-hover:text-black">{testify.status}</p>
                </div>
              </div>
              <div className="absolute transition duration-500  top-[-25px] right-5 text-[gold] group-hover:text-white opacity-90 text-4xl">
                <FaQuoteRight />
              </div>
              <div className="text-sm  transition duration-500  leading-6 mb-4">
                <p className='group-hover:text-black group-hover:font-medium'>
                 {testify.review}
                </p>
              </div>
              
            </div>
          ))}
        </div>
    </section>
  )
}

export default Testimonial
