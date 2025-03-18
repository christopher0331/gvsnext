import React from 'react';
import styles from '../LocationContent.module.scss';
import { getLocationData } from '../../utils/locations';

const BackflowLocationContent = ({ location }) => {
  const locationData = getLocationData(location);
  if (!locationData) return null;

  return (
    <div className={styles.locationContent}>
      <section className={styles.locationIntro}>
        <h2>Professional Backflow Testing Services in {locationData.name}, Colorado</h2>
        <p>
          Serving {locationData.name} from our {locationData.nearestOffice} office, GreenView Solutions 
          provides expert backflow testing and certification services {locationData.distanceFromOffice === 0
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
        <h3>Our Backflow Services in {locationData.name}</h3>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h4>Residential Backflow Testing</h4>
            <p>Comprehensive backflow testing for {locationData.name} homes, ensuring your water supply remains safe and compliant with local regulations.</p>
          </div>
          <div className={styles.serviceCard}>
            <h4>Commercial Backflow Certification</h4>
            <p>Professional backflow testing and certification for {locationData.name} businesses, medical facilities, and commercial properties.</p>
          </div>
          <div className={styles.serviceCard}>
            <h4>Backflow Installation</h4>
            <p>Expert installation of backflow prevention devices that comply with {locationData.name} building codes and water authority requirements.</p>
          </div>
          <div className={styles.serviceCard}>
            <h4>Annual Testing Programs</h4>
            <p>Convenient recurring testing programs to keep {locationData.name} properties compliant with annual certification requirements.</p>
          </div>
        </div>
      </section>

      <section className={styles.whyChooseUs}>
        <h3>Why Choose GreenView Solutions for Backflow Testing in {locationData.name}?</h3>
        <div className={styles.reasonsGrid}>
          <div className={styles.reason}>
            <h4>Certified Technicians</h4>
            <p>Our backflow testers are fully certified and experienced with {locationData.name}&apos;s specific water system requirements.</p>
          </div>
          <div className={styles.reason}>
            <h4>Local Knowledge</h4>
            <p>Deep understanding of {locationData.name}&apos;s water systems, regulations, and reporting requirements.</p>
          </div>
          <div className={styles.reason}>
            <h4>Prompt Service</h4>
            <p>{locationData.distanceFromOffice === 0
              ? "Based right here in your community for immediate response."
              : `Just ${locationData.distanceFromOffice} miles away for quick service throughout ${locationData.name}.`}</p>
          </div>
        </div>
      </section>

      <section className={styles.seoContent}>
        <h2>Backflow Testing in {locationData.name}: What You Need to Know</h2>
        
        <h3>Understanding Backflow Prevention in {locationData.name}</h3>
        <p>
          Backflow prevention is critical for maintaining water quality in {locationData.name}, Colorado. 
          When water pressure drops in the main supply lines, contaminated water can potentially flow backward 
          into the clean water supply. This is particularly important in {locationData.name} due to the local 
          water system infrastructure and Colorado&apos;s specific regulations regarding water safety.
        </p>
        
        <h3>{locationData.name}&apos;s Backflow Testing Requirements</h3>
        <p>
          In {locationData.name}, backflow testing is typically required annually for both residential and commercial 
          properties with irrigation systems, fire sprinklers, or other potential cross-connections. Local water 
          authorities mandate this testing to ensure public health and safety. Failure to comply can result in 
          penalties or water service interruption. GreenView Solutions helps {locationData.name} property owners 
          stay compliant with these important regulations.
        </p>
        
        <h3>Common Backflow Issues in {locationData.name}</h3>
        <p>
          Properties in {locationData.name} face unique challenges that can affect backflow prevention systems. 
          These include seasonal temperature fluctuations that can damage devices, water pressure variations 
          common in Colorado&apos;s mountainous regions, and mineral buildup from the local water supply. Our technicians 
          are specifically trained to address these {locationData.name}-specific issues during testing and maintenance.
        </p>
        
        <h3>Choosing the Right Backflow Prevention for {locationData.name} Properties</h3>
        <p>
          Different properties in {locationData.name} require different types of backflow preventers based on their 
          specific risk level and usage. Residential homes typically need simpler devices like dual check valves or 
          pressure vacuum breakers, while commercial properties often require more complex reduced pressure zone (RPZ) 
          assemblies. Our experts can help determine the right solution for your {locationData.name} property.
        </p>
        
        <h3>The GreenView Solutions Difference in {locationData.name}</h3>
        <p>
          As a local company serving {locationData.name}, we understand the specific needs of our community. 
          Our backflow testing services are designed to be convenient, thorough, and compliant with all local 
          regulations. We take pride in protecting {locationData.name}&apos;s water supply and providing peace of 
          mind to our neighbors with professional, reliable service.
        </p>
      </section>
    </div>
  );
};

export default BackflowLocationContent;
