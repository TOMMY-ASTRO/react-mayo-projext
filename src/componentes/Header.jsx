import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav-container">
          <div role="button" className="btn3">
            <i className="bx bxs-cookie"></i>
          </div>
          <div role="button" className="btn2">
            <i className="bx bx-pulse"></i>
          </div>
          <div role="button" className="btn">
            <Navbar />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
