import Footer from "layouts/Footer/Footer";
import Navbar from "layouts/Navbar/Navbar";
import React, { useEffect } from "react";
import { useRef } from "react";

function Wrapper(props) {
  const wrapperRef = useRef();

  useEffect(() => {
    wrapperRef.current.style.minHeight = window.innerHeight + "px";
  });

  return (
    <div className="wrapper bg-dark-purple" ref={wrapperRef}>
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
