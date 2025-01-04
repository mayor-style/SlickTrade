import React from 'react';

const Spinner = ({ message=null, color, lg=false}) => {
  return (
    <div className="flex items-center justify-center text-center m-auto gap-2">
      <p className={`text-${color ? color : 'white'} max-sm:text-sm`}>{message}</p>
      <span className={`animate-spin rounded-full  border-gold border-t-transparent ${ lg? `w-14 h-14 border-[5px]`: 'border-[3px] w-5 h-5'}  `}></span>
    </div>

  );
};

export default Spinner;
