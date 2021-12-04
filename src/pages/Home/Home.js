import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import coinsImg from "assets/images/coins.png";
import Wrapper from "layouts/Wrapper/Wrapper";

function Home() {
  return (
    <Wrapper>
      <div className="home-content py-100px ">
        <div className="home-titles">
          <p className="fs-98px white weight-7 lh-92px">
            Invest in Crypto Now!
          </p>
          <p className="fs-34px white weight-4 lh-51px">
            We develop tailor-fit digital asset investment solutions.
          </p>

          <Link className="fs-24px bg-orange w-fit-content" to="/">
            Get Started <HiOutlineArrowSmRight />
          </Link>
        </div>

        <img className="coins-img" src={coinsImg} alt="" />
      </div>
    </Wrapper>
  );
}

export default Home;
