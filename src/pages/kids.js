import '../styles/gallery.css';
import {
  faCircleLeft,
  faCircleRight,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { kids } from '../data';

const Kids = () => {
  const [data, setData] = useState({ img: '', i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = useCallback(
    (action) => {
      let i = data.i;
      if (action === 'next-img') {
        if (i < kids.length - 1) {
          setData((prevData) => ({
            img: kids[prevData.i + 1].src,
            i: prevData.i + 1,
          }));
        }
      } else if (action === 'previous-img') {
        if (i > 0) {
          setData((prevData) => ({
            img: kids[prevData.i - 1].src,
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
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {kids.map((image, i) => (
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
    </div>
  );
};
export default Kids;
