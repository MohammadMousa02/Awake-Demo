import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navBar">
      <a href="#">
        <img src="./assets/awakeLogo.png" alt="awakeLogo" className="mainLogo" />
      </a>
      <div className={`menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#aboutSection">About</a></li>
          <li><a href="#servicesSection">Services</a></li>
          <li><a href="#clientsSection">Clients</a></li>
          <li><Link to="/menu">Menu</Link></li> {/* Navigate to Menu page */}
          <li><a href="#footer">Contact Us</a></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
