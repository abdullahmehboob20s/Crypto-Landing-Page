import React, { useState } from "react";
import { CalendarHeader } from "./CalendarHeader";
import { Day } from "./Day";
import { useDate } from "./hooks/useDate";
import "./style.css";

const Calendar = () => {
  const [nav, setNav] = useState(0);
  const { days, dateDisplay } = useDate(nav);

  return (
    <>
      <div id="cal-container">
        <CalendarHeader
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)}
        />

        <div id="weekdays">
          <div className="white fs-24px weight-5 inter">Sun</div>
          <div className="white fs-24px weight-5 inter">Mon</div>
          <div className="white fs-24px weight-5 inter">Tue</div>
          <div className="white fs-24px weight-5 inter">Wed</div>
          <div className="white fs-24px weight-5 inter">Thu</div>
          <div className="white fs-24px weight-5 inter">Fri</div>
          <div className="white fs-24px weight-5 inter">Sat</div>
        </div>

        <div id="calendar">
          {days.map((d, index) => (
            <Day key={index} day={d} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
