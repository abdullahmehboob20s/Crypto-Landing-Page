import React from "react";

export const Day = ({ day, onClick }) => {
  const className = `day ${day.value === "padding" ? "padding" : ""} ${
    day.isCurrentDay ? "currentDay" : ""
  }`;
  return (
    <div className={`fs-24px weight-5 font-inter white ${className}`}>
      {day.value === "padding" ? "" : day.value}

      {day.event && <div className="event">{day.event.title}</div>}
    </div>
  );
};
