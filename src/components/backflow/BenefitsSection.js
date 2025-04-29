import Image from 'next/image';
import Link from 'next/link';
import styles from './BenefitsSection.module.scss';

export default function BenefitsSection({ location = 'Denver Metro' }) {
  const benefits = [
    {
      title: "Protect Public Health",
      description: "Prevent contaminated water from entering the public water supply, safeguarding your family, employees, and community from waterborne illnesses.",
      icon: "🛡️"
    },
    {
      title: "Maintain Compliance",
      description: "Stay compliant with local regulations and avoid penalties, fines, or water service interruptions due to non-compliance with testing requirements.",
      icon: "✓"
    },
    {
      title: "Prevent Costly Damage",
      description: "Identify potential issues before they cause expensive water damage, system failures, or contamination incidents that could lead to liability.",
      icon: "💰"
    },
    {
      title: "Extend Equipment Life",
      description: "Regular testing and maintenance helps extend the lifespan of your backflow prevention devices and connected water systems.",
      icon: "⏱️"
    },
    {
      title: "Peace of Mind",
      description: "Rest easy knowing your water system is properly protected and certified by licensed professionals who understand local requirements.",
      icon: "😌"
    },
    {
      title: "Professional Documentation",
      description: "Receive proper certification and documentation for insurance purposes, property management records, and regulatory compliance.",
      icon: "📄"
    }
  ];

  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Benefits of Professional Backflow Testing in {location}</h2>
        <p className={styles.sectionSubtitle}>Why regular backflow testing is essential for your {location} property</p>
        
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{benefit.icon}</span>
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.callToAction}>
          <div className={styles.ctaContent}>
            <h3>Don&apos;t Risk Your {location} Water Safety</h3>
            <p>Schedule your backflow testing in {location} today with our certified technicians</p>
          </div>
          <Link href="/contact" className={styles.ctaButton}>Schedule Backflow Testing</Link>
        </div>
      </div>
    </section>
  );
}
