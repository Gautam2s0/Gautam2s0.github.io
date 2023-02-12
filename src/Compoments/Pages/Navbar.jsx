import React, { useState } from "react";
import "../Styles/navbar.css";
import {Link} from "react-scroll"
import resume from "../../doc/Gautam Sonkar-resume.pdf"

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link to="home" smooth={true} offset={-60} className="logo">
          <h2>
            <span>G</span>autam
            <span>S</span>onkar
          </h2>
        </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="home" smooth={true} offset={-60} className="nav__link">
            <p>Home</p>
          </Link>
        </li>
        <li className="nav__item">
          <Link smooth={true} offset={-60} to="about" className="nav__link">
            <p>About</p>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="skills" smooth={true} offset={-60} className="nav__link">
          <p>Skills</p>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="project" smooth={true} offset={-60} className="nav__link">
            <p>Project</p>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="contact" smooth={true} offset={-60} className="nav__link">
            <p>Contact</p>
          </Link>
        </li>
        <li className="nav__item">
          <Link smooth={true} offset={-60} className="nav__link" onClick={()=>{
            window.open(resume)
          }}>
            <p>Resume</p>
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
