import React, { useState } from "react";
import { Icon } from "semantic-ui-react";


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navigation ${menuOpen ? "open" : ""}`}>
      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <Icon name="bars" size="large" />
      </div>

      {/* Nav links container */}
      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <a href="#svg-id" className="nav-link">Victor</a>
        <a href="#past-work" className="nav-link">Work</a>
        <a href="#github" className="nav-link">Github</a>
        <a href="#about-id" className="nav-link">About</a>
        <a href="#contact-id" className="nav-link">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;