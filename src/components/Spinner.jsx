import React from 'react';

const Spinner = ({ message, color }) => {
  return (
    <div className="flex items-center justify-center text-center m-auto gap-2">
      <p className={`text-${color ? color : 'white'} max-sm:text-sm`}>{message}</p>
      <span className="animate-spin rounded-full border-2 border-white border-t-transparent w-5 h-5"></span>
    </div>

  );
};

export default Spinner;
