import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutHome");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
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
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default PortfolioContainer;