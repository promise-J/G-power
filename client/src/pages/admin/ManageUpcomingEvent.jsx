import React, { useState } from "react";
import { SERVER_URL } from "../../../lib/constants";
import axiosInstance from "../../../lib/axiosRequest";

const ManageUpcomingEvent = () => {
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const handleImageChange = (e)=>{
    const allowedExtensions = ["jpg", "jpeg", "png"];

    const file = e.target.files[0];
    setFile(file);

    let fileExtension = getFileExtension(e.target.files[0].name);

    if (!allowedExtensions.includes(fileExtension)) {
      setFile(null);
      window.location.reload();
      return toast.error("Please provide a valid image extension");
    }
  }

  const handleSubmit = async ()=>{
    const formData = new FormData()
    formData.image = file
    formData.location = location
    formData.title = title
    formData.date = date
    formData.time = time

    const {data: res} = await axiosInstance.post(`/events/upcoming`, formData)
    console.log(res,'the response')

  }

  const getFileExtension = (filename) => {
    return filename
      .slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2)
      .toLowerCase();
  };

  return (
    <div className="mt-[40px] flex justify-center">
      <div className="w-[80%] p-4">
        <h1 className="text-4xl">Manage Upcoming Events</h1>
        <div className="flex justify-around my-5">
            <input onChange={(e)=> handleImageChange(e)} type="file" />
            <input className="flex-1 border p-2" type="text" onChange={(e)=> setTitle(e.target.value)} placeholder="Enter event title" />
        </div>
        <div className="flex justify-between gap-5 my-5">
            <input type="text" className="flex-1 p-2 border" onChange={(e)=> setLocation(e.target.value)}  placeholder="Enter event location" />
            <input type="text" className="flex-1 p-2 border" onChange={(e)=> setTime(e.target.value)} placeholder="TIME: 08:45:AM" />
            <input type="text" className="flex-1 p-2 border" onChange={(e)=> setDate(e.target.value)} placeholder="DATE: 09-12-2024" />
        </div>
        <button onClick={handleSubmit} className="border px-10 py-2 hover:bg-gray-400 hover:text-white rounded-xl" >Save</button>
      </div>
    </div>
  );
};

export default ManageUpcomingEvent;
