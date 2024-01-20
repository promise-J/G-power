import React, { useState } from 'react'
import {MdMenu} from 'react-icons/md'
import {GrUserAdmin} from 'react-icons/gr'
import {GrClose} from 'react-icons/gr'
import {RxDashboard} from 'react-icons/rx'


const Sidebar = ({showSidebar, setShowSidebar}) => {

  return (
    <div style={{background: '#100522'}} className='sidebar h-[100vh] fixed px-1 pb-[100px]'>
      <MdMenu onClick={()=> setShowSidebar(s=> true)} className={`mt-5 ${showSidebar && 'hidden'} text-white font-bold duration-200`} size={30} cursor={'pointer'} />
      <GrClose onClick={()=> setShowSidebar(s=> false)} className={`mt-5 ${!showSidebar && 'hidden'} font-bold absolute right-7 text-white z-10`} size={20} cursor={'pointer'} />
      <div className={`relative my-20 h-full relative px-1 overflow-auto ${!showSidebar && 'hidden'} mb-5`}>

      <div className='flex justify-center py-3'>
      <div style={{background: '#9681eb'}} className='flex items-center w-[90%] rounded-xl px-1 py-3'>
        <img className='h-12 w-12 rounded-full' src="/j.png" alt="admin-img" />
        <div className='flex-1 flex flex-col ps-3'>
          <span style={{color: '#fcf7ff'}} className='font-semibold text-xl text-white'>Admin</span>
          <span style={{color: '#fffade'}} className='text-grey-100 font-bold text-orange-200'>Promise J</span>
        </div>
        <GrUserAdmin color='white' className='me-3' size={21} cursor={'pointer'} />
      </div>
      </div>
      <ul style={{transition: '3s'}} className={`px-4 min-w-[300px] mt-4`}>
        <li className='flex cursor-pointer items-center px-1 py-3'><RxDashboard color='white' /> <span className='ms-3 text-purple-200 hover:text-purple-200 duration-200'>Dashboard</span></li>
        <li className='flex cursor-pointer items-center px-1 py-3'><RxDashboard className='hover:text-purple-200' color='white' /> <span className='ms-3 text-gray-500 hover:text-purple-200 duration-200'>Users</span></li>
      </ul>
      <h4 className='mt-5 mb-3 ms-2 font-bold text-xl text-gray-400'>Short cuts</h4>
      <ul style={{transition: '3s'}} className={`px-4 min-w-[300px] mt-4`}>
        <li className='flex cursor-pointer items-center px-1 py-3'><RxDashboard color='white' /> <span className='ms-3 text-gray-500 hover:text-purple-200 duration-200'>Programmes</span></li>
        <li className='flex cursor-pointer items-center px-1 py-3'><RxDashboard color='white' /> <span className='ms-3 text-gray-500 hover:text-purple-200 duration-200'>Departments</span></li>
        <li className='flex cursor-pointer items-center px-1 py-3'><RxDashboard color='white' /> <span className='ms-3 text-gray-500 hover:text-purple-200 duration-200'>Services</span></li>
      </ul>
      </div>
    </div>
  )
}

export default Sidebar
















