import React from "react";
import "../Navbar.css";


function Navbar() {
  return(
    <nav className="navbar">
      <ul className="navbar_list">
        <li className ="navbar_item">
          <a href="/" className="navbar_link">Beth L. Haynes</a>
        </li>
        <li className="navbar_item">
          <a href="/about" className="navbar_link">About Me</a>
        </li>
        <li className="navbar_item">
          <a href="/portfolio" className="navbar_link">Portfolio</a>
        </li>
        <li className="navbar_item">
          <a href="/contact" className="navbar_link">Contact</a>
        </li>
        <li className="navbar_item">
          <a href="/resume" className="navbar_link">Resume</a>
        </li>
      
      </ul>
      
    </nav>
  );
}

export default Navbar;