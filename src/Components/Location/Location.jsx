/** @format */

import React from "react";

const Location = () => {
  return (
    <div className='bg-[#6565c0] max-w-[1640px] lg:m-auto h-44 rounded-lg flex  mx-2'>
      <div className='m-auto'>
        <h1 className='flex text-1xl font-bold text-gray-700 w-2 '>LOCATION</h1>
        <input
          type='text'
          className='border-b border-gray-600 text-black w-24'
        ></input>
      </div>
      <div className='m-auto'>
        <h1 className='flex text-1xl font-bold text-gray-700'>PICKUP DATE</h1>
        <input type='date'></input>
      </div>
      <div className='m-auto'>
        <h1 className='flex text-1xl font-bold text-gray-700 '>RETRUN DATE</h1>
        <input type='date'></input>
      </div>
    </div>
  );
};

export default Location;
