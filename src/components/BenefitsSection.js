import React from 'react';
import styles from './BenefitsSection.module.css';

const BenefitsSection = ({ title, benefits }) => {
  return (
    <section className={styles.benefitsSection}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.benefitsGrid}>
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className={`${styles.benefitCard} ${styles.fadeIn}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.icon}>{benefit.icon}</div>
            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
            <p className={styles.benefitDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;