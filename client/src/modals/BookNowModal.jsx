import React, { useState } from "react";
import useBookNowStore from "../zustard/BookNowStore";

const initialState = {
  date: "",
  time: "",
  fTime: "",
  fDate: ""
};

const BookNowModal = () => {
  const bookNowStore = useBookNowStore();
  const [bookingDetails, setBookingDetails] = useState(initialState);
  const { date, time } = bookingDetails;

  const closeModal = () => {
    bookNowStore.onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ [name]: value });
  };

  function formatTimeString(string) {
    const inputTime = "09:00"; // Sample input time in HH:MM format
    const time = new Date(`${date}T${inputTime}:00`);

    // Options for formatting the time
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZoneName: "short",
    };

    // Formatting the time using toLocaleTimeString()
    const formattedTime = time.toLocaleTimeString("en-US", options);
    console.log(formattedTime);
    return formattedTime;
  }

  function formatDateString(string) {
    const inputDate = string;
    const date = new Date(inputDate);

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formattedDate = date.toLocaleDateString("en-GB", options);

    setBookingDetails({...bookingDetails, fDate: formattedDate})
    return formattedDate;
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
              <input
                name="date"
                value={date}
                onChange={handleChange}
                type="date"
                id="date-input"
                className={`animate-bounce ${!date && "cursor-pointer"}`}
              />
            </div>
            <div>
              <h6 className="text-center mt-4">
                {date && bookingDetails?.fDate}
              </h6>
            </div>
          </div>
          <div className="border mt-5 py-3">
            <div className="flex items-center justify-center gap-10">
              <h3>Pick a time?</h3>
              <input
                name="date"
                value={date}
                onChange={handleChange}
                type="time"
                className={`cursor-pointer ${!time && "animate-bounce"}`}
                id="time-input"
              />
            </div>
            <div>
              <h6 className="text-center mt-4">
                {time && formatTimeString(time)}
              </h6>
            </div>
          </div>
        </div>
        <div className="p-4 flex justify-around gap-10">
          <button
            onClick={closeModal}
            className="bg-purple-400 text-white py-3 px-4 flex-1 rounded-lg"
          >
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
