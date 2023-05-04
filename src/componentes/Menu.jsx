import React, { useState } from "react";

function Menu() {
  const [showHome, setShowHome] = useState(true);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showContactMe, setShowContacMe] = useState(false);
  const [showPortafolio, setShowPortafolio] = useState(false);

  return (
    <div>
      <div className="menu-icon" onClick={() => setShowHome(true)}>
        Home
      </div>
      <div className="menu-icon" onClick={() => setShowAboutMe(true)}>
        About Me
      </div>
      <div className="menu-icon" onClick={() => setShowContacMe(true)}>
        Contact Me 
      </div>
      <div className="menu-icon" onClick={() => setShowPortafolio(true)}>
        Portfafolio
      </div>
      {showHome && <div>Home Page</div>}
      {showAboutMe && <div>About Me Page</div>}
      {showContactMe && <div>Contact Me Page</div>}
      {showPortafolio && <div>PORTAFOLIO</div>}
    </div>
  );
}

export default Menu;
