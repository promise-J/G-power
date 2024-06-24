import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { SERVER_URL } from "../../../lib/constants";

const ManageGallery = () => {
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState(null);

  const handleDelete = async (publicId) => {
    confirm("Are you sure you want to delete?");
  };

  useEffect(() => {
    const getMediaContent = async () => {
      const { data: res } = await axios.get(
        `${SERVER_URL}/media/mediaHeaderImages`
      );
      setMedia(res.data);
    };

    getMediaContent();
  }, []);

  console.log(media);

  const handleImageChange = (e) => {
    const allowedExtensions = ["jpg", "jpeg", "png"];

    const file = e.target.files[0];
    setFile(file);

    let fileExtension = getFileExtension(e.target.files[0].name);

    if (!allowedExtensions.includes(fileExtension)) {
      setFile(null);
      window.location.reload();
      return toast.error("Please provide a valid image extension");
    }
  };

  const handleSubmit = (e) => {
    if (!file) {
      return toast.error("Please select a file", { position: "top-left" });
    }

    const imageUpload = async () => {
      const formData = new FormData();
      formData.append("image", file);
      const res = await axios.post(
        `${SERVER_URL}/media/addMediaGallery`,
        formData
      );
      if (res.data.success) {
        console.log(res.data.data.message);
        setTimeout(() => {
          window.location.reload();
        }, 4000);
        toast.success(res.data.data.message, { position: "top-right" });
      }
    };
    imageUpload();
  };

  const getFileExtension = (filename) => {
    return filename
      .slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2)
      .toLowerCase();
  };

  return (
    <div className="mt-[40px]">
      <h2 className="text-3xl text-center">Manage Gallery</h2>
      <div className="mt-10">
        <div className="flex justify-between px-10">
          <input onChange={handleImageChange} type="file" name="" id="" />
          <button
            onClick={handleSubmit}
            className="border p-2 hover:bg-gray-600 hover:text-white rounded-xl"
          >
            Upload Image Gallery
          </button>
        </div>
        <div className="m-10 grid grid-cols-5 gap-5">
          {media?.gallery_images.length > 1 ? (
            media?.gallery_images.map((gallery, idx) => (
              <div className="h-[200px] p-1 relative">
                <img src={gallery.imageUrl} alt="" className="h-full w-full" />
                <MdDeleteOutline
                  size={24}
                  onClick={handleDelete}
                  className="absolute top-2 left-2 hover:text-red-900 hover:scale-[1.2]"
                />
              </div>
            ))
          ) : (
            <h2 className="text-5xl text-center absolute">
              Please add an image in the gallery
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageGallery;
