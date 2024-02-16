import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './app/globals.css';

const FeaturedProject = ({ projectNumber, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="modal-content">
      <div className="modal-image-container">
        <img
          src={images[currentImageIndex]}
          className="modal-image"
          alt={`Project ${projectNumber}`}
          onClick={handleImageClick}
        />
        <button className="next-arrow" onClick={handleImageClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default FeaturedProject;