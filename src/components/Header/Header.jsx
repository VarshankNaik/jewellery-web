import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const images = ['shop.jpeg', 'shop2.jpeg', 'shop3.jpeg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className='header'
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="header-contents">
        <h1>Buy your favourite Jewellery</h1>
        {/* <p>
          Cars have revolutionized transportation, shaping the modern world in profound ways.
          These mechanical marvels offer unparalleled convenience, enabling swift travel over
          vast distances while providing a sense of autonomy and freedom...
        </p> */}
      </div>
    </div>
    
  );
};

export default Header;
