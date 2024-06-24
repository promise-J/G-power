import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const {pathname} = useLocation()
  const indexCheck = pathname.split('/').filter(idx=> idx.trim())

    return (
      <div className="flex min-h-[100vh]">
        <ToastContainer />
        {indexCheck.length > 1 && <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />}
        <div className='w-full ps-[40px] md:ps-[70px] md:pe-3'>
           <Outlet />
        </div>
      </div>
    );
}

export default AdminLayout