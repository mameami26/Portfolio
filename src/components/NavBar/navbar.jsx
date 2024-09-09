import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <img
        src="./Screenshot_8-9-2024_133625_www.brandcrowd.com.jpeg" alt="logo" className="logo"/>
     <div className="desktopMenu">
        <Link to="about" smooth={true} duration={500} className="desktopMenuListItem">About Me</Link>
        <Link to="portfolio" smooth={true} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link to="contact" smooth={true} duration={500} className="desktopMenuListItem">Contact Me</Link>
        <Link to="resume" smooth={true} duration={500} className="desktopMenuListItem">Resume</Link>
      </div>
    </nav>
  );
};

export default NavBar;
