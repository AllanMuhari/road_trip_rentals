/** @format */
import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <div className='flex'>
        <img
          className=' max-h-[60px] '
          src='https://cdn-icons-png.flaticon.com/512/95/95145.png?w=826&t=st=1691938209~exp=1691938809~hmac=c6c6b70736ad72ebcac635233a3137ad8838595aab7116bdadaa25c65829c586'
          alt=''
        ></img>
        <h1 className='  flex text-2xl lg:text-3xl font-bold text-black m-3'>
          Rent a ride with us
        </h1>
      </div>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#1e1b4b] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className='lg:hidden w-full text-3xl font-bold text-black m-4'>
          Rent a car With us
        </h1>
        <li className='p-4 border-b border-gray-600 cursor-pointer'>Home</li>
        <li className='p-4 border-b border-gray-600 cursor-pointer'>Company</li>
        <li className='p-4 border-b border-gray-600 cursor-pointer'>
          Resources
        </li>
        <li className='p-4 border-b border-gray-600 cursor-pointer'>About</li>
        <li className='p-4 border-b border-gray-600 cursor-pointer'>Contact</li>
        <div className='flex p-5 m-3 g-4'>
          <button className='bg-blue-700 hover:bg-blue-800 rounded py-2'>
            Sign up
          </button>
          <button className='bg-blue-700 hover:bg-blue-800 rounded py-2'>
            Sign in
          </button>
        </div>
      </ul>
      <div className='hidden md:flex lg:flex lg:gap-4'>
        <button className='bg-blue-700 hover:bg-blue-800 rounded py-2'>
          Sign up
        </button>
        <button className='bg-blue-700 hover:bg-blue-800 rounded py-2'>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Nav;
