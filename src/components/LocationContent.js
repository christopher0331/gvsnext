import React from 'react';
import Image from 'next/image';
import styles from './LocationContent.module.scss';
import { getLocationData } from '../utils/locations';

const LocationContent = ({ location }) => {
  const locationData = getLocationData(location);
  if (!locationData) return null;

  return (
    <div className={styles.locationContent}>
      <section className={styles.locationIntro}>
        <h2>Professional Fencing Services in {locationData.name}, Colorado</h2>
        <p>
          Serving {locationData.name} from our {locationData.nearestOffice} office, GreenView Solutions 
          provides expert fencing solutions {locationData.distanceFromOffice === 0
            ? "right in your community" 
            : `just ${locationData.distanceFromOffice} miles away`}.
        </p>
      </section>

      <section className={styles.localAreas}>
        <div className={styles.landmarks}>
          <h3>Serving Popular {locationData.name} Landmarks</h3>
          <ul>
            {locationData.landmarks.map((landmark, index) => (
              <li key={index}>{landmark}</li>
            ))}
          </ul>
        </div>
        
        <div className={styles.neighborhoods}>
          <h3>Featured {locationData.name} Neighborhoods</h3>
          <ul>
            {locationData.neighborhoods.map((neighborhood, index) => (
              <li key={index}>{neighborhood}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.localServices}>
        <h3>Our Fencing Services in {locationData.name}</h3>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h4>Residential Fencing</h4>
            <p>Custom fencing solutions for {locationData.name} homes, designed to enhance property value and security.</p>
          </div>
          <div className={styles.serviceCard}>
            <h4>Commercial Fencing</h4>
            <p>Robust and professional fencing installations for {locationData.name} businesses and commercial properties.</p>
          </div>
          <div className={styles.serviceCard}>
            <h4>HOA Compliance</h4>
            <p>Expert knowledge of local {locationData.name} HOA requirements and building codes.</p>
          </div>
          <div className={styles.serviceCard}>
            <h4>Custom Design</h4>
            <p>Tailored fencing solutions that match {locationData.name}&apos;s unique architectural styles.</p>
          </div>
        </div>
      </section>

      <section className={styles.whyChooseUs}>
        <h3>Why Choose GreenView Solutions in {locationData.name}?</h3>
        <div className={styles.reasonsGrid}>
          <div className={styles.reason}>
            <h4>Local Expertise</h4>
            <p>Deep understanding of {locationData.name}&apos;s climate, terrain, and local regulations.</p>
          </div>
          <div className={styles.reason}>
            <h4>Quick Response</h4>
            <p>{locationData.distanceFromOffice === 0
              ? "Based right here in your community for immediate service."
              : `Just ${locationData.distanceFromOffice} miles away for prompt service.`}</p>
          </div>
          <div className={styles.reason}>
            <h4>Community Focus</h4>
            <p>Proud to serve and enhance the {locationData.name} community with quality fencing solutions.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationContent;
