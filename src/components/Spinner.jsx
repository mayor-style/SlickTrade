import React from 'react'

const Spinner = ({message}) => {
  return (
    <div className='flex gap-2'>
      <div className="loader"></div>
      <p>{message}</p>
    </div>
  )
}

export default Spinner
