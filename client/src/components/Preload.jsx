import React from "react";
import TypingEffect from "./TypingEffect";

const Preload = () => {
  return (
    <div className="pre-load h-[100vh] flex gap-2 flex-col">
      <TypingEffect textArr={['GET READY!!!', 'TO ENCOUNTER!']} classList='md:text-[120px] text-6xl md:mb-5' />
      {/* https://cdn.dribbble.com/users/1496969/screenshots/16581303/media/e5dbcac76110abd80e5f12598f439060.mp4 */}
      <video className="w-full md:w-[80%] h-[60%]" autoPlay loop muted>
        <source src="https://cdn.dribbble.com/users/1496969/screenshots/16581303/media/e5dbcac76110abd80e5f12598f439060.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  );
};

export default Preload;
