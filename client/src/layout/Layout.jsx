import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div>
        <Header />
        <div className='bg-blue-900 h-[90px]'></div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout