import React, { useState } from "react";
import "./Navbar.css";
import BrandLogo from "assets/images/brand-logo.png";
import { Link, NavLink } from "react-router-dom";
import linkedinIcon from "assets/icons/linkedin-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [open, setopen] = useState(false);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={BrandLogo} alt="" />
      </Link>

      <div className="hamburger white" onClick={() => setopen(!open)}>
        <GiHamburgerMenu />
      </div>
      <div className={`navbar-right ${open ? "open" : ""}`}>
        <div className="cross-icon" onClick={() => setopen(false)}>
          <ImCross />
        </div>
        <div className="navbar-links">
          <NavLink
            to="/our-approach"
            className={(navData) =>
              navData.isActive
                ? "active-nav fs-20px white weight-6 pointer"
                : "fs-20px white weight-6 pointer"
            }
          >
            Our Approch
          </NavLink>

          <NavLink
            to="/services"
            className={(navData) =>
              navData.isActive
                ? "active-nav fs-20px white weight-6 pointer"
                : "fs-20px white weight-6 pointer"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/market-report"
            className={(navData) =>
              navData.isActive
                ? "active-nav fs-20px white weight-6 pointer"
                : "fs-20px white weight-6 pointer"
            }
          >
            Market Reports
          </NavLink>
        </div>

        <div className="navbar-btns">
          <a href="#" className="block w-fit-content">
            <img src={linkedinIcon} alt="" />
          </a>

          <NavLink
            to="/contact-us"
            exact
            className="nav-btn fs-20px white weight-6"
          >
            Contact us
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
