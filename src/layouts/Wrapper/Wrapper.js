import { useRef } from "react";
import "./Wrapper.css";
import Footer from "layouts/Footer/Footer";
import Navbar from "layouts/Navbar/Navbar";
import React, { useEffect } from "react";

function Wrapper(props) {
  const wrapperRef = useRef(null);
  const { overflow = false } = props;

  useEffect(() => {
    const handler = () => {
      wrapperRef.current.style.minHeight = window?.innerHeight + "px";
    };
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  });

  return (
    <div
      className={`wrapper bg-dark-purple ${overflow ? "overflow" : ""} `}
      ref={wrapperRef}
    >
      <div className="wrapper-body ">
        <Navbar />

        <div className="wrapper_content_body">{props.children}</div>
      </div>

      <div className="mb-20px">
        <Footer />
      </div>
    </div>
  );
}

export default Wrapper;
