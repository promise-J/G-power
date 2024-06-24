import React, { useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = ()=>{
        navigate('/gp-admin/dashboard')
    }

  return (
    <div className="h-full flex justify-center items-center">
      <div className="h-[400px] w-[400px] px-5 flex flex-col border border-gray-400 items-center py-5 gap-10">
        <h1>Admin Login</h1>
        <div className="p-1 w-full ">
          <input type="text" placeholder="Enter email" className="w-full p-3 border rounded-lg outline-none focus:outline-none" />
        </div>
        <div className="p-1 w-full relative">
          {
            showPassword ?
            <MdOutlineVisibilityOff onClick={()=> setShowPassword(false)} className="absolute right-4 top-4" size={20} cursor={'pointer'} /> :
            <MdOutlineVisibility onClick={()=> setShowPassword(true)} className="absolute right-4 top-4" size={20} cursor={'pointer'} />
        }
          <input type={showPassword ? 'text' : 'password'} placeholder="Enter password" className="w-full p-3 border rounded-lg outline-none focus:outline-none" />
        </div>
        <div className="w-full ">
            <button onClick={handleSubmit} className="w-full py-2 rounded-lg border border-green-800 hover:bg-green-800 hover:text-white">LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
