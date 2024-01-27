import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookNowModal from '../modals/BookNowModal'
import useBookNowStore from '../zustard/BookNowStore'

const Layout = () => {
  const bookNowStore = useBookNowStore()
  return (
    <div>
        {bookNowStore.show && <BookNowModal />}
        <Header />
        <div className='bg-blue-900 h-[90px]'></div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout