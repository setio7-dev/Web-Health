import React from 'react'
import { dataMental } from '../../assets/Data.js'
import './CSS/About.css'

const About = () => {
  return (
    <div className='lg:mt-12 mt-16'>
        <div className='text-center bg-gray p-7 w-[300px] lg:w-[850px] rounded-xl mx-auto' data-aos="fade-up" data-aos-duration="800">
            <p className='font-poppins1 lg:text-[17px] text-[12px]'>Why?</p>
            <h1 className='font-poppins lg:text-[35px] text-[17px]'>Why Our Mental Health Consultants are <br className='lg:block hidden'/> the Best Choice</h1>
        </div>
        <div className='lg:mt-[160px] mt-[100px]'>
            <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-24 justify-around items-center' data-aos="fade-up" data-aos-duration="800">
                { dataMental.map((item, e) => (
                    <div key={e.id} className='flex flex-col items-center space-y-2 border-purple border-[2px] p-5 rounded-3xl cursor-pointer dataMap lg:w-[350px] lg:h-[410px] w-[280px] h-[380px]'>
                        <img src={item.img} alt="" className='w-[100px] h-auto transition-all'/>
                        <h1 className='text-[22px] pt-2 font-poppins'>{item.head}</h1>
                        <p className='lg:w-[300px] text-center pt-4 font-poppins2 lg:text-[15px] text-[12px] lg:px-0 px-[10px]'>{item.text}</p>
                    </div>
                )) }   
            </div>
        </div>
    </div>
  )
}

export default About