import React, { useState } from 'react';
import { testimonialsData } from './TestimonialsData';
import styles from './Reviews.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { FaStar, FaTimes } from 'react-icons/fa';
import Head from 'next/head';

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 8;
  
  const totalPages = Math.ceil(testimonialsData.length / reviewsPerPage);
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = testimonialsData.slice(indexOfFirstReview, indexOfLastReview);
  
  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <FaStar key={index} className={styles.star} />
    ));
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, text.lastIndexOf(' ', maxLength)) + '...';
  };

  const generateStructuredData = () => {
    const averageRating = testimonialsData.reduce((sum, testimonial) => 
      sum + testimonial.rating, 0) / testimonialsData.length;

    const reviewsData = testimonialsData.map(testimonial => ({
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': testimonial.author
      },
      'datePublished': testimonial.date,
      'reviewBody': testimonial.review,
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': testimonial.rating,
        'bestRating': 5
      }
    }));

    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'GreenView Solutions Services',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': averageRating.toFixed(1),
        'reviewCount': testimonialsData.length
      },
      'review': reviewsData
    };
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
        <h2 className={styles.title}>What Our Clients Say</h2>
        <div className={styles.reviewsStats}>
          <div className={styles.averageRating}>
            <span className={styles.ratingNumber}>
              {(testimonialsData.reduce((sum, t) => sum + t.rating, 0) / testimonialsData.length).toFixed(1)}
            </span>
            <div className={styles.ratingStars}>
              {renderStars(5)}
            </div>
            <span className={styles.reviewCount}>
              {testimonialsData.length} reviews
            </span>
          </div>
        </div>
        
        <div className={styles.reviewsGrid}>
          {currentReviews.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className={styles.reviewCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setSelectedReview(testimonial)}
            >
              <div className={styles.reviewHeader}>
                <h3 className={styles.author}>{testimonial.author}</h3>
                <div className={styles.rating}>
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <p className={styles.reviewText}>
                {truncateText(testimonial.review)}
                <button className={styles.readMore}>Read More</button>
              </p>
              <span className={styles.date}>
                {format(new Date(testimonial.date), 'MMMM d, yyyy')}
              </span>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button 
              className={`${styles.pageButton} ${currentPage === 1 ? styles.disabled : ''}`}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            <div className={styles.pageNumbers}>
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                // Show first page, last page, current page, and pages around current page
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      className={`${styles.pageNumber} ${
                        currentPage === pageNumber ? styles.activePage : ''
                      }`}
                      onClick={() => setCurrentPage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  pageNumber === currentPage - 2 ||
                  pageNumber === currentPage + 2
                ) {
                  return <span key={pageNumber} className={styles.ellipsis}>...</span>;
                }
                return null;
              })}
            </div>

            <button 
              className={`${styles.pageButton} ${currentPage === totalPages ? styles.disabled : ''}`}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}

        <AnimatePresence>
          {selectedReview && (
            <motion.div 
              className={styles.modal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className={styles.modalContent}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
              >
                <button 
                  className={styles.closeButton}
                  onClick={() => setSelectedReview(null)}
                >
                  <FaTimes />
                </button>
                <div className={styles.modalHeader}>
                  <h3 className={styles.modalAuthor}>{selectedReview.author}</h3>
                  <div className={styles.modalRating}>
                    {renderStars(selectedReview.rating)}
                  </div>
                </div>
                <p className={styles.modalReviewText}>{selectedReview.review}</p>
                <span className={styles.modalDate}>
                  {format(new Date(selectedReview.date), 'MMMM d, yyyy')}
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Reviews;
