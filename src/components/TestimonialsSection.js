import React, { useState, useEffect, useCallback } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ReviewsSections.module.css';
import { getTestimonials } from './TestimonialsData';

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [expandedReviews, setExpandedReviews] = useState({});
  const timer = React.useRef(null);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const resetTimer = useCallback(() => {
    if (isAutoPlay) {
      clearInterval(timer.current);
      timer.current = setInterval(nextTestimonial, 5000);
    }
  }, [isAutoPlay, nextTestimonial]);

  const handleNextTestimonial = useCallback(() => {
    nextTestimonial();
    resetTimer();
  }, [nextTestimonial, resetTimer]);

  const handlePrevTestimonial = useCallback(() => {
    prevTestimonial();
    resetTimer();
  }, [prevTestimonial, resetTimer]);

  const toggleFullReview = (index) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      const fetchedTestimonials = await getTestimonials();
      setTestimonials(fetchedTestimonials);
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    timer.current = null;
    if (isAutoPlay) {
      timer.current = setInterval(nextTestimonial, 5000);
    }
    return () => clearInterval(timer.current);
  }, [isAutoPlay, nextTestimonial]);

  if (testimonials.length === 0) {
    return <div className={styles.noTestimonials}>Loading testimonials...</div>;
  }

  const currentTestimonial = testimonials[currentIndex];

  // Updated function to generate structured data
  const generateStructuredData = () => {
    const reviewsData = testimonials.map(testimonial => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.author
      },
      "datePublished": testimonial.date,
      "reviewBody": testimonial.review,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": 5
      }
    }));

    const averageRating = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / testimonials.length;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "GreenView Solutions Services", // Replace with your actual product/service name
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": averageRating.toFixed(1),
        "reviewCount": testimonials.length
      },
      "review": reviewsData
    };

    return JSON.stringify(structuredData);
  };

  return (
    <section className={styles.testimonials} style={{ background: `linear-gradient(45deg, #006400, #45b167)` }}>
      <h2>What Our Clients Say</h2>
      {/* Add this script tag for structured data */}
      <script type="application/ld+json">{generateStructuredData()}</script>
      <div className={styles.testimonialCarousel}>
        <button className={styles.navButton} onClick={handlePrevTestimonial}>
          <FaChevronLeft />
        </button>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={styles.testimonialCardWrapper}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`${styles.testimonialCard} ${expandedReviews[currentIndex] ? styles.expandedCard : ''}`}>
              <FaQuoteLeft className={styles.quoteIcon} />
              <p className={styles.testimonialText}>
                {currentTestimonial.review.length > 150 && !expandedReviews[currentIndex] ? (
                  <>
                    {currentTestimonial.review.slice(0, 150)}...
                    <button className={styles.readMoreButton} onClick={() => toggleFullReview(currentIndex)}>
                      Read More
                    </button>
                  </>
                ) : (
                  <>
                    {currentTestimonial.review}
                    {currentTestimonial.review.length > 150 && (
                      <button className={styles.readMoreButton} onClick={() => toggleFullReview(currentIndex)}>
                        Read Less
                      </button>
                    )}
                  </>
                )}
              </p>
              <div className={styles.testimonialAuthor}>
                <p className={styles.authorName}>{currentTestimonial.author}</p>
                <p className={styles.authorDate}>{currentTestimonial.date}</p>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < currentTestimonial.rating ? styles.starFilled : styles.starEmpty} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <button className={styles.navButton} onClick={handleNextTestimonial}>
          <FaChevronRight />
        </button>
      </div>
      <div className={styles.dots}>
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <button className={styles.autoPlayButton} onClick={() => setIsAutoPlay(!isAutoPlay)}>
        {isAutoPlay ? 'Pause' : 'Auto-Play'}
      </button>
    </section>
  );
}