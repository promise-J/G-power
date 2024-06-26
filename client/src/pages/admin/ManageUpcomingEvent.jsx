import React, { useEffect, useState } from "react";
import axiosInstance from "../../../lib/axiosRequest";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { getFileExtension } from "../../../lib";

const ManageUpcomingEvent = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [allEvents, setAllEvents] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false)
  const [event, setEvent] = useState(null)

  const [eDate, setEDate] = useState('')
  const [eTime, setETime] = useState('')
  const [eLocation, setELocation] = useState('')
  const [eFile, setEfile] = useState(null)
  const [eTitle, setETitle] = useState('')

  useEffect(() => {
    const getAllEvents = async () => {
      const { data: res } = await axiosInstance.get("/events/upcoming");
      setAllEvents(res.data);
    };
    getAllEvents();
  }, []);

  const handleImageChange = (e) => {
    const allowedExtensions = ["jpg", "jpeg", "png"];

    const file = e.target.files[0];

    let fileExtension = getFileExtension(e.target.files[0].name);

    if (!allowedExtensions.includes(fileExtension)) {
      setFile(null);
      window.location.reload();
      return toast.error("Please provide a valid image extension");
    }

    setFile(file);
  };
  const handleEImageChange = (e) => {
    const allowedExtensions = ["jpg", "jpeg", "png"];

    const file = e.target.files[0];

    let fileExtension = getFileExtension(e.target.files[0].name);

    if (!allowedExtensions.includes(fileExtension)) {
      setEfile(null);
      window.location.reload();
      return toast.error("Please provide a valid image extension");
    }

    setEfile(file);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      if (!file || !location || !title || !date || !time) {
        return toast.error("Provide all fields to create an event");
      }

      formData.append("image", file);
      formData.append("location", location);
      formData.append("title", title);
      formData.append("date", date);
      formData.append("time", time);

      const { data: res } = await axiosInstance.post(
        `/events/upcoming`,
        formData
      );
      toast.success(res.data.message);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      const errorMessage = error?.response?.data?.data?.error;
      toast.error(errorMessage);
    }
  };

  const handleDelete = async (id)=>{
    const confirmDelete = confirm('Are you sure you want to delete this event?')
    if(confirmDelete){  
      if(!id){
        return toast.error('Please provide an id to delete')
      }

      try {
        const {data: res} = await axiosInstance.delete(`/events/upcoming/${id}`)
        if(res.success){
          toast.success(res.data.message)
          setTimeout(() => {
            window.location.reload()
          }, 2000);
        }
        
      } catch (error) {
        const errorMessage = error?.response?.data?.data?.error
        toast.error(errorMessage)
      }
    }
  }

  const handleEdit = async ()=> {
  
    const formData = new FormData()
      if(eFile){
        formData.append("image", eFile)
      }
      formData.append("time", eTime)
      formData.append("location", eLocation)
      formData.append("date", eDate)

    try {
      const {data: res} = await axiosInstance.put(`/events/upcoming/${event._id}`, formData)

      if(res.success){
        toast.success(res.data.message)
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
      const errorMessage = error?.response
      toast.error(errorMessage)
    }
  }

  const openEdit = (event)=>{
    setEvent(event)
    setEDate(event?.date)
    setETime(event?.time)
    setETitle(event?.title)
    setELocation(event?.location)

    setShowEditModal(true)
  }

  return (
    <div className="mt-[40px] flex justify-center">
      <div className="w-[80%] p-4 relative">
        {/* Start edit modal */}
        { showEditModal &&
        <div className="absolute w-full h-[90vh] flex justify-center items-center">
          <div className="bg-blue-900 w-[70%] h-[43%] px-8 ">
          <h1 className="text-center text-3xl mt-3">Edit Event</h1>
            <div className="flex gap-10 my-2">
              <input className="border p-2 flex-1" value={eTitle} disabled placeholder="Enter title" type="text" />
              <input className="border p-2 flex-1" onChange={(e)=> setELocation(e.target.value)} value={eLocation} placeholder="Awka | Anambra" type="text" />
            </div>
            <div className="flex gap-10 my-2">
              <input className="border p-2 flex-1" onChange={(e)=> setEDate(e.target.value)} value={eDate} placeholder="DATE: 19-10-2024" type="text" />
              <input className="border p-2 flex-1" onChange={(e)=> setETime(e.target.value)} value={eTime} placeholder="TIME: 08:39PM" type="text" />
            </div>
            <div className="flex gap-10 mt-5">
              <input className="border p-2 text-white" onChange={handleEImageChange} type="file" />
              <button onClick={handleEdit} className="border flex-1 border-gray-300 text-white">Edit</button>
            </div>
            <div className="flex gap-10 mt-5">
              <button onClick={()=> setShowEditModal(false)} className="border flex-1 p-2 border-gray-300 text-white">Cancel</button>
            </div>
          </div>
        </div>
        
        }
        {/* End edit modal */}

        <h1 className="text-4xl">Manage Upcoming Events</h1>
        <div className="flex justify-around my-5">
          <input onChange={(e) => handleImageChange(e)} type="file" />
          <input
            className="flex-1 border p-2"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter event title"
          />
        </div>
        <div className="flex justify-between gap-5 my-5">
          <input
            type="text"
            className="flex-1 p-2 border"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter event location"
          />
          <input
            type="text"
            className="flex-1 p-2 border"
            onChange={(e) => setTime(e.target.value)}
            placeholder="TIME: 08:45:AM"
          />
          <input
            type="text"
            className="flex-1 p-2 border"
            onChange={(e) => setDate(e.target.value)}
            placeholder="DATE: 09-12-2024"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="border px-10 py-2 hover:bg-gray-400 hover:text-white rounded-xl"
        >
          Save
        </button>
        <h2 className="mt-10 text-center text-4xl">All events</h2>
        <div className="mt-10">
          {
            allEvents.length > 0 ?
          <table>
            <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Time</th>
              <th>Date</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody className="w-full">
            {
            allEvents.map(event=>(
            <tr key={event?._id} className="w-full">
              <td>{event?.title}</td>
              <td>{event?.location}</td>
              <td>{event?.time}</td>
              <td>{event?.date}</td>
              <td>
                <img
                  className="w-[50px] rounded-full"
                  src={event?.image?.imageUrl}
                  alt={event?.title}
                />
              </td>
              <td>
                <div className="flex gap-5">
                  <button className="border" onClick={()=> openEdit(event)}>
                    <BiSolidEditAlt color="green" size={22} />
                  </button>
                  <button onClick={()=> handleDelete(event._id)} className="border">
                    <MdDelete color="red" size={22} />
                  </button>
                </div>
              </td>
            </tr>
              ))
            }
            </tbody>
          </table> 
          : <h2 className="text-4xl text-center text-red-300">Create a new event to see events</h2>
          }
        </div>
      </div>
    </div>
  );
};

export default ManageUpcomingEvent;
