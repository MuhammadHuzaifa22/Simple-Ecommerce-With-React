import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './src/Components/Navbar'
import Footer from './src/assets/Images/Footer'

const Layout = () => {
  return (
    <>
    
    <Navbar/>
    <Footer/>
    
    </>
  )
}

export default Layout