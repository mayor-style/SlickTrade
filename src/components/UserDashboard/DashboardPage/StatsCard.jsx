import React from 'react';
import StarRating from '../../StarRating';
import { MdDoneAll, MdPendingActions } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';

const StatsCard = ({ statsDetails }) => {
  // Default static stats
  const defaultStats = [
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
      icon: <AiFillStar />,
      label: 'User Rating',
      valueClass: false,
      value: (
        <>
          4.8/5
          <span>
            <StarRating rating={4.8} />
          </span>
        </>
      ),
    },
  ];

  // Use statsDetails if provided, else fallback to defaultStats
  const stats = statsDetails || defaultStats;

  return (
    <div className="bg-gray h-full border bordr-dark-gray p-4 py-6 rounded-lg">
      <h2 className="sm:text-2xl text-white text-lg font-semibold mb-2">
        Stats <span>Cards</span>
      </h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="p-2 py-3 border border-dark-gray text-white space-y-2 bg-glass rounded-lg">
            <div className="sm:text-3xl text-2xl">{stat.icon}</div>
            <h2 className="max-sm:text-sm">{stat.label}</h2>
            <p
              className={`text-gold ${
                stat.valueClass ? 'sm:text-xl text-lg font-medium' : 'flex items-center gap-2'
              }`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default StatsCard;
