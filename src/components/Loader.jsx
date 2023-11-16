import React from 'react';
import loading from '../assets/loading.gif';

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-44 w-full'>
      <img src={loading} alt="Loading..." className='h-10 w-10' />
    </div>
  )
}

export default Loader;
