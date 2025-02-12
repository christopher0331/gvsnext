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
      <h3 className={styles.locationTitle}>
        <span className={styles.companyName}>GreenView Solutions</span>
        <span className={styles.locationName}>{locationData.location}</span>
      </h3>
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
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationData.formatted_address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.addressLink}
          >
            {locationData.formatted_address}
          </a>
          {locationData.formatted_phone_number && (
            <a
              href={`tel:${locationData.formatted_phone_number.replace(/[^0-9]/g, '')}`}
              className={styles.phoneLink}
            >
              {locationData.formatted_phone_number}
            </a>
          )}
          <a
            href={locationData.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleMapsLink}
          >
            View on Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationReviewSummary;
