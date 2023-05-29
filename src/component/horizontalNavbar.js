import '../styles/horizontalNavbar.css'; // Import the CSS file for styling
import React from 'react';

const HorizontalNavbar = () => {
  return (
    <nav className="navbar-nav horizontal-navbar">
      <a className="nav-link" href="/portraits">
        Portraits
      </a>
      <a className="nav-link" href="/ofhumannature">
        Of human nature
      </a>
      <a className="nav-link" href="/natura">
        Natura
      </a>
      <a className="nav-link" href="/kids">
        Kids
      </a>
      <a className="nav-link" href="/animals">
        Animals
      </a>
    </nav>
  );
};

export default HorizontalNavbar;
