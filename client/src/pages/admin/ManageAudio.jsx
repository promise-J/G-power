import React, { useEffect, useState } from "react";
import axiosInstance from "../../../lib/axiosRequest";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";

const ManageAudio = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [allAudios, setAllAudios] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false)
  const [audio, setAudio] = useState(null)

  const [eDate, setEDate] = useState('')
  const [eLink, setELink] = useState('')
  const [eAuthor, setEAuthor] = useState('')
  const [eTitle, setETitle] = useState('')

  useEffect(() => {
    const getAllAudios = async () => {
      const { data: res } = await axiosInstance.get("/audios/audio");
      setAllAudios(res.data);
    };
    getAllAudios();
  }, []);

  const handleSubmit = async () => {
    try {

      if (!link || !title || !date || !author) {
        return toast.error("Provide all fields to create an audio");
      }

      const { data: res } = await axiosInstance.post(
        `/audios/audio`,
        {
            link,
            author,
            date,
            title
        }
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
        const {data: res} = await axiosInstance.delete(`/audios/audio/${id}`)
        console.log(res,'the response')
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

    try {
      const {data: res} = await axiosInstance.put(`/audios/audio/${audio._id}`, {
        author: eAuthor,
        link: eLink,
        date: eDate
      })

      if(res.success){
        console.log(res)
        toast.success(res.data.message)
        setTimeout(() => {
            window.location.reload()
        }, 2000);
      }
    } catch (error) {
      console.log(error)
      const errorMessage = error?.response
      toast.error(errorMessage)
    }
  }

  const openEdit = (audio)=>{
    setAudio(audio)
    setEDate(audio?.date)
    setEAuthor(audio?.author)
    setETitle(audio?.title)
    setELink(audio?.link)

    setShowEditModal(true)
  }

  return (
    <div className="mt-[40px] flex justify-center">
      <div className="w-[80%] p-4 relative">
        {/* Start edit modal */}
        { showEditModal &&
        <div className="absolute w-full h-[90vh] flex justify-center items-center">
          <div className="bg-blue-900 w-[70%] h-[43%] px-8 ">
          <h1 className="text-center text-3xl mt-3">Edit Audio</h1>
            <div className="flex gap-10 my-2">
              <input className="border p-2 flex-1" value={eTitle} disabled placeholder="Enter title" type="text" />
              <input className="border p-2 flex-1" onChange={(e)=> setELink(e.target.value)} value={eLink} placeholder="Awka | Anambra" type="text" />
            </div>
            <div className="flex gap-10 my-2">
              <input className="border p-2 flex-1" onChange={(e)=> setEDate(e.target.value)} value={eDate} placeholder="DATE: 19-10-2024" type="text" />
              <select defaultValue={eAuthor} className="border p-2 flex-1" name="" id="">
                <option value="">Choose Author</option>
                <option selected={eAuthor === 'daddy'} value="daddy">Daddy</option>
                <option selected={eAuthor === 'mummy'} value="mummy">Mummy</option>
              </select>
            </div>
            <div className="flex gap-10 mt-5">
              <button onClick={handleEdit} className="border flex-1 border-gray-300 text-white p-2">Edit</button>
            </div>
            <div className="flex gap-10 mt-5">
              <button onClick={()=> setShowEditModal(false)} className="border flex-1 p-2 border-gray-300 text-white">Cancel</button>
            </div>
          </div>
        </div>
        
        }
        {/* End edit modal */}

        <h1 className="text-4xl">Manage Audio</h1>
        <div className="flex justify-around my-5 gap-5">
          <input
            className="flex-1 border p-2"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
          <select className="flex-1 border p-2" onChange={(e)=> setAuthor(e.target.value)} name="" id="">
            <option value="">Choose Author</option>
            <option value="daddy">Daddy</option>
            <option value="mummy">Mummy</option>
          </select>
        </div>
        <div className="flex justify-between gap-5 my-5">
          <input
            type="text"
            className="flex-1 p-2 border"
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://t.me/GODSPOWERWORLDOUTREACHMINISTRYi"
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
        <h2 className="mt-10 text-center text-4xl">All audios</h2>
        <div className="mt-10">
          {
            allAudios.length > 0 ?
          <table>
            <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
              <th>author</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody className="w-full">
            {
            allAudios.map(audio=>(
            <tr key={audio?._id} className="w-full">
              <td>{audio?.title}</td>
              <td>{audio?.link}</td>
              <td>{audio?.author}</td>
              <td>{audio?.date}</td>
              <td>
                <div className="flex gap-5">
                  <button className="border" onClick={()=> openEdit(audio)}>
                    <BiSolidEditAlt color="green" size={22} />
                  </button>
                  <button onClick={()=> handleDelete(audio._id)} className="border">
                    <MdDelete color="red" size={22} />
                  </button>
                </div>
              </td>
            </tr>
              ))
            }
            </tbody>
          </table> 
          : <h2 className="text-4xl text-center text-red-300">Create a new audio to see audios</h2>
          }
        </div>
      </div>
    </div>
  );
};

export default ManageAudio;
