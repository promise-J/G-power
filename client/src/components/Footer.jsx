import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
    <div className="bg-blue-900 text-white p-1 md:p-20 gap-20 md:gap-0 grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
      <div className="flex flex-col gap-5 py-5 px-5">
        <Link to="/">
          <img className="bg-transparent rounded-full h-[40px] w-[40px]" src="/globe.png" />
        </Link>
        <div className="flex flex-col gap-5">
          <p className="text-lg">Connect with us</p>
          <div className="flex gap-4">
            <FaXTwitter />
            <FiFacebook />
            <FiInstagram />
            <AiOutlineYoutube />
          </div>
        </div>
        <div className="flex items-center gap-4 py-1">
          <CiLocationOn />
          Awka, Anambra State.
        </div>
      </div>
      <div className="flex flex-col gap-5 px-5">
        <h1 className="text-2xl">Quick Links</h1>
        <p>Home</p>
        <p>About</p>
        <p>Mission</p>
        <p>Vision</p>
        <p>Gallery</p>
        <p>Contact</p>
      </div>
      <div className="flex flex-col gap-5 px-5">
        <h1 className="text-2xl">Resources</h1>
        <div>
          <p>Audio</p>
          <p>Messages</p>
        </div>
        <p>FAQs</p>
      </div>
      <div className="text-lg flex flex-col gap-5 pb-4 px-5">
        <h1 className="text-2xl">Stay in touch</h1>
        <p>Subscribe</p>
        <div className="flex">
        <input type="text" placeholder="Enter Email" className="md:p-2 p-1 w-[130px] text-black text-[12px] rounded-bl-[25px] rounded-tl-[25px]" />
        <button className="text-white text-[12px] bg-purple-400 px-1 py-1 md:py-2 md:px-2 rounded-tr-[25px] rounded-br-[25px]">Subscribe</button>
        </div>
      </div>
    </div>
      <div className="grid-col-3">
      <p className="p-4 text-[14px] text-center"> &copy; Gods Power Outreach Ministry. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
