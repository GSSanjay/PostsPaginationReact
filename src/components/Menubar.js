import React from "react";
import "../components/Menubar.css";
import logo from "./blog-logo.png";

const Menubar = () => {
  return (
    <>
      {/* <h1>Menubar</h1> */}
      <nav className="navbar">
        <div className="left">
          <img src={logo} alt="" />
        </div>

        <ul className="menu-items">
          <li>
            <a href="#test">Blogging Tools</a>
          </li>
          <li>
            <a href="#test">Google</a>
          </li>
          <li>
            <a href="#test">Internet Marketing</a>
          </li>
          <li>
            <a href="#test">Our Services</a>
          </li>
          <li>
            <a href="#test">Advertise With Us</a>
          </li>
        </ul>

        <div className="right">
          <button className="btn btn1">Request a Free quote</button>
          <button className="btn btn2">Contact Us</button>
        </div>
      </nav>
    </>
  );
};

export default Menubar;
