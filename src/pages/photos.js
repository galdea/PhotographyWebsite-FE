import '../styles/horizontalNavbar.css';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import HorizontalNavbar from '../component/horizontalNavbar.js';
import Portraits from './portraits.js';

const Photos = () => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Row>
      <Col className="column">
        <div className="horizontal-menu components-bar" md={expanded ? 1 : 2}>
          {!expanded && <HorizontalNavbar />}
        </div>
      </Col>
      <Col className="column2">
        <button onClick={handleToggle} />
      </Col>
      <Col md={expanded ? 11 : 10}>
        <Portraits />
      </Col>
    </Row>
  );
};

export default Photos;
