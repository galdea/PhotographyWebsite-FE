import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const images = [
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
];

const ReactImageGallery = () => {
  const [data, setData] = useState({ img: '', i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === 'next-img') {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === 'previous-img') {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: '', i: 0 });
    }
  };

  return (
    <>
      {data.img && (
        <div
          style={{
            width: '100%',
            height: '100vh',
            background: 'black',
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <button
            onClick={() => imgAction()}
            style={{ position: 'absolute', top: '10px', right: '10px' }}
          >
            X
          </button>
          <button onClick={() => imgAction('previous-img')}>Previous</button>
          <img
            alt=""
            src={data.img}
            style={{ width: 'auto', maxWidth: '90%', maxHeight: '99%' }}
          />
          <button onClick={() => imgAction('next-img')}>Next</button>
        </div>
      )}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {images.map((image, i) => (
            <img
              alt=""
              key={i}
              src={image}
              style={{ width: '100%', display: 'block', cursor: 'pointer' }}
              onClick={() => viewImage(image, i)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default ReactImageGallery;
