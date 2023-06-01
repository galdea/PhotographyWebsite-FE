import React from 'react';
import { Carousel } from 'react-bootstrap';
import homeImage from '../img/photos/portraits/IMG-35.jpg';

const Home = () => {
  return (
    <div className="home-container slide-in">
      <Carousel controls={false} indicators={false} fade>
        <Carousel.Item>
          <img className="d-block w-100" src={homeImage} alt="Home" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
