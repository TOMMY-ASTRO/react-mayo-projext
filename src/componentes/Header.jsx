import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav-container">
          <div role="button" className="btn">
            <Navbar />
          </div>
          <div role="button" className="btn2">
            <i className="bx bx-pulse"></i>
          </div>
          <div role="button" className="btn3">
            <i className="bx bxs-cookie"></i>
          </div>
        </nav>
        <div className="container2">
          <div className="text">
            <h1>WHOAMI?</h1>
            <h2>I am Joe Morgan</h2>
            <h1>WHAT I WANT IN THIS LIVE?</h1>
            <p>I just want to live and be what i want to be</p>
            <h1 className="año2023">2023</h1>
          </div>
        </div>
      </div>
      <img
        className="mountain2"
        src="https://i.pinimg.com/564x/a8/40/6f/a8406ff705cb883fdcabb3db58387ed8.jpg"
        alt="mountain2"
      />
    </header>
  );
}

export default Header;
