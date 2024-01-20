import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-blue-900 text-white p-1 md:p-20 gap-20 md:gap-0 grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
      <div className="flex flex-col gap-5 py-5 px-5">
        <Link to="/">
          <img src="/vite.svg" />
        </Link>
        <div className="flex flex-col gap-5 px-5">
          <p className="text-lg">Connect with us</p>
          <div className="flex gap-4">
            <FaXTwitter />
            <FiFacebook />
            <FiInstagram />
            <AiOutlineYoutube />
          </div>
        </div>
        <div>
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
      <div className="text-lg flex flex-col gap-5 md:ps-3">
        <h1 className="text-2xl">Stay in touch</h1>
        <p>Subscribe</p>
        <div className="">
        <input type="text" placeholder="Enter Email" className="md:p-2 p-1 rounded-bl-[25px] rounded-tl-[25px]" />
        <button className="text-white bg-purple-400 px-1 py-1 md:py-2 md:px-4 rounded-tr-[25px] rounded-br-[25px]">Subscribe</button>
        </div>
      </div>
      <p> &copy; God’s Power Outreach Ministry. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
