import React from 'react';
import styles from './AccordionDropDown.module.scss';

const CallToActionBox = () => {
  return (
    <div className={styles.infoBox}>
      <h2 className={styles.infoTitle}>Unlock the Benefits of a Fence</h2>
      <p className={styles.infoDescription}>
        Explore the various ways a fence can enhance your property’s value, aesthetics, and privacy. 
        Discover why our customers consider a fence a pivotal addition to their home.
      </p>
      <button 
        className={styles.ctaButton} 
        onClick={() => window.location.href='/contact'}
      >
        Get in Touch
      </button>
    </div>
  );
};

export default CallToActionBox;
