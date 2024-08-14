import React from 'react'
import Download from '../components/Downloads/Download'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Downloads = () => {
  return (
    <div className='container'>
        <div className='relative z-10'>
            <Navbar/>
        </div>
        <Download/>
        <Footer/>
    </div>
  )
}

export default Downloads