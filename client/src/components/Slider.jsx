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
      </AutoplaySlider>
    </div>
  );
};

export default Slider;
