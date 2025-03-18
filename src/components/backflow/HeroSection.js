import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.scss';
import HomePageForm from '../HomePageForm';

export default function HeroSection({ title, subtitle, location = 'Denver Metro' }) {
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleDoorOpen = () => {
    setIsDoorOpen(true);
    setTimeout(() => {
      setIsFormVisible(true);
    }, 500);
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
    setTimeout(() => {
      setIsDoorOpen(false);
    }, 100);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>{title || `${location}'s Professional Backflow Testing & Certification Services`}</h1>
        <p>{subtitle || `Protect your water supply with certified backflow testing, repair, and installation from ${location}'s trusted experts`}</p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.icon}>✓</span>
            <span>Certified Technicians</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.icon}>✓</span>
            <span>Same-Day Service Available</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.icon}>✓</span>
            <span>Competitive Rates</span>
          </div>
        </div>
        <button className={styles.ctaButton} onClick={handleDoorOpen}>Schedule {location} Testing</button>
      </div>
      <div className={`${styles.door} ${isDoorOpen ? styles.open : ''}`}></div>
      {isFormVisible && (
        <div className={styles.formContainer}>
          <HomePageForm onClose={handleFormClose} />
        </div>
      )}
    </section>
  );
}
