import React, { useState } from 'react';
import styles from './ServiceSidebar.module.scss';

const services = [
  { name: 'Wood Fences', path: '/wood-fences', portfolioPath: '/portfolio' },
  { name: 'Vinyl Fences', path: '/vinyl-fences', portfolioPath: '/portfolio' },
  { name: 'Chain Link Fences', path: '/chainlink-fences', portfolioPath: '/portfolio' },
  { name: 'Outdoor Living', path: '/outdoor-living', portfolioPath: '/portfolio' },
];

const ServicesSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.servicesAccordion}>
      <h1 className={styles.header}>Services</h1>
      {services.map((service, index) => (
        <div key={service.name} className={styles.serviceItem}>
          <button
            className={styles.serviceButton}
            onClick={() => handleClick(index)}
            aria-expanded={activeIndex === index ? 'true' : 'false'}
          >
            {service.name}
            <span className={activeIndex === index ? styles.plusActive : styles.plus}>+</span>
          </button>
          {activeIndex === index && (
            <div className={styles.serviceContent}>
              <a href={service.path} className={styles.dropdownLink}>{service.name}</a>
              <a href={service.portfolioPath} className={styles.dropdownLink}>View {service.name}</a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesSidebar;
