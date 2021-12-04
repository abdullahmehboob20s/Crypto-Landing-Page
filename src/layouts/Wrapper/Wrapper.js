import Footer from "layouts/Footer/Footer";
import Navbar from "layouts/Navbar/Navbar";
import React from "react";

function Wrapper(props) {
  return (
    <div className="wrapper bg-dark-purple">
      <div className="wrapper-body mb-20px">
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
