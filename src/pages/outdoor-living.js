import React, { useState } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import CallToActionSection from '@/components/CallToActionSection';
import SvgComponent from '@/components/SvgComponent';
import styles from '../components/OutdoorLiving.module.scss';

export default function OutdoorLiving() {
  // State to manage the expansion of text sections
  const [isExpanded, setIsExpanded] = useState({
    retreat: false,
    design: false,
  });

  // Function to toggle expansion state
  const toggleExpansion = section => {
    setIsExpanded(prevState => ({ ...prevState, [section]: !prevState[section] }));
  };

  return (
    <div className={styles.outdoorLivingContainer}>
      <Header />
      <h1 className={styles.title}>Outdoor Living Year Round</h1>
      <div className={styles.content}>

        <div className={styles.imageContainer}>
          <img src='https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/globalimages/outdoorLivingPergolaStucture.JPG' alt="Outdoor Living Pergola Structure" />
        </div>

        <div>
          <div className={styles.textSection}>
            <h2>Elevate Your Backyard Retreat</h2>
            <p>
              {isExpanded.retreat ? (
                "Crafting a superior deck forms the foundation of countless possibilities for your outdoor haven in Denver. Sourcing from leading suppliers in the market, we present a diverse array of personalization for your venture. For a year-round Denver outdoor experience, we advocate the adoption of mineral-based composite decking. This choice ensures enduring quality and resilience across all seasons. Engage with our skilled designers at GreenView Solutions to discover the enhancements we can bring to your outdoor area."
              ) : (
                "Crafting a superior deck forms the foundation of countless possibilities for your outdoor haven in Denver..."
              )}
              <button onClick={() => toggleExpansion('retreat')}>
                {isExpanded.retreat ? 'Read less' : 'Read more'}
              </button>
            </p>
          </div>

          <div className={styles.textSection}>
            <h2>Exquisite Design and Implementation for Outdoor Environments</h2>
            <p>
              {isExpanded.design ? (
                "GreenView Solutions brings over a decade and a half of expertise in converting Denver homes into exquisite outdoor sanctuaries..."
              ) : (
                "GreenView Solutions brings over a decade and a half of expertise..."
              )}
              <button onClick={() => toggleExpansion('design')}>
                {isExpanded.design ? 'Read less' : 'Read more'}
              </button>
            </p>
          </div>
        </div>
      </div>

      <CallToActionSection />
      <SvgComponent />
      <Footer />
    </div>
  );
};
