import '../styles/navbar.css';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky-top header">
      <div className="container mx-auto d-flex flex-wrap flex-column flex-md-row align-items-center">
        <a href="/" className="navbar-brand my-0 text-white">
          Gabriel Aldea
          <hr className="my-0 mr-1" />
          Photography
        </a>

        <nav className="mr-auto ml-4 py-1 pl-4 border-left border-secondary d-flex flex-wrap align-items-center">
          <a
            href="/photos"
            className="nav-link text-white mx-5 hover:text-secondary links"
          >
            Gallery
          </a>
          <a
            href="https://www.gabrielaldea.com"
            className="nav-link text-white hover:text-secondary links"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Developer Landing Page
          </a>
        </nav>
        <div className="ms-auto icons">
          <a
            href="https://www.instagram.com/gab_aldea/"
            className="text-white mx-3"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} className="fs-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-aldea/"
            className="text-white mx-2"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="fs-4" />
          </a>
          <a
            href="https://github.com/galdea"
            className="text-white mx-3"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="fs-4" />
          </a>
        </div>

        <a href="#contact" className="btn contact">
          Contact me
        </a>
      </div>
    </header>
  );
};

export default Navbar;
