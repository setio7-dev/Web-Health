import React from 'react'
import Contact from '../components/Contact/Contact.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const Contacts = () => {
  return (
    <div className='container'>
      <div className='relative z-10'>
        <Navbar/>
      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Contacts