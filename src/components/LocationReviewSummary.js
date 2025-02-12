import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './Reviews.module.scss';

const LocationReviewSummary = ({ locationData }) => {
  const renderStars = (rating) => {
    return [...Array(Math.round(rating))].map((_, index) => (
      <FaStar key={index} className={styles.star} />
    ));
  };

  return (
    <div className={styles.locationSummary}>
      <h3 className={styles.locationTitle}>{locationData.name}</h3>
      <div className={styles.locationInfo}>
        <div className={styles.averageRating}>
          <div className={styles.ratingNumber}>
            {(locationData.rating || 0).toFixed(1)}
          </div>
          <div className={styles.ratingStars}>
            {renderStars(locationData.rating)}
          </div>
          <div className={styles.reviewCount}>
            {locationData.user_ratings_total} reviews
          </div>
        </div>
        <div className={styles.locationDetails}>
          <p>{locationData.formatted_address}</p>
          {locationData.formatted_phone_number && (
            <p>{locationData.formatted_phone_number}</p>
          )}
          <a
            href={locationData.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleMapsLink}
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationReviewSummary;
