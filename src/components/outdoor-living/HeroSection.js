import { useState, useEffect } from 'react';
import styles from './HeroSection.module.scss';
import HomePageForm from '../HomePageForm';

export default function HeroSection() {
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleDoorOpen = () => {
    setIsDoorOpen(true);
    setTimeout(() => {
      setIsFormVisible(true);
    }, 500); // Adjust this timing to match your CSS transition
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
        <h1>Transform Your Backyard into a Dream Outdoor Living Space</h1>
        <p>Expert pergola construction and concrete work to create your perfect outdoor oasis</p>
        <button className={styles.ctaButton} onClick={handleDoorOpen}>Fill Out Form</button>
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
