import React, { useState } from 'react';
import styles from './FencingTypeCards.module.scss';
import Image from 'next/image';

const FencingTypeCards = ({ name, image, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const displayDescription = showFullDescription ? description : `${description.substring(0, 150)}${description.length > 150 ? '...' : ''}`;

  return (
    <div className={styles.fenceTypeCard}>
      <Image src={image} alt={name} height={1000} width={1000} />
      <h3>{name}</h3>
      <p>
        {displayDescription}
        {description.length > 150 && (
          <button onClick={toggleDescription} className={styles.readMoreButton}>
            {showFullDescription ? 'Read Less' : 'Read More'}
          </button>
        )}
      </p>
    </div>
  );
};

export default FencingTypeCards;
