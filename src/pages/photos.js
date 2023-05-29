import '../styles/horizontalNavbar.css';
import { faAviato } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import HorizontalNavbar from '../component/horizontalNavbar.js';

const Photos = () => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Row>
      <Col md={expanded ? 1 : 2} className="navbar">
        <Row className="horizontal-menu">
          <Col className="components-bar">
            {!expanded && <HorizontalNavbar />}
          </Col>
          <Col className="toggle-bar">
            <button onClick={handleToggle}></button>
          </Col>
        </Row>
      </Col>
      <Col md={expanded ? 11 : 10}>
        <Row>
          <Col>
            <div>Carousel</div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Photos;
