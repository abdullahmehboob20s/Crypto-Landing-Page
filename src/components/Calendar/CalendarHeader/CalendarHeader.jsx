import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export const CalendarHeader = ({ onNext, onBack, dateDisplay }) => {
  return (
    <div id="header">
      <div id="monthDisplay" className="fs-24px white weight-7">
        {dateDisplay}
      </div>
      <div className="cal-header-btns">
        <button onClick={onBack} id="backButton">
          <IoIosArrowBack />
        </button>
        <button onClick={onNext} id="nextButton">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
