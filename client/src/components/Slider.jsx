import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import TypingEffect from "./TypingEffect";


const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <div className="block md:hidden">
      <AutoplaySlider
        animation="cubeAnimation"
        play={true}
        interval={3000}
        style={{ height: "84vh" }}
        cancelOnInteraction={false}
      >
        
        <div data-src="/worshiptwo.jpeg">
          <div className="absolute left-1 w-[90%] h-[100%] top-0 flex justify-center items-center">
            <div data-aos='fade-left' className="text-white bg-whitefe h-1/2 w-full md:text-center flex flex-col justify-around opacity-[.7] md:p-5 p-2 rounded-2xl">
              <p className="text-3xl mb-5">
                <span className="text-purple-400">Join</span> us every Thursday at 9:00am
              </p>
              <TypingEffect textArr={['<span className="text-purple-400">WELCOME</span>', "WE'RE GLAD YOU ARE HERE"]} classList='md:text-[120px] text-5xl md:mb-5' />
            </div>
          </div>
        </div>
        {/*
        <div data-src="/worship2.jpeg">
          <div className="absolute left-1 w-[90%] h-[100%] top-0 flex justify-center items-center">
            <div data-aos='fade-left' className="text-white md:h-1/2 md:text-center flex flex-col justify-center opacity-[.7] p-5 rounded-2xl">
              <p className="text-3xl mb-5">
                <span className="text-purple-400">Join</span> us every Sunday at 9:00am
              </p>
              <TypingEffect textArr={['LOVE', 'GOD IS LOVE']} classList='md:text-[120px] text-6xl md:mb-5' />
              {/* <p>
                Embrace the Power of Unity: Explore a Community Rooted in Faith,
                Enriched by Fellowship, and United in Compassionate Service
              </p>
            </div>
          </div>
        </div>
       
        <div data-src="/header1.png">
          <div className="absolute left-1 w-[90%] h-[100%] top-0 flex justify-center items-center">
            <div data-aos='fade-left' className="text-white md:h-1/2 md:text-center flex flex-col justify-center opacity-[.7] p-5 rounded-2xl">
              <p className="text-3xl mb-5">
                <span className="text-purple-400">Join</span> us every Sunday at 9:00am
              </p>
              <TypingEffect textArr={['POWER', 'TOUCH NOT!']} classList='md:text-[120px] text-6xl md:mb-5' />
              {/* <p>
                Embrace the Power of Unity: Explore a Community Rooted in Faith,
                Enriched by Fellowship, and United in Compassionate Service
              </p>
            </div>
          </div>
        </div>
        */}
      </AutoplaySlider>
    </div>
  );
};

export default Slider;

// import {
//     CCarousel,
//     CCarouselCaption,
//     CCarouselItem,
//     CImage,
//   } from "@coreui/react";
//   import "@coreui/coreui/dist/css/coreui.min.css";
//   // import "bootstrap/dist/css/bootstrap.min.css";
//   import fashion2 from "/l.jpg";
//   import fashion1 from "/j.png";
//   import blackfriday1 from "/l.jpg";
//   import blackfriday2 from "/j.png";
//   import { Link } from "react-router-dom";
//   import React, { useState } from "react";

//   import "../stylesheets/slider.css"

//   const Slider = () => {
//     const slides = [
//       {
//         image: fashion2,
//         title: "Number one Sales",
//         desc: "",
//         link: "/category1",
//       },
//       {
//         image: fashion1,
//         title: "Number two Sales",
//         desc: "",
//         link: "/category2",
//       },
//       {
//         image: blackfriday2,
//         title: "Number three Sales",
//         desc: "",
//         link: "/category3",
//       },
//       {
//         image: blackfriday1,
//         title: "Number four Sales",
//         desc: "",
//         link: "/category4",
//       },
//     ];

//     const [hoveredIndex, setHoveredIndex] = useState(true);

//     return (
//       <div  className={`w-10/12 max-h-[60vh] m-auto  ${hoveredIndex ? "blacked" : ""} bg-red-300 p-4`}>
//         <CCarousel
//           controls
//           indicators
//           interval={3000}
//           wrap={true}
//           transition="crossfade"
//           className="rounded"
//         >
//           {slides.map((item, index) => (
//             <CCarouselItem
//               key={index}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* <CImage
//                 className={`block w-full max-h-[60vh] ${
//                   hoveredIndex === index ? "hovered" : ""
//                 }`}
//                 src={item.image}
//                 alt={`slide ${index + 1}`}
//               /> */}
//               <img src={item.image} alt="all" className="max-h-[40vh] w-[40vw]" />
//               <CCarouselCaption className="hidden md:block bg-red-300">
//                 <Link
//                   to={item.link}
//                   className={`category-link text-white no-underline mb-5 ${
//                     hoveredIndex === index ? "visible" : ""
//                   }`}
//                 >
//                   Shop now
//                 </Link>
//                 <h2>{item.title}</h2>
//                 <p>{item.desc}</p>
//               </CCarouselCaption>
//             </CCarouselItem>
//           ))}
//         </CCarousel>
//       </div>
//     );
//   };

//   export default Slider;
