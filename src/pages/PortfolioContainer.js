import React, { useState } from "react";
import {NavTabs} from "react-bootstrap";
import AboutHome from "./AboutHome";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "AboutHome") {
      return <AboutHome />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default PortfolioContainer;