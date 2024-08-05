import React from 'react'
import { datafeatures } from '../../assets/Data.js'
import './CSS/Features.css'

const Features = () => {
  return (
    <div className='mt-20'>
        <div className='lg:pl-[150px] pl-[40px] lg:space-y-4 space-y-2'>
            <div className='flex items-center space-x-2' data-aos="fade-right" data-aos-duration="800">
                <div className='w-[35px] h-[35px] bg-primary rounded-full'></div>
                <p className='font-poppins lg:text-[17px] text-[15px]'>Benefits Obtained</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                <h1 className='font-poppins lg:text-[28px] text-[24px]'>Features Provided</h1>
                <div className='w-[160px] h-[15px] bg-pink rounded-2xl lg:-mt-[19px] -mt-[16px]'></div>
            </div>
        </div>
        <div className='mt-10'>
            <div className='flex lg:flex-row flex-col justify-center items-center flex-wrap gap-14' data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                { datafeatures.map((item, e) => (
                    <div key={e.id} className='bg-primary lg:w-[450px] w-[280px] lg:h-[240px] h-[400px] rounded-[18px] flex lg:flex-row flex-col items-center justify-around p-4 cursor-pointer hover'>
                        <img src={item.img} alt="" className='bg-white rounded-[9px] w-[180px] h-auto'/>
                        <div className='lg:text-right text-center font-poppins text-white'>
                            <h1 className='text-[18px] lg:w-[200px] lg:pb-0 pb-2'>{item.head}</h1>
                            <p className='lg:w-[200px] text-[14px] lg:float-end lg:px-0 px-3'>{item.text}</p>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    </div>
  )
}

export default Features