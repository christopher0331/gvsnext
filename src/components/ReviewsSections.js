import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import styles from './ReviewsSections.module.css';
import { getTestimonials } from './TestimonialsData.js';

const backgroundGradients = [
  'linear-gradient(45deg, #a8e063 0%, #56ab2f 100%)',
  'linear-gradient(to top, #76b852 0%, #8DC26F 100%)',
  'linear-gradient(to right, #134e5e 0%, #71b280 100%)',
  'linear-gradient(to right, #00b09b 0%, #96c93d 100%)',
  'linear-gradient(to right, #1d976c 0%, #93f9b9 100%)',
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const timerRef = useRef(null);
  const [expandedReviews, setExpandedReviews] = useState({});
  const testimonials = getTestimonials();

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (isAutoPlay) {
      timerRef.current = setTimeout(nextTestimonial, 5000);
    }
  }, [isAutoPlay]);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    resetTimer();
  }, [resetTimer]);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetTimer();
  }, [resetTimer]);

  const goToTestimonial = useCallback((index) => {
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
    resetTimer();
  }, [currentTestimonial, resetTimer]);

  const toggleReviewExpansion = (id) => {
    setExpandedReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isAutoPlay, resetTimer]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      rotateY: direction > 0 ? -45 : 45,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      rotateY: direction < 0 ? -45 : 45,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    return `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'} ago`;
  };

  // Add this check at the beginning of the component
  if (testimonials.length === 0) {
    return <div className={styles.noTestimonials}>No testimonials available at the moment.</div>;
  }

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className={styles.testimonials} style={{ background: backgroundGradients[currentTestimonial % backgroundGradients.length] }}>
      <motion.h2 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        What Our Clients Say
      </motion.h2>
      <div className={styles.testimonialCarousel}>
        <button className={styles.navButton} onClick={prevTestimonial}>
          <FaChevronLeft />
        </button>
        <div className={styles.testimonialCardWrapper}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentTestimonial}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
                opacity: { duration: 0.5 },
                rotateY: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
                scale: { duration: 0.5 },
              }}
              className={styles.testimonialCard}
            >
              <FaQuoteLeft className={styles.quoteIcon} />
              <div className={styles.testimonialText}>
                {expandedReviews[currentTestimonialData.id] 
                  ? currentTestimonialData.review
                  : truncateText(currentTestimonialData.review, 280)}
                {currentTestimonialData.review.length > 280 && (
                  <button 
                    className={styles.readMoreButton}
                    onClick={() => toggleReviewExpansion(currentTestimonialData.id)}
                  >
                    {expandedReviews[currentTestimonialData.id] ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>
              <div className={styles.testimonialAuthor}>
                <div>
                  <p className={styles.authorName}>{currentTestimonialData.author}</p>
                  <p className={styles.authorDate}>{formatDate(currentTestimonialData.date)}</p>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                        <FaStar className={i < currentTestimonialData.rating ? styles.starFilled : styles.starEmpty} />
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button className={styles.navButton} onClick={nextTestimonial}>
          <FaChevronRight />
        </button>
      </div>
      <div className={styles.dots}>
        {testimonials.map((_, index) => (
          <motion.span 
            key={index} 
            className={`${styles.dot} ${index === currentTestimonial ? styles.activeDot : ''}`}
            onClick={() => goToTestimonial(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
      <motion.button 
        className={styles.autoPlayButton} 
        onClick={() => {
          setIsAutoPlay(!isAutoPlay);
          resetTimer();
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isAutoPlay ? 'Pause' : 'Play'}
      </motion.button>
    </section>
  );
}