import React, { useState } from 'react';
import styles from './ServiceSidebar.module.scss';

const services = [
  'Wood Fences',
  'Vinyl Fences',
  'Chain Link Fences',
  'Automatic Gates',
  'Outdoor Living',
  'Roll Off Dumpsters'
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
        <div key={service} className={styles.serviceItem}>
          <button
            className={styles.serviceButton}
            onClick={() => handleClick(index)}
          >
            {service} <span className={activeIndex === index ? styles.plusActive : styles.plus}>+</span>
          </button>
          {activeIndex === index && (
            <div className={styles.serviceContent}>
              <p>{service}</p>
              <p>{service} Gallery</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesSidebar;
