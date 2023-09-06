import React from "react";
import "../Navbar.css";


function Navbar({ currentPage, handlePageChange }) {
  return(
    <nav className="navbar">
      <ul className="navbar_list">
        <li className ="navbar_item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'navbar_link' : 'navbar_link'}
          >Beth L. Haynes</a>
        </li>
        <li className="navbar_item">
          <a 
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navbar_link
          className={currentPage === 'About' ? 'navbar_link active' : 'navbar_link'}
          >About Me</a>
        </li>
        <li className="navbar_item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Portfolio' ? 'navbar_link active' : 'navbar_link'}
          >Portfolio</a>
        </li>
        <li className="navbar_item">
          <a 
          href="#contactpage"
          onClick={() => handlePageChange('ContactPage')}
          // Check to see if the currentPage is `ContactPage`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navbar_link
          className={currentPage === 'ContactPage' ? 'navbar_link active' : 'navbar_link'}
          >Contact</a>
        </li>
        <li className="navbar_item">
          <a 
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'navbar_link active' : 'navbar_link'}
          >Resume</a>
        </li>
      
      </ul>
      
    </nav>
  );
}

export default Navbar;