import React from 'react'
import Nissan from "../../Assests/Icons/iconfindernissanlogo4142910-115961_115919.png"
import Mazda from "../../Assests/Icons/mazda_logo_icon_145802 (3).png"
import Lexus from "../../Assests/Icons/lexus_logo_icon_145808 (1).png"
import Benz from "../../Assests/Icons/mercedes_benz_logo_icon_145798.png"
import BMW from "../../Assests/Icons/iconfinderbmwlogo4140436-115966_115915.png"
import Honda from "../../Assests/Icons/honda_logo_icon_181334.png"
import Ford from "../../Assests/Icons/ford_logo_icon_169155.png"

const Content = () => {
  return (
    <div className='bg-white  rounded-lg flex mt-[-90px] h-72 sm:w-[100%] cursor-pointer'>
      <div className='flex m-auto w-[40px]'>
        <img src={Nissan} alt="" />
      </div>
      <div className='flex m-auto w-[40px]'>
        <img src={Mazda} alt="" />
      </div>
      <div className='flex m-auto w-[40px] '>
        <img src={Lexus} alt="" />
      </div>
      <div className='flex m-auto w-[40px]'>
        <img src={Benz} alt="" />
      </div>
      <div className='flex m-auto w-[40px]'>
        <img src={BMW} alt="" />
      </div>
      <div className='flex m-auto w-[40px]'>
        <img src={Honda} alt="" />
      </div>
      <div className='flex m-auto w-[40px]'>
        <img src={Ford} alt="" />
      </div>

    </div>
  )
}

export default Content