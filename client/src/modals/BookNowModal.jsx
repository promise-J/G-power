import React from "react";
import useBookNowStore from "../zustard/BookNowStore";



const BookNowModal = () => {
  const bookNowStore = useBookNowStore()

  const closeModal = ()=>{
    bookNowStore.onClose()
  }

  return (
    <div className="fixed top-0 left-0 bg-gray-400 z-40 h-full w-full flex py-8 justify-center">
      <div className="bg-white md:p-10 md:w-1/2 flex flex-col gap-5">
        <div className="shadow-lg flex-1">
          <h2 className="text-center text-lg md:text-3xl text-uppercase font-semibold">
            APPOINTMENT TIME
          </h2>
          <div className="border py-3 mt-5">
            <div className="flex items-center justify-center gap-10">
              <h3>Pick a date?</h3>
              <input type="date" id="date-input" className="animate-bounce cursor-pointer" />
              
            </div>
            <div>
              <h6 className="text-center mt-4">23 January, 2024 (Tuesday)</h6>
            </div>
          </div>
          <div className="border mt-5 py-3">
            <div className="flex items-center justify-center gap-10">
              <h3>Pick a time?</h3>
              <input type="time" className="cursor-pointer animate-bounce" id="time-input" />
            </div>
            <div>
              <h6 className="text-center mt-4">09:00 WAT</h6>
            </div>
          </div>
        </div>
        <div className="p-4 flex justify-around gap-10">
          <button onClick={closeModal} className="bg-purple-400 text-white py-3 px-4 flex-1 rounded-lg">
            Cancel
          </button>
          <button className="bg-purple-400 text-white py-3 px-4 flex-1 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookNowModal;
