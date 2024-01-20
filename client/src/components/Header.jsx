import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {pathname} = useLocation()


  return (
    <div className="bg-blue-900 h-[90px] absolute top-0 left-0 w-[100%] z-10 flex items-center px-5 justify-between">
      {/* Menu Box */}
      {showMenu && (
        <div className="bg-blue-900 top-0 left-0 fixed w-[95%] h-[100vh] pe-3">
          <MdOutlineClose
            size={35}
            cursor={"pointer"}
            color="white"
            onClick={() => setShowMenu(false)}
            className="absolute top-10 right-8 font-bold"
          />
          <div className="h-full overflow-auto">
            <div className="mt-[50px]">
              <h1 className="ml-[40px] text-4xl text-white font-bold">
                God's Power
              </h1>
            </div>
            <ul className="ml-5 sm:ml-10 mt-10 sm:w-2/3 w-full">
              <Link to="/" onClick={()=> setShowMenu(false)}>
                <li className={`text-white border border-white border-1 ${pathname == '/' && 'bg-purple-400'} my-5 rounded-lg p-3 w-[90%] font-bold`}>
                  Home
                </li>
              </Link>
              <Link to="/about" onClick={()=> setShowMenu(false)}>
                <li className={`text-white border border-white border-1 ${pathname == '/about' && 'bg-purple-400'} my-5 rounded-lg p-3 w-[90%] font-bold`}>
                  About
                </li>
              </Link>
              <Link to="/mission" onClick={()=> setShowMenu(false)}>
                <li className={`text-white border border-white border-1 ${pathname == '/mission' && 'bg-purple-400'} my-5 rounded-lg p-3 w-[90%] font-bold`}>
                  Mission
                </li>
              </Link>
              <Link to="/vision" onClick={()=> setShowMenu(false)}>
                <li className={`text-white border border-white border-1 ${pathname == '/vision' && 'bg-purple-400'} my-5 rounded-lg p-3 w-[90%] font-bold`}>
                  Vision
                </li>
              </Link>
              <Link to="/gallery" onClick={()=> setShowMenu(false)}>
                <li className={`text-white border border-white border-1 ${pathname == '/gallery' && 'bg-purple-400'} my-5 rounded-lg p-3 w-[90%] font-bold`}>
                  Gallery
                </li>
              </Link>
              <Link to="/watch-live" onClick={()=> setShowMenu(false)}>
                <li>
                  <div className={`bg-purple-400 flex justify-center items-center px-3 py-2 w-[90%] rounded-[20px] text-white cursor-pointer hover:bg-black hover:animate-pulse transition-duration-150`}>
                    <span>Watch Live</span>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}

      {/* Menu box ends */}
      <div className="flex justify-center items-center">
        <Link to='/'>
          <img src="/vite.svg" />
        </Link>
      </div>
      <div className="flex-[9] hidden md:flex justify-end pe-10 h-full">
        <div className="flex items-center gap-10">
          <Link to="/">
            <span className={`text-purple-100 font-bold cursor-pointer ${pathname == '/' && 'underline'}`}>
              Home
            </span>
          </Link>
          <Link to="/about">
            <span className={`text-white cursor-pointer hover:text-black hover:text-lg ${pathname == '/about' && 'underline'}`}>
              About
            </span>
          </Link>
          <Link to="/mission">
            <span className={`text-white cursor-pointer hover:text-black hover:text-lg ${pathname == '/mission' && 'underline'}`}>
              Mission
            </span>
          </Link>
          <Link to="/vision">
            <span className={`text-white cursor-pointer hover:text-black hover:text-lg ${pathname == '/vision' && 'underline'}`}>
              Vision
            </span>
          </Link>
          <Link to="/gallery">
            <span className={`text-white cursor-pointer hover:text-black hover:text-lg ${pathname == '/gallery' && 'underline'}`}>
              Gallery
            </span>
          </Link>
          <Link to="/watch-live">
            <div className="bg-purple-400 px-3 py-2 rounded-[20px] text-white cursor-pointer hover:bg-black hover:animate-pulse duration-150 border-black border-3 hover:border hover:border-4 hover:border-white">
              <span>Watch Live</span>
            </div>
          </Link>
        </div>
      </div>
      {!showMenu && (
        <FiMenu
          onClick={() => setShowMenu(true)}
          className="block md:hidden transition-all duration-300 ease-in-out"
          size={35}
          cursor={"pointer"}
          color="white"
        />
      )}
    </div>
  );
};

export default Header;
