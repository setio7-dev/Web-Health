import React from 'react'
import Pics from '/image/hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='pt-[25%] lg:px-[75px] lg:pt-[9%] flex justify-around items-center lg:flex-row flex-col-reverse relative' data-aos="fade-up" data-aos-duration="800">
        <div className='flex flex-col lg:space-y-6 space-y-2 lg:items-start items-center'>
            <h1 className='font-poppins lg:text-[60px] text-[35px] lg:mt-0 mt-5'>SatyGuard</h1>
            <p className='lg:w-[550px] w-full lg:text-left text-center lg:px-0 px-[10px] lg:text-[17px] text-[15px] lg:pb-[50px] pb-[40px] font-poppins1'>Experience peace of mind at all times with Satyguard. An app specially designed to protect women and girls from harm. With one touch, help is on the way. Dont let fear stand in your way, Satyguard is always ready to keep you safe.
            </p>
            <Link to="/Information"><button className='bg-primary text-white font-poppins1 text-[15px] px-[35px] py-[11px] rounded-3xl cursor-pointer
            hover:scale-[90%] hover:opacity-[80%] transition-all'>Get Started</button></Link>
        </div>
        <img src={Pics} alt="" className='lg:w-[450px] h-auto w-[230px]'/>
    </div>
  )
}

export default Hero