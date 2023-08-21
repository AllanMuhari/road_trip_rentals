/** @format */

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import image from "../../Assests/car/context.png"

const Context = () => {
  return (
    <div className='flex flex-col lg:flex-row max-w-[1640px] m-auto'>
      {/* text */}
      <div className='flex-col m-7 lg:m-12 w--6/12 md:text-center text-center'>
        <h1 className='text-3xl font-semibold  lg:font-extra-bold lg:text-7xl md:font-extra-bold md:text-7xl md:text-center'>
          {" "}
          Find , book and <br></br> rent a car in Easy<br></br> Steps
        </h1>
        <span className='md:text4xl sm:text-3xl text-xl font-bold pl-4 ml-2'>
          <Typewriter
            words={["Find", "Book", "Rent"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={120}
            deleteSpeed={160}
            delaySpeed={1000}
          />
        </span>
        <h2 className='text-sky-800 font-semibold'>
          At anytime you desire yo can safely acquire a <br></br> car without
          experiencing any from of hassle.
        </h2>
      </div>

      {/* image */}
      <div className='flex m-auto'>
        <img
          src={image}
          className='lg:w-[700px] bg-none'
          alt=''
        ></img>
      </div>
    </div>
  );
};

export default Context;
