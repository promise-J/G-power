import React, { useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  const menuContent = useRef(null);

  const closeMenuBacklog = (e) => {
    if (e.target != menuContent.current) {
      setShowMenu(false);
    }
  };

  window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
  
    // Calculate the scroll percentage
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
  
    // Calculate the width of the line bar based on the scroll percentage
    const lineWidth = scrollPercent + '%';
  
    // Set the width of the line bar
    document.getElementById('line-bar').style.width = lineWidth;
  });


  return (
    <div className="bg-white h-[90px] fixed top-0 left-0 w-[100%] z-30 flex items-center px-5 justify-between">
      {/* Menu Box */}
      <div
        onClick={(e) => closeMenuBacklog(e)}
        className={`menu-container bg-red-300 fixed w-full h-full top-0 left-0 ${
          !showMenu && "hidden"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          ref={menuContent}
          className="personal-animate bg-white top-0 left-0 fixed w-[80%] h-[100vh] pe-3"
        >
          <MdOutlineClose
            size={35}
            cursor={"pointer"}
            color="black"
            onClick={() => setShowMenu(false)}
            className="absolute  top-8 right-8 font-bold"
          />
          <div className="h-full overflow-auto">
            <div className="mt-[50px]">
              <h1 className="ml-[20px] text-4xl text-purple-900 font-bold">
                God's Power
              </h1>
            </div>
            <ul className="ml-5 sm:ml-10 mt-10 sm:w-2/3 w-full">
              <Link to="/" onClick={() => setShowMenu(false)}>
                <li
                  className={`text-purple-900 border border-white border-1 ${
                    pathname == "/" && "bg-purple-400"
                  } my-5 rounded-lg p-3 w-[90%] font-bold`}
                >
                  Home
                </li>
              </Link>
              <Link to="/about" onClick={() => setShowMenu(false)}>
                <li
                  className={`text-purple-900 border border-white border-1 ${
                    pathname == "/about" && "bg-purple-400"
                  } my-5 rounded-lg p-3 w-[90%] font-bold`}
                >
                  About
                </li>
              </Link>
              <Link to="/mission" onClick={() => setShowMenu(false)}>
                <li
                  className={`text-purple-900 border border-white border-1 ${
                    pathname == "/mission" && "bg-purple-400"
                  } my-5 rounded-lg p-3 w-[90%] font-bold`}
                >
                  Mission
                </li>
              </Link>
              <Link to="/vision" onClick={() => setShowMenu(false)}>
                <li
                  className={`text-purple-900 border border-white border-1 ${
                    pathname == "/vision" && "bg-purple-400"
                  } my-5 rounded-lg p-3 w-[90%] font-bold`}
                >
                  Vision
                </li>
              </Link>
              <Link to="/gallery" onClick={() => setShowMenu(false)}>
                <li
                  className={`text-purple-900 border border-white border-1 ${
                    pathname == "/gallery" && "bg-purple-400"
                  } my-5 rounded-lg p-3 w-[90%] font-bold`}
                >
                  Gallery
                </li>
              </Link>
              <a target="_blank" href="https://www.facebook.com/watch/live/?ref=watch_permalink&v=269758339310297" onClick={() => setShowMenu(false)}>
                <li>
                  <div
                    className={`bg-purple-400 flex justify-center items-center px-3 py-2 w-[90%] rounded-[20px] text-purple-900 cursor-pointer hover:bg-black hover:animate-pulse transition-duration-150`}
                  >
                    <span>Watch Live</span>
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      {/* Menu box ends */}
      <div className="flex justify-center items-center">
        <Link to="/">
          <img className="h-[45px]" src="/globe.jpeg" />
        </Link>
      </div>
      <div className="flex-[9] hidden md:flex justify-end pe-10 h-full">
        <div className="flex items-center gap-10">
          <Link to="/">
            <span
              className={`text-purple-900 font-bold cursor-pointer ${
                pathname == "/" && "underline"
              }`}
            >
              Home
            </span>
          </Link>
          <a href="#about">
            <span
              className={`text-purple-900 cursor-pointer hover:text-black hover:text-lg ${
                pathname == "/about" && "underline"
              }`}
            >
              About
            </span>
          </a>
          <a href="#mission">
            <span
              className={`text-purple-900 cursor-pointer hover:text-black hover:text-lg ${
                pathname == "/mission" && "underline"
              }`}
            >
              Mission
            </span>
          </a>
          <a href="#vision">
            <span
              className={`text-purple-900 cursor-pointer hover:text-black hover:text-lg ${
                pathname == "/vision" && "underline"
              }`}
            >
              Vision
            </span>
          </a>
          <a href="#gallery">
            <span
              className={`text-purple-900 cursor-pointer hover:text-black hover:text-lg ${
                pathname == "/gallery" && "underline"
              }`}
            >
              Gallery
            </span>
          </a>
          <a target="_blank" href="https://www.facebook.com/watch/live/?ref=watch_permalink&v=269758339310297">
            <div className="bg-purple-400 px-3 py-2 rounded-[20px] text-purple-900 cursor-pointer hover:bg-black hover:text-white hover:animate-pulse duration-150 border-black border-3 hover:border hover:border-4 hover:border-white">
              <span>Watch Live</span>
            </div>
          </a>
        </div>
      </div>
      {!showMenu && (
        <FiMenu
          onClick={() => setShowMenu(true)}
          className="block md:hidden transition-all duration-300 ease-in-out"
          size={35}
          cursor={"pointer"}
          color="black"
        />
      )}
      <div id="line-bar"></div>
    </div>
  );
};

export default Header;
