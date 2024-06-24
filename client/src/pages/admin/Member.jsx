import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Member = () => {
    const {id} = useParams()
    const [userId, setUserId] = useState('')

    useEffect(()=>{
        if(id){
            setUserId(id)
        }
    },[])
  return (
    <div>
      <div className="md:w-2/4 mx-auto mt-[70px]">
        <h2 className="text-center text-5xl">{userId ? "Edit Worker" : "Add Worker"}</h2>
        <form action="" className="flex flex-col py-3 gap-5 mt-20">
          <div className="w-[90%] mx-auto">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 rounded-lg outline:none focus:outline-none border"
            />
          </div>
          <div className="w-[90%] mx-auto">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 rounded-lg outline:none focus:outline-none border"
            />
          </div>
          <div className="w-[90%] mx-auto">
            <input
              type="text"
              placeholder="Email"
              className="w-full p-3 rounded-lg outline:none focus:outline-none border"
            />
          </div>
          <div className="w-[90%] mx-auto flex px-2">
            <div className="flex-1 py-2 gap-3 flex">
              <label htmlFor="">Male</label>
              <input type="checkbox" value="Male" name="gender" className="cursor-pointer" />
            </div>
            <div className="flex-1 py-2 gap-3 flex">
              <input type="checkbox" value="Female" name="gender" className="cursor-pointer" />
              <label htmlFor="">Female</label>
            </div>
          </div>
          <div className="mx-auto flex px-2 w-[90%]">
            <button className="w-full border py-2 hover:bg-blue-900 rounded-md hover:text-white">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Member;
