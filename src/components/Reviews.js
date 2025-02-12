import React, { useState, useEffect } from 'react';
import styles from './Reviews.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaStar } from 'react-icons/fa';
import Head from 'next/head';
import ReviewCard from './ReviewCard';
import LocationReviewSummary from './LocationReviewSummary';

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [locations, setLocations] = useState({
    boulder: {
      reviews: [],
      rating: 0,
      user_ratings_total: 0,
      name: '',
      formatted_address: '',
      formatted_phone_number: '',
      website: '',
      url: '',
      currentPage: 1,
      location: 'Boulder'
    },
    arvada: {
      reviews: [],
      rating: 0,
      user_ratings_total: 0,
      name: '',
      formatted_address: '',
      formatted_phone_number: '',
      website: '',
      url: '',
      currentPage: 1,
      location: 'Arvada'
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const reviewsPerPage = 6;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Raw API response:', data);

        if (data.error) {
          throw new Error(data.error);
        }

        // Validate the data structure
        if (!data.boulder || !data.arvada) {
          throw new Error('Invalid data structure received from API');
        }

        setLocations(data);
      } catch (err) {
        setError('Failed to load reviews. Please try again later.');
        console.error('Error fetching reviews:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    console.log('Current locations state:', locations);
  }, [locations]);

  const getAllReviews = () => {
    const allReviews = [];
    Object.entries(locations).forEach(([location, data]) => {
      if (data?.reviews) {
        const reviewsWithLocation = data.reviews
          .filter(review => review.rating >= 3) // Only include reviews with 3 stars or more
          .map(review => ({
            ...review,
            locationName: location === 'boulder' ? 'Boulder' : 'Arvada'
          }));
        allReviews.push(...reviewsWithLocation);
      }
    });
    return allReviews;
  };

  const getCurrentPageReviews = () => {
    const allReviews = getAllReviews();
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    return allReviews.slice(indexOfFirstReview, indexOfLastReview);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };



  const generateStructuredData = () => {
    const locationNames = ['boulder', 'arvada'];
    return locationNames.map(location => {
      const locationData = locations[location];
      if (!locationData || !locationData.reviews) return null;

      const reviewsData = locationData.reviews.map(review => ({
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': review.author
        },
        'datePublished': review.date,
        'reviewBody': review.review,
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': review.rating,
          'bestRating': 5
        }
      }));

      return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': locationData.name,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': locationData.formatted_address
        },
        'telephone': locationData.formatted_phone_number,
        'url': locationData.website,
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': locationData.rating.toFixed(1),
          'reviewCount': locationData.user_ratings_total
        },
        'review': reviewsData
      };
    });
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
        />
      </Head>

      <section className={styles.reviewsSection}>


        {/* Reviews Section */}
        <div className={styles.allReviewsSection}>
          <h2 className={styles.title}>What Our Clients Say</h2>
          {/* Location Summaries Section */}
          <div className={styles.locationSummaries}>
            {['boulder', 'arvada'].map(location => {
              const locationData = locations[location];
              if (!locationData) return null;
              return (
                <div key={location} className={styles.locationColumn}>
                  <LocationReviewSummary locationData={locationData} />
                </div>
              );
            })}
          </div>
          {loading ? (
            <div className={styles.loading}>Loading reviews...</div>
          ) : error ? (
            <div className={styles.error}>{error}</div>
          ) : (
            <>
              <>
                <div className={styles.reviewsGrid}>
                  {getCurrentPageReviews().map((review) => (
                    <motion.div
                      key={review.id}
                      className={styles.reviewItem}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ReviewCard
                        review={review}
                        location={review.locationName}
                        onReadMore={(review) => {
                          setSelectedReview(review);
                          setIsModalOpen(true);
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Review Modal */}
                <AnimatePresence>
                  {isModalOpen && selectedReview && (
                    <motion.div
                      className={styles.modalOverlay}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setIsModalOpen(false)}
                    >
                      <motion.div
                        className={styles.modalContent}
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          className={styles.closeButton}
                          onClick={() => setIsModalOpen(false)}
                        >
                          <FaTimes />
                        </button>
                        <div className={styles.modalHeader}>
                          <div className={styles.modalAuthorInfo}>
                            <h3>{selectedReview.author_name}</h3>
                            <span className={styles.modalLocation}>{selectedReview.locationName}</span>
                          </div>
                          <div className={styles.modalRating}>
                            {[...Array(5)].map((_, index) => (
                              <FaStar
                                key={index}
                                className={index < selectedReview.rating ? styles.starFilled : styles.starEmpty}
                              />
                            ))}
                          </div>
                        </div>
                        <p className={styles.modalReviewText}>{selectedReview.text}</p>
                        <p className={styles.modalDate}>{selectedReview.relative_time_description}</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>

              <div className={styles.pagination}>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={styles.pageButton}
                >
                  Previous
                </button>
                <span className={styles.pageInfo}>
                  Page {currentPage} of {Math.ceil(getAllReviews().length / reviewsPerPage)}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === Math.ceil(getAllReviews().length / reviewsPerPage)}
                  className={styles.pageButton}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Reviews;
