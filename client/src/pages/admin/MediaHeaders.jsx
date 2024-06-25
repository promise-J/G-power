import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import axiosInstance from '../../../lib/axiosRequest';
import { getFileExtension } from '../../../lib';

const MediaHeaders = () => {
  const [file, setFile] = useState(null)
  const [mediaHeader, setMediaHeader] = useState(null)
  const [mediaType, setMediaType] = useState('')
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  useEffect(()=>{
    const getMediaImages = async ()=>{
        const res = await axiosInstance.get(`/media/mediaHeaderImages`)
        if(res.data.success){
            setMediaHeader(res.data.data)
        }
    }
    getMediaImages()
},[])

const handleFileChange = (e, media_type)=>{
    const allowedExtensions = ['jpg', 'jpeg', 'png'];

    const reader = new FileReader()
    setMediaType(media_type)
    setFile(e.target.files[0])

    let fileExtension = getFileExtension(e.target.files[0].name);

    if (!allowedExtensions.includes(fileExtension)) {
        setFile(null)
        return toast.error('Please provide a valid image extension');
    }
  

    reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      }
  
    reader.readAsDataURL(file);
  
}



const handleSubmit = (e, media_type) =>{
    if(!file || media_type !== mediaType){
        return toast.error('Please upload an image', {position: 'bottom-right'})
    }
    const imageUpload = async()=> {
        const formData = new FormData()
        formData.append('image', file)
        formData.append('media_type', mediaType)
        const res = await axiosInstance.post(`/media/mediaHeaderImages`, formData)
        if(res.data.success){
            console.log(res.data.data.message)
            setTimeout(() => {
                window.location.reload()
            }, 4000);
            toast.success(res.data.data.message, {position: 'top-right'})
        }
    }
    imageUpload()
}


  return (
    <div className='mt-[50px]'>
        <h1 className='text-center text-[30px]'>Image Media Handle</h1>
        <div className="mt-10 grid grid-cols-3 gap-16">
            <div className="flex flex-col items-center">
                <h3>About image</h3>
                <div className='mb-5 bg-gray-300 rounded-lg p-2 w-[270px]'>
                    <img className='h-[200px] w-full' src={mediaHeader?.about_header?.imageUrl} alt="" />
                </div>
                <input accept="image/*" multiple onChange={(e)=> handleFileChange(e, 'about_header')} type="file" id="" />
                <button onClick={(e)=> handleSubmit(e, 'about_header')} className='border px-4 py-1 block mt-3 hover:bg-gray-500 hover:text-white'>Upload</button>
            </div>
            <div className="flex flex-col items-center">
                <h3>Vision image</h3>
                <div className='mb-5 bg-gray-300 rounded-lg p-2 w-[270px]'>
                    <img className='h-[200px] w-full' src={mediaHeader?.vision_header?.imageUrl} alt="" />
                </div>
                <input accept="image/*" multiple onChange={(e)=> handleFileChange(e, 'vision_header')} type="file" id="" />
                <button onClick={(e)=> handleSubmit(e, 'vision_header')} className='border px-4 py-1 block mt-3 hover:bg-gray-500 hover:text-white'>Upload</button>
            </div>
            <div className="flex flex-col items-center">
                <h3>Mission image</h3>
                <div className='mb-5 bg-gray-300 rounded-lg p-2 w-[270px]'>
                    <img className='h-[200px] w-full' src={mediaHeader?.mission_header?.imageUrl} alt="" />
                </div>
                <input accept="image/*" multiple onChange={(e)=> handleFileChange(e, 'mission_header')} type="file" id="" />
                <button onClick={(e)=> handleSubmit(e, 'mission_header')} className='border px-4 py-1 block mt-3 hover:bg-gray-500 hover:text-white'>Upload</button>
            </div>
        </div>
        <div className="mt-10 flex justify-center">
            {imagePreviewUrl && 
                <div className='h-[300px] w-[300px] border'>
                <img src={imagePreviewUrl} alt="Preview" className='w-full' />
                </div>
            }
        </div>
    </div>
  )
}

export default MediaHeaders