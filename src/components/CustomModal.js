import React, { useState } from 'react';
import '../app/portfolio.css';

const Modal = ({ show, handleClose, currentProjectId, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`}>
        
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <div className="modal-button-container">
          <button className="prev-btn" onClick={handlePrev}>
            Prev
          </button>
          <button className="next-btn" onClick={handleNext}>
            Next
          </button>
        </div>
        <div className="modal-image-container">
          <img src={images[currentIndex]} alt="" className="modal-image" />
        </div>
        <div className="thumbnail-grid">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Modal;