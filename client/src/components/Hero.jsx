import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden hidden md:block">
      <video autoPlay muted loop className="absolute inset-0 object-cover object-center w-full h-full z-[-1]">
        <source src="/welcome.mp4" type="video/mp4" />
        {/* Add additional source tags for other video formats if needed */}
        Your browser does not support the video tag.
      </video>
      {/* <img src='/worshiptwo.jpeg' alt="Hero Image" className="block md:hidden object-cover object-center w-full h-full" /> */}
    </div>
  );
};

export default Hero;
