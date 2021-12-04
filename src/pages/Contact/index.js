import Calendar from "components/Calendar/CalendarComponent";
import Wrapper from "layouts/Wrapper/Wrapper";
import React from "react";
import "./Contact.css";

function index() {
  return (
    <Wrapper>
      <div className="contact-wrapper py-100px">
        <div className="contact-content ">
          <div className="contact-content-calendar">
            <Calendar />
          </div>
          <div className="contact-content-right">
            <input
              className="fs-20px weight-7"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="fs-20px weight-7"
              type="text"
              placeholder="Enter a valid email address"
            />
            <input
              className="fs-20px weight-7"
              type="text"
              placeholder="Contact reason"
            />
            <textarea
              placeholder="Enter your message here"
              className="fs-20px weight-7"
            ></textarea>
            <button className="fs-20px weight-7 pointer" type="button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
