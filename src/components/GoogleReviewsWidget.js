import React, { useEffect } from 'react';
import styles from './GoogleReviewsWidget.module.scss';

const GoogleReviewsWidget = ({ placeId }) => {
  // The div ID that Google will look for to embed reviews
  const containerId = `google-reviews-${placeId}`;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/reviews?placeId=${placeId}`);
        const data = await response.json();
        
        const container = document.getElementById(containerId);
        if (container && data.reviews) {
          // Clear previous content
          container.innerHTML = '';
          
          // Show total review count
          const totalReviews = document.createElement('div');
          totalReviews.className = styles.totalReviews;
          totalReviews.textContent = `${data.reviews.length} Reviews`;
          container.appendChild(totalReviews);
          
          // Add each review
          data.reviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = styles.review;
            reviewDiv.innerHTML = `
              <div class=${styles.reviewHeader}>
                <img src="${review.profile_photo_url}" alt="${review.author_name}" class=${styles.authorImage} />
                <div class=${styles.authorInfo}>
                  <div class=${styles.authorName}>${review.author_name}</div>
                  <div class=${styles.rating}>${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</div>
                  <div class=${styles.time}>${review.relative_time_description}</div>
                </div>
              </div>
              <div class=${styles.reviewText}>${review.text}</div>
            `;
            container.appendChild(reviewDiv);
          });
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [placeId]);

  return (
    <div className={styles.widgetContainer}>
      <div id={containerId} className={styles.reviewsContainer} />
    </div>
  );
};

export default GoogleReviewsWidget;
