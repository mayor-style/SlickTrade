import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faShieldAlt, faStopwatch, faWallet, faHeadphones, faUserSecret } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  const featureInfo = [
    {
      id: 1,
      title: 'Advanced Escrow Protection',
      text: 'Ensures no funds are released until both parties are satisfied.',
      icon: faShieldAlt,
    },
    {
      id: 2,
      title: 'Real-Time Matching',
      text: 'Connect instantly with verified vendors or users based on your needs.',
      icon: faStopwatch,
    },
    {
      id: 3,
      title: 'Low Fees, High Transparency',
      text: 'No surprises—know exactly what you’re paying or receiving.',
      icon: faWallet,
    },
    {
      id: 4,
      title: '24/7 Support',
      text: 'Dedicated customer support to resolve issues anytime.',
      icon: faHeadphones,
    },
    {
      id: 5,
      title: 'Proven Privacy and Confidentiality',
      text: 'Trade discreetly with confidence.',
      icon: faUserSecret,
    },
  ];

  return (
    <section className="min-h-screen border border-t-gray py-[100px] px-[20px]">
      <h1 className="text-center text-white sm:text-4xl text-3xl max-xs:text-2xl font-bold">
        Why Choose <span>Slick</span>Trade for Your <span>Transactions</span>
      </h1>

      <div className="grid mt-[80px] sm:grid-cols-2 lg:grid-cols-3 gap-[50px] xs:px-6">
        {featureInfo.map((feature) => (
          <div key={feature.id} className="bg-transparent border-[gold] border-dashed  border shadow-lg rounded-lg px-5 py-10 text-center">
            <div className="text-[gold]  bg-black px-1 py-2 text-4xl w-fit m-auto mt-[-60px]">
              <FontAwesomeIcon icon={feature.icon} /> {/* Use the imported component here */}
            </div>
            <h2 className="text-lg text-white font-semibold my-2 ">{feature.title}</h2>
            <p className="">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
