import '../styles/gallery.css';
import {
  faCircleLeft,
  faCircleRight,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import HorizontalNavbar from '../component/horizontalNavbar';
import img0 from '../img/photos/portraits/IMG-0.jpg';
import img11 from '../img/photos/portraits/IMG-11.jpg';
import img20 from '../img/photos/portraits/IMG-20.jpg';
import img29 from '../img/photos/portraits/IMG-29.jpg';
import img30 from '../img/photos/portraits/IMG-30.jpg';
import img35 from '../img/photos/portraits/IMG-35.jpg';
import img36 from '../img/photos/portraits/IMG-36.jpg';
import img42 from '../img/photos/portraits/IMG-42.jpg';
import img44 from '../img/photos/portraits/IMG-44.jpg';
import img48 from '../img/photos/portraits/IMG-48.jpg';
import img5 from '../img/photos/portraits/IMG-5.jpg';
import img53 from '../img/photos/portraits/IMG-53.jpg';
import img56 from '../img/photos/portraits/IMG-56.jpg';
import img57 from '../img/photos/portraits/IMG-57.jpg';
import img8 from '../img/photos/portraits/IMG-8.jpg';

const images = [
  {
    src: img0,
    width: 800,
    height: 600,
  },
  {
    src: img5,
    width: 1600,
    height: 900,
  },
  {
    src: img8,
    width: 1600,
    height: 900,
  },
  {
    src: img11,
    width: 1600,
    height: 900,
  },
  {
    src: img20,
    width: 1600,
    height: 900,
  },
  {
    src: img29,
    width: 800,
    height: 600,
  },
  {
    src: img30,
    width: 1600,
    height: 900,
  },
  {
    src: img35,
    width: 1600,
    height: 900,
  },
  {
    src: img36,
    width: 1600,
    height: 900,
  },
  {
    src: img42,
    width: 1600,
    height: 900,
  },
  {
    src: img44,
    width: 800,
    height: 600,
  },
  {
    src: img48,
    width: 1600,
    height: 900,
  },
  {
    src: img53,
    width: 1600,
    height: 900,
  },
  {
    src: img56,
    width: 1600,
    height: 900,
  },
  {
    src: img57,
    width: 1600,
    height: 900,
  },
];

const Portraits = () => {
  const [data, setData] = useState({ img: '', i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = useCallback(
    (action) => {
      let i = data.i;
      if (action === 'next-img') {
        if (i < images.length - 1) {
          setData((prevData) => ({
            img: images[prevData.i + 1].src,
            i: prevData.i + 1,
          }));
        }
      } else if (action === 'previous-img') {
        if (i > 0) {
          setData((prevData) => ({
            img: images[prevData.i - 1].src,
            i: prevData.i - 1,
          }));
        }
      } else {
        setData({ img: '', i: 0 });
      }
    },
    [data.i],
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) {
        // Left arrow key
        imgAction('previous-img');
      } else if (event.keyCode === 39) {
        // Right arrow key
        imgAction('next-img');
      } else if (event.keyCode === 27) {
        // Escape key
        imgAction();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [imgAction]);

  return (
    <div>
      <Row>
        <Col md={2}>
          <HorizontalNavbar />
        </Col>
        <Col md={10}>
          {data.img && (
            <div className="overlay-container">
              <span
                onClick={() => imgAction()}
                style={{ position: 'absolute', top: '10px', right: '10px' }}
              >
                <FontAwesomeIcon icon={faXmark} className="fs-1" />
              </span>
              <span onClick={() => imgAction('previous-img')}>
                <FontAwesomeIcon icon={faCircleLeft} className="fs-1" />
              </span>
              <img
                alt=""
                src={data.img}
                style={{ width: 'auto', maxWidth: '90%', maxHeight: '99%' }}
              />
              <span onClick={() => imgAction('next-img')}>
                <FontAwesomeIcon icon={faCircleRight} className="fs-1" />
              </span>
            </div>
          )}
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="10px">
              {images.map((image, i) => (
                <img
                  alt=""
                  key={i}
                  src={image.src}
                  style={{ width: '100%', display: 'block', cursor: 'pointer' }}
                  onClick={() => viewImage(image.src, i)}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Col>
      </Row>
    </div>
  );
};
export default Portraits;
