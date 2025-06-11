import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery app__bg flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Debug Shots" />
        <h1 className="headtext__cormorant">Caffeine Moments</h1>
        <p className="p__opensans" style={{ color: "var(--color-white)", marginTop: '2rem' }}>
          From bug-fixing sips to feature-launching brews — every shot captures a blend of coffee and code. Scroll through the grind.
        </p>
        <button type="button" className="custom__button">See More Beans</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.coffee1, images.cookies, images.coffee2, images.brownie, images.coffee3, images.macarons].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt={`coffee_code_image-${index + 1}`} />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
