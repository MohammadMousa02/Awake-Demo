import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Booking = () => {
  return (
    <div className="bookingContainer">
      <div className="bookingHeader">
        <div className="insideBooking">
          <h1>Book your table now and experience the best!</h1>
          <a href="https://www.linkedin.com/in/mohammad-mousa-5b7aaa21a/">
            Start Booking
            <FaArrowRight className="arrowIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Booking;