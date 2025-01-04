import React from 'react';

const Spinner = ({ message=null, color, lg=false, xl=false}) => {
  return (
    <div className="flex items-center justify-center text-center m-auto gap-2">
      <p className={`text-${color ? color : 'white'} max-sm:text-sm`}>{message}</p>
      <span className={`animate-spin rounded-full border-2 border-gold border-t-transparent  ${ lg? `w-14 h-14 border-[5px]`: ''}  ${xl? 'w-14 h-14 border-[8px]' : ''} `}></span>
    </div>

  );
};

export default Spinner;
