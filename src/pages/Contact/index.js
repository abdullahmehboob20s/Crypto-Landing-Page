import Wrapper from "layouts/Wrapper/Wrapper";
import React, { useState } from "react";
import "./Contact.css";
import Calendar from "react-calendar";

function Index() {
  const [value, onChange] = useState(new Date());

  return (
    <Wrapper>
      <div className="contact-wrapper py-100px">
        <div className="contact-content ">
          <div className="contact-content-calendar">
            <Calendar onChange={onChange} value={value} />
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

export default Index;
