import React from 'react';

const PendingTasks = () => {
  const tasks = [
    {
      id: 1,
      message: 'Dispute for TRX1234556 requires your response.',
      cta: 'Resolve Now',
    },
    {
      id: 2,
      message: 'Rate Vendor2002 for your last completed transaction.',
      cta: 'Review Vendor',
    },
    {
      id: 3,
      message: 'Approve the pending changes for transaction TRX7891011.',
      cta: 'Approve Now',
    },
  ];

  return (
    <div className="bg-gray border border-dark-gray p-4 rounded-lg w-full ">
      <h2 className="text-white text-lg font-semibold mb-4">Pending <span>Tasks</span></h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="bg-glass border border-dark-gray p-3 rounded-lg">
            <p className="text-white text-sm">{task.message}</p>
            <button className="bg-gold text-sm text-black px-4 py-2 rounded-md mt-2 transition-all ease-in-out duration-200 hover:bg-opacity-80 max-sm:text-xs">
              {task.cta}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingTasks;
