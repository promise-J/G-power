import React from 'react'

const HomeDashboard = () => {
  return (
    <div className='min-h-[100vh] pt-10'>
      <div className='p-5'>
        <h1 className='text-5xl'>Welcome Admin,</h1>
      </div>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-[40px] p-3 mt-10'>
        <div className='p-3 shadow shadow-sm hover:bg-blue-900 hover:text-white cursor-pointer hover:scale-[1.1] hover:rounded-[25px]'>
          <h1 className='text-[40px]'>Members</h1>
          <p className='text-[60px] font-bold'>40</p>
        </div>
        <div className='p-3 shadow shadow-sm hover:bg-blue-900 hover:text-white cursor-pointer hover:scale-[1.1] hover:rounded-[25px]'>
          <h1 className='text-[40px]'>Departments</h1>
          <p className='text-[60px] font-bold'>50</p>
        </div>
        <div className='p-3 shadow shadow-sm hover:bg-blue-900 hover:text-white cursor-pointer hover:scale-[1.1] hover:rounded-[25px]'>
          <h1 className='text-[40px]'>Messages</h1>
          <p className='text-[60px] font-bold'>30</p>
        </div>
        <div className='p-3 shadow shadow-sm hover:bg-blue-900 hover:text-white cursor-pointer hover:scale-[1.1] hover:rounded-[25px]'>
          <h1 className='text-[40px]'>Testimonies</h1>
          <p className='text-[60px] font-bold'>100</p>
        </div>
      </div>
    </div>
  )
}

export default HomeDashboard