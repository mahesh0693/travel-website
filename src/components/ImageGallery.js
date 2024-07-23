import React from "react";
import "./ImageGallery.css";

const ImageGallery = () => {
  return (
    <div className='image-gallery'>
      <div className='image'>
        <img src='image1.jpg' alt='Destination 1' />
      </div>
      <div className='image'>
        <img src='image2.jpg' alt='Destination 2' />
      </div>
      <div className='image'>
        <img src='image3.jpg' alt='Destination 3' />
      </div>
    </div>
  );
};

export default ImageGallery;
