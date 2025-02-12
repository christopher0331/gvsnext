import React, { useState } from 'react';
import { FaStar, FaChevronRight } from 'react-icons/fa';
import styles from './ReviewCard.module.scss';

const ReviewCard = ({ review, location, onReadMore }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar 
        key={index} 
        className={`${styles.star} ${index < rating ? styles.starFilled : styles.starEmpty}`} 
      />
    ));
  };

  const truncateText = (text, maxLength = 180) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <div className={styles.authorInfo}>
          <h4 className={styles.author}>{review.author_name}</h4>
          <span className={styles.locationTag}>{location}</span>
        </div>
        <div className={styles.rating}>
          {renderStars(review.rating)}
        </div>
      </div>
      <p className={styles.reviewText}>
        {truncateText(review.text)}
      </p>
      <div className={styles.reviewFooter}>
        {review.text.length > 180 && (
          <button 
            className={styles.readMore} 
            onClick={() => onReadMore(review)}
          >
            Read More
            <FaChevronRight className={styles.chevron} />
          </button>
        )}
        <p className={styles.reviewDate}>
          {review.relative_time_description}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
