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

<aside>
      <div className="logo">
        <Link to="home" smooth={true} duration={500}>
          <h1>A.S</h1>
        </Link>
      </div>
</aside>
      

      <div className={`menuIcon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`desktopMenu ${menuOpen ? "active" : ""}`}>
        <Link to="home" smooth={true} duration={500} className="desktopMenuListItem">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="desktopMenuListItem">
          About
        </Link>
        <Link to="service" smooth={true} duration={500} className="desktopMenuListItem">
          Service
        </Link>
         <Link to="portfolio" smooth={true} duration={500} className="desktopMenuListItem">
          Portfolio
        </Link>
        <Link to="blog" smooth={true} duration={500} className="desktopMenuListItem">
          Blog
        </Link>
        <Link to="contact" smooth={true} duration={500} className="desktopMenuListItem">
          Contact
        </Link>
      </div>
    </nav>
    
  );
};

export default NavBar;
