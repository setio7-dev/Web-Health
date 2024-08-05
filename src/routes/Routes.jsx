import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../views/Home.jsx';
import Information from '../views/Information.jsx';
import Downloads from '../views/Downloads.jsx';
import Contacts from '../views/Contacts.jsx';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Information' element={<Information/>}/>
            <Route path='/Downloads' element={<Downloads/>}/>
            <Route path='/Contacts' element={<Contacts/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router