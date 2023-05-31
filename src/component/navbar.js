import '../styles/navbar.css';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
  return (
    <header className="sticky-top header">
      <div className="container mx-auto d-flex flex-wrap flex-column flex-md-row align-items-center">
        <nav className="navbar navbar-expand-md sticky-top">
          <a href="/" className="navbar-brand">
            Gabriel Aldea
            <hr className="hr" />
            Photography
          </a>
          <div className="ml-auto">
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
              My Developer Website
            </a>
          </div>
          <div className="ml-auto">
            <a
              href="https://www.instagram.com/gab_aldea/"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} className="" />
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-aldea/"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="" />
            </a>
            <a
              href="https://github.com/galdea"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="" />
            </a>
            <a href="#contact" className="btn contact">
              Contact me
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
