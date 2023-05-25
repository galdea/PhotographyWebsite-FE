import '../styles/home.css';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import img35 from '../img/photos/portraits/IMG-35.jpg';

export const Home = () => {
  return (
    <Container>
      <Row>
        <div className="text-center si">
          <h2 className="title1">Under</h2>
          <h2 className="title2">Construction</h2>

          <h4 className="quote">
            Most of my photos are grounded in people. <br />
            I look for the unguarded moment, the essential soul <br />
            peeking out, experience etched on a person’s face.
          </h4>
          <h5 className="author">Steve McCurry</h5>
        </div>
        <div className="image-container">
          <img src={img35} className="img-fluid" alt="Landing Page" />
        </div>
        <div className="animation-container"></div>
      </Row>
    </Container>
  );
};

export default Home;
