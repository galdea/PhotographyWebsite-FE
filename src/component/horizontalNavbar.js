import '../styles/horizontalNavbar.css'; // Import the CSS file for styling
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const HorizontalNavbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <Row>
      <Col md={10} className={`navbar ${navbarVisible ? '' : 'hidden'}`}>
        <nav className="navbar-nav">
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
      </Col>
      <Col md={2} onClick={toggleNavbar}>
        <div> C </div>
      </Col>
    </Row>
  );
};

export default HorizontalNavbar;
