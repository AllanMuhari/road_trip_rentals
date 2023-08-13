/** @format */
import React from "react";

const Nav = () => {
  return (
    <div className='max-w-[1640px] max-h-[100vh] mx-auto flex p-10'>
      <div>
        <img
          className='w-full max-h-[60px] '
          src='https://cdn-icons-png.flaticon.com/512/95/95145.png?w=826&t=st=1691938209~exp=1691938809~hmac=c6c6b70736ad72ebcac635233a3137ad8838595aab7116bdadaa25c65829c586'
          alt=''
        ></img>
      </div>
      <div>
        <h1 className='font-extrabold text-center p-2 text-2xl'>
          RoadTrip Rentals <span>Your Adventure Awaits</span>
        </h1>
      </div>
      <div className='flex flex-grow justify-end items-center space-x-4'>
        <ul className='flex p-4 text-gray-800'>
          <li className='text-xl flex p-4 font-semibold'>Home</li>
          <li className='text-xl font-semibold'>Rentaldeals</li>
          <li className='text-xl font-semibold'>Vehicles</li>
          <li className='text-xl font-semibold'>Locations</li>
          <li className='text-xl font-semibold'> Why choose us</li>
        </ul>
      </div>
      <div>
        <button className='bg-[#F8F8F8] text-black font-semibold px-4 py-2 rounded-full'>
          {" "}
          Sign up{" "}
        </button>
        <button className='bg-[#F8F8F8] text-black font-semibold px-4 py-2 rounded-full'>
          {" "}
          Sign in{" "}
        </button>
      </div>
    </div>
  );
};

export default Nav;
