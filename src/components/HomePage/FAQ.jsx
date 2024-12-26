import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import useOnScreenAnimation from '../UseOnScreenAnimation';

const FAQ = () => {
  useOnScreenAnimation("hidden-sec", "show-sec")

    const FaqInfo = [

        { question:"What makes SlickTrade different? ", answer:'SlickTrade integrates advanced escrow systems, a smart vendor-matching algorithm, and complete transparency to make international trading risk-free and effortless.' },

        { question:'How does the platform ensure vendor trustworthiness?', answer:'Vendors undergo strict verification processes and maintain collateral, which is used as security for user transactions.' },

        { question:'Is my information safe with SlickTrade?', answer:'Yes, our privacy-first policy ensures that all your data and activities are kept confidential.' },
    ]

     // State to track the currently open FAQ
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle a specific FAQ
  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle open/close
  };

  return (
    <section className='py-[100px] px-[20px] text-white '>
        <h1 className='text-[gold] text-center text-xl mb-2 tracking-wider font-bold'>FAQ</h1>
      <h2 className='sm:text-4xl text-3xl max-xs:text-2xl font-bold text-center'>Your Questions, Answered</h2>

       {/* FAQ Content Section */}
       <div
        id="faq_Con"
        className="flex hidden-sec flex-col justify-between w-full gap-7 px-5 py-10 mt-10 rounded-lg shadow-xl md:px-10 md:w-[95%] max-sm:py-7 max-xs:py-5 m-auto border border-dashed border-[gold]  bg-gray transition-all duration-700"
      >
        {FaqInfo.map((item, index) => (
          <div className="pb-7 border-b border-[rgb(94,94,94)]  max-xs:pb-5" id="Faq" key={index}>
            {/* Question Section */}
            <div
              className="flex items-center justify-between gap-5 cursor-pointer"
              id="question"
              onClick={() => handleToggle(index)}
            >
              <h1 className="text-[17px] font-semibold tracking-wide md:text-lg  lg:text-xl max-xs:text-[15px]">
                {item.question}
              </h1>
              <div
                className={`p-1 border border-[rgb(94,94,94)] rounded-full transform transition-transform rotate-180 text-[#c2c2c2]`}
              >
                {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </div>

            {/* Answer Section */}
            <p
              id="answer"
              className={`pt-4 leading-normal tracking-wide max-md:text-sm max-xs:text-xs max-xs:leading-relaxed transition-all duration-300 ${
                activeIndex === index ? 'block' : 'hidden'
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
