import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const AdminLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false)

    return (
      <div className="flex min-h-[100vh]">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className='w-full ps-[70px] pe-3'>
           <Outlet />
        </div>
      </div>
    );
}

export default AdminLayout