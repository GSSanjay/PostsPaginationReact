import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="section1">
          <h4>Home</h4>

          <ul>
            <li>
              <a href="">ABOUT US </a>
            </li>
            <li>
              <a href="">OUR WORK</a>
            </li>
            <li>
              <a href="">FAQ'S</a>
            </li>
            <li>
              <a href="">HOW WE WORK</a>
            </li>
          </ul>
        </div>

        <div className="section1">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="">Web Design</a>
            </li>
            <li>
              <a href="">Web Development</a>
            </li>
            <li>
              <a href="">Digital Marketing</a>
            </li>
            <li>
              <a href="">Graphic Design</a>
            </li>
            <li>
              <a href="">IT Services</a>
            </li>
          </ul>
        </div>

        <div className="section1">
          <h4>Cotact</h4>

          <ul>
            <li>Address: Suite 6, 17 Comalco Ct Thomastown, 3074</li>
            <li>Telephone: 03 8595 5246</li>
            <li>Email: info@logicsofts.com.au</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
