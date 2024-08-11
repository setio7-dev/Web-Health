import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-black w-full h-[100vh] mt-[90px] text-white font-poppins text-center flex flex-col justify-center lg:text-[25px] text-[17px] space-y-12 cursor-pointer'>
        <Link to="/"><h1>Home</h1></Link>
        <Link to="/Information"><h1>Information</h1></Link>
        <Link to="/Contacts"><h1>Contact</h1></Link>
        <h1 className='pt-10 lg:text-[17px] text-[15px] lg:px-0 px-8'>Connect with us on social media for the latest updates</h1>
        <div className='lg:text-[50px] text-[35px] lg:space-x-24 space-x-16'>
          <i className='bx bxl-instagram' style={{color:"#ffffff"}}></i>
          <i className='bx bxl-linkedin' style={{color:"#ffffff"}}></i>
          <i className='bx bxl-youtube' style={{color:"#ffffff"}}></i>
        </div>
    </div>
  )
}

export default Footer