import React from "react";
import Slider from "../components/Slider";
import { CiCalendarDate } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import FaqItem from "../components/FaqItem";
import { IoIosArrowDropup } from "react-icons/io";


const Homepage = () => {
  return (
    <div id='home'>
      <Slider />
      <a href="#home">
        <IoIosArrowDropup className="fixed right-20 bottom-20 z-20 animate-bounce bg-white rounded-full border border-black border-6" size={60} color="purple" />
      </a>
      <section id='about' className="flex mt-5 mb-10 flex-col md:flex-row">
        <div
          data-aos="fade-right"
          className="flex justify-center flex-[2] items-center"
        >
          <div className="w-[80%] ps-4">
            <h1 data-aos="fade-down" className="my-5 text-4xl font-bold">
              About <span className="text-purple-400">US</span>
            </h1>
            <p data-aos="zoom-in" className="my-4 text-lg">
              At God's Power Outreach Ministry, we unite in faith, love, and
              service, fostering spiritual growth and connections for all. Our
              inclusive mission embraces diversity, creating a valued and
              compassionate space for everyone. Guided by our devotion to God,
              we make a meaningful impact through worship, fellowship, and
              outreach. Join our collective journey of spiritual discovery and
              service, nurturing connections and faith within our community.
            </p>
            <button
              data-aos="fade-up"
              className="my-5 bg-purple-400 text-white py-3 px-10 rounded-[30px]"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="p-4 flex flex-[1.5] justify-center items-center">
          <div className="h-[400px] w-[400px]">
            <img
              data-aos="flip-up"
              className="h-full rounded-lg border border-purple-400 border-[3px] shadow-lg shadow-black"
              src="/about.jpeg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="mission" className="flex mt-5 mb-10 flex-col md:flex-row">
        <div className=" p-4 flex flex-[1.5] justify-center items-center">
          <div className="h-[400px] w-[400px]">
            <img
              data-aos="flip-up"
              className="h-full rounded-lg border border-purple-400 border-[3px] shadow-lg shadow-black"
              src="/mission.jpeg"
              alt=""
            />
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="flex justify-center flex-[2] items-center"
        >
          <div className="w-[80%] ps-4">
            <h1 data-aos="fade-down" className="my-5 text-4xl font-bold">
              Our <span className="text-purple-400">Mission</span>
            </h1>
            <p data-aos="zoom-in" className="my-4 text-lg">
              At God's Power Outreach Ministry, we strive to embody Christ's
              love, nurturing a compassionate and inclusive community grounded
              in faith. Our mission is to foster spiritual growth, embrace
              diversity, and ensure everyone feels valued. Guided by God's
              message of love, we're dedicated to making a meaningful impact
              within our congregation and the broader community.
            </p>
            <button
              data-aos="fade-up"
              className="my-5 bg-purple-400 text-white py-3 px-10 rounded-[30px]"
            >
              Join Us
            </button>
          </div>
        </div>
      </section>
      <section id="vision" className="flex mt-5 mb-10 flex-col md:flex-row">
        <div
          data-aos="fade-right"
          className="flex justify-center flex-[2] items-center"
        >
          <div className="w-[80%] ps-4">
            <h1 data-aos="fade-down" className="my-5 text-4xl font-bold">
              Our <span className="text-purple-400">Vision</span>
            </h1>
            <p data-aos="zoom-in" className="my-4 text-lg">
              At God's Power Outreach Ministry, our vision is a vibrant
              community grounded in God's love and grace. We strive for
              inclusivity, fostering a place where diverse backgrounds unite in
              spiritual growth. Guided by Christ's teachings, our vision is a
              congregation actively engaged in impactful worship, fellowship,
              and outreach, extending God's love to all.
            </p>
            <button
              data-aos="fade-up"
              className="my-5 bg-purple-400 text-white py-3 px-10 rounded-[30px]"
            >
              Join Us
            </button>
          </div>
        </div>
        <div className=" p-4 flex flex-[1.5] justify-center items-center">
          <div className="h-[400px] w-[400px]">
            <img
              data-aos="flip-up"
              className="h-full rounded-lg border border-purple-400 border-[3px] shadow-lg shadow-black"
              src="/vision.jpeg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="gallery" className="my-10">
        <h1 data-aos='slide-down' className="text-center my-10 text-5xl">
          Explore our <span className="text-purple-400 font-bold">Gallery</span>
        </h1>
        <div data-aos='slide-up' className="w-2/5 m-auto">
        <p className="text-center text-lg">
          Step into our visual narrative of faith, grace, and community.
          Discover snapshots of our shared journey, moments of worship, and
          heartwarming connections that inspire.
        </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-3 md:p-20 my-10">
          <div data-aos='fade-up' className="">
            <img src="/vision.jpeg" alt="" />
          </div>
          <div data-aos='fade-down' className="bg-green-300">
            <img src="/vision.jpeg" alt="" />
          </div>
          <div data-aos='fade-up' className="bg-green-300">
            <img src="/vision.jpeg" alt="" />
          </div>
          <div data-aos='fade-down' className="bg-green-300">
            <img src="/vision.jpeg" alt="" />
          </div>
          <div data-aos='fade-up' className="bg-green-300">
            <img src="/vision.jpeg" alt="" />
          </div>
          <div data-aos='fade-down' className="bg-green-300">
            <img src="/vision.jpeg" alt="" />
          </div>
        </div>
      </section>
      <section id="events" className="my-10">
        <h1 data-aos='slide-down' className="text-center my-10 text-5xl">
          Upcoming Special <span className="text-purple-400 font-bold">Events</span>
        </h1>
        <div data-aos='slide-up' className="w-2/5 m-auto">
        <p className="text-center text-lg">
        Join us for an upcoming event celebrating fellowship, faith, and community spirit.
        </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-3 md:p-20 my-10">
          <div data-aos='zoom-in' className="p-2">
            <img src="/vision.jpeg" alt="" className="rounded-tr-[20px] rounded-tl-[20px]" />
            <div className="shadow-lg p-3 rounded-[20px]">
              <p className="my-4 font-semibold text-lg">Christmas Programme</p>
              <div className="flex">
                <div className="flex-1">
                  <div data-aos='zoom-in' className="flex p-2 gap-2 items-center">
                  <MdAccessTime cursor={'pointer'} size={20} />
                  09:00 AM
                  </div>
                  <div data-aos='zoom-in' className="flex p-2 gap-2 items-center">
                  <CiLocationOn cursor={'pointer'} size={20} />
                  Awka, Anambra state.
                  </div>
                </div>
                <div className="flex-1">
                  <div data-aos='zoom-out' className="flex p-2 gap-2 items-center">
                  <CiCalendarDate cursor={'pointer'} size={20} />
                  25th Dec, 2023.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos='zoom-in' className="p-2">
            <img src="/vision.jpeg" alt="" className="rounded-tr-[20px] rounded-tl-[20px]" />
            <div className="shadow-lg rounded-[20px] p-3">
              <p className="my-4 font-semibold text-lg">Ekpere Awka North.</p>
              <div className="flex">
                <div className="flex-1">
                  <div data-aos='zoom-in' className="flex p-2 gap-2 items-center">
                  <MdAccessTime cursor={'pointer'} size={20} />
                  09:00 AM
                  </div>
                  <div data-aos='zoom-in' className="flex p-2 gap-2 items-center">
                  <CiLocationOn cursor={'pointer'} size={20} />
                  Awka, Anambra state.
                  </div>
                </div>
                <div className="flex-1">
                  <div data-aos='zoom-out' className="flex p-2 gap-2 items-center">
                  <CiCalendarDate cursor={'pointer'} size={20} />
                  2nd Jan, 2024.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="audio-messages" className="my-10">
        <h1 data-aos='slide-down' className="text-center my-10 text-5xl">
          Our Audio <span className="text-purple-400 font-bold">Messages</span>
        </h1>
        <div data-aos='slide-up' className="w-2/5 m-auto">
        <p className="text-center text-lg">
        Explore our audio messages—inspiring sermons and teachings that nurture your faith journey.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-3 md:p-20 my-10">
          <div className="cursor-pointer relative group rounded-[20px]" data-aos='zoom-in'>
            <div className="absolute group-hover:bg-purple-100 group-hover:opacity-[0.2] h-full w-full transition duration-700 ease-in-out flex justify-center items-center">
            <CiMicrophoneOn className="group-hover:invisible font-bold bg-blacek animate-bounce" size={40} color="white" />
            </div>
            <img src="/vision.jpeg" alt="" className="rounded-[20px]" />
            <div className="shadow-lg p-3">
              <p data-aos='zoom-in' className="my-4">With Christ on His Throne - 04-11-2023</p>
            </div>
          </div>
          <div className="cursor-pointer relative group rounded-[20px]" data-aos='zoom-in'>
            <div className="absolute group-hover:bg-purple-100 group-hover:opacity-[0.2] h-full w-full transition duration-700 ease-in-out flex justify-center items-center">
            <CiMicrophoneOn className="group-hover:invisible font-bold bg-blacek animate-bounce" size={40} color="white" />
            </div>
            <img src="/vision.jpeg" alt="" className="rounded-[20px]" />
            <div className="shadow-lg p-3">
              <p data-aos='zoom-in' className="my-4">With Christ on His Throne2 - 02-11-2024</p>
            </div>
          </div>
        </div>
      </section>
      <section id='contact' className="flex md:p-10 my-10 flex-col md:flex-row">
        <div className="md:ps-20 p-5 flex-1 shadow-lg">
          <h1 className="text-4xl my-4">Contact <span className="text-purple-400">US</span></h1>
          <p className="my-10 text-lg">Connect with us. Our doors are open to support and welcome you into our faith-filled community</p>
          <div>
            <p className="flex my-5 items-center gap-4"><CiLocationOn cursor={'pointer'} size={22} /> Awka Anambra state.</p>
            <p className="flex my-5 items-center gap-4"><HiOutlineMail cursor={'pointer'} size={22} /> godspower@gmail.com</p>
            <p className="flex my-5 items-center gap-4"><MdOutlinePhoneEnabled cursor={'pointer'} size={22} /> +2348145459353</p>
          </div>
        </div>
        <div className="flex-1 md:p-10 p-3 flex flex-col gap-5">
          <input type="text" placeholder="Enter your Full name" className="p-3 rounded-[15px] shadow-lg outline-none" />
          <input type="text" placeholder="Enter your Email" className="p-3 rounded-[15px] shadow-lg outline-none" />
          <textarea name="" id="" cols="30" rows="10" className="p-3 rounded-[15px] outline-none shadow-lg" placeholder="Message..."></textarea>
          <button className="bg-purple-400 text-white py-2 rounded-xl animate-bounce">Send Message</button>
        </div>
      </section>
      <section id="faq" className="md:ps-10 ps-3 mb-10 md:px-20">
        <h1 className="text-4xl">Frequently asked</h1>
        <h1 className="text-purple-400 text-4xl mt-3">Questions</h1>
        
       <FaqItem />
      </section>
    </div>
  );
};

export default Homepage;
