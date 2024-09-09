import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <img
        src="./Screenshot_8-9-2024_133625_www.brandcrowd.com.jpeg" alt="logo" className="logo"/>
      <div className="descktopMenu">
        <Link className="desktopMenuListItem">About me</Link>
        <Link className="desktopMenuListItem">Porfolio</Link>
        <Link className="desktopMenuListItem">Contact me</Link>
        <Link className="desktopMenuListItem">Resume</Link>
      </div>
    </nav>
  );
};

export default NavBar;
