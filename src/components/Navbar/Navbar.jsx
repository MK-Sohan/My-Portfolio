import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
   <div className="navebar">
      <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">PortFolio</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="servicesid"  spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            {/* <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li> */}
            <li>
              <Link to="idofportfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            {/* <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li> */}
          </ul>
        </div>
       
        <a href="https://drive.google.com/uc?export=download&id=1IwGcClihmfoOKBaY7RYMZi5jLtR3qtq2" download>
        <button className="button n-button">Download Resume</button>
        </a>

       
      </div>
    </div>
   </div>
  );
};

export default navbar;
