import React, { useState } from 'react';
import "../App.css";
import Navbar from './Navbar';
import About from './User';
import Portfolio from './Portfolio';
import ContactPage from '../pages/ContactPage';
import Footer from "./Footer";
import Resume from "../pages/ResumePage";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {

    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'ContactPage') {
      return <ContactPage />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <div className="mainContent">
       {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
