import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`NavBar ${scrolled ? "scrolled" : ""}`}>
      <img
        src="./Screenshot_8-9-2024_133625_www.brandcrowd.com.jpeg"
        alt="logo"
        className="logo"
      />

      <div className={`menuIcon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`desktopMenu ${menuOpen ? "active" : ""}`}>
        <Link to="about" smooth={true} duration={500} className="desktopMenuListItem">
          About Me
        </Link>
        <Link to="portfolio" smooth={true} duration={500} className="desktopMenuListItem">
          Portfolio
        </Link>
        <Link to="contact" smooth={true} duration={500} className="desktopMenuListItem">
          Contact Me
        </Link>
        <Link to="resume" smooth={true} duration={500} className="desktopMenuListItem">
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
