/** @format */

import React from "react";
import Nissan from "../../Assests/Icons/iconfindernissanlogo4142910-115961_115919.png";
import Mazda from "../../Assests/Icons/mazda_logo_icon_145802 (3).png";
import Lexus from "../../Assests/Icons/lexus_logo_icon_145808 (1).png";
import Benz from "../../Assests/Icons/mercedes_benz_logo_icon_145798.png";
import BMW from "../../Assests/Icons/iconfinderbmwlogo4140436-115966_115915.png";
import Honda from "../../Assests/Icons/honda_logo_icon_181334.png";
import Ford from "../../Assests/Icons/ford_logo_icon_169155.png";
import Location from "../..//Assests/Icons/location.png";
import Car from "../..//Assests/Icons/car.png";
import Calender from "../..//Assests/Icons/calendar.png";

const Content = () => {
  return (
    <div className='bg-white  rounded-lg flex flex-col  mt-[-90px] h-auto sm:w-[100%] cursor-pointer'>
      <div className='flex justify-between m-auto gap-2 lg:gap-52 pt-8'>
        <img src={Nissan} alt='' />
        <img src={Mazda} alt='' />
        <img src={Lexus} alt='' />
        <img src={Benz} alt='' />
        <img src={BMW} alt='' />
        <img src={Honda} alt='' />
        <img src={Ford} alt='' />
      </div>
      <div className='m-auto'>
        <h1 className='text-center flex text-xl font-bold justify-center '>
          How it works
        </h1>
        <h2 className='m-2 flex justify-center text-2xl'>
          Rent a car with the following three steps
        </h2>
        <div className='flex sm:w-12 bg-white sm:gap-[10rem] rounded-md border-2 m-3 lg:w-[10rem] lg:h-[10rem] '>
          <img
            className=' border-blue-900 border-2 rounded-md '
            src={Location}
            alt=''
          ></img>
          <img
            className=' border-blue-900 border-2 rounded-md '
            src={Car}
            alt=''
          ></img>
          <img
            className=' border-blue-900 border-2 rounded-md p-2 '
            src={Calender}
            alt=''
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Content;
