import '../styles/navbar.css';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Navbar = () => {
  return (
    <header className="sticky-top header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <nav className="navbar navbar-expand-md sticky-top slide-in">
              <a href="/" className="navbar-brand">
                Gabriel Aldea
                <hr className="navbar-hr" />
                Photography
              </a>
              <Dropdown className="gallery links">
                <Dropdown.Toggle
                  className="dropdown-toggle nav-link links"
                  id="navbarDropdown"
                >
                  Gallery
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                  <Dropdown.Item href="/portraits">Portraits</Dropdown.Item>
                  <Dropdown.Item href="/ofhumannature">
                    Of Human Nature
                  </Dropdown.Item>
                  <Dropdown.Item href="/natura">Natura</Dropdown.Item>
                  <Dropdown.Item href="/kids">Kids</Dropdown.Item>
                  <Dropdown.Item href="/animals">Animals</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <a
                href="https://www.gabrielaldea.com"
                className="nav-link text-white hover:text-secondary links"
                target="_blank"
                rel="noopener noreferrer"
              >
                MyDev Website
              </a>
            </nav>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-end">
              <a
                href="https://www.instagram.com/gab_aldea/"
                className="icon"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-aldea/"
                className="icon"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
              <a
                href="https://github.com/galdea"
                className="icon"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
              </a>
              <a href="#contact" className="btn contact">
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
