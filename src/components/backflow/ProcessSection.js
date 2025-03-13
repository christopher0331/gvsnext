import Image from 'next/image';
import styles from './ProcessSection.module.scss';

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Schedule Your Test",
      description: "Contact us to schedule your backflow testing at a convenient time. We offer flexible appointments to minimize disruption to your home or business.",
      icon: "📅"
    },
    {
      number: "02",
      title: "Professional Inspection",
      description: "Our certified technician will arrive on time and conduct a thorough inspection and testing of your backflow prevention devices.",
      icon: "🔍"
    },
    {
      number: "03",
      title: "Testing & Documentation",
      description: "We'll perform all required tests according to industry standards and local regulations, documenting all results.",
      icon: "📋"
    },
    {
      number: "04",
      title: "Certification & Filing",
      description: "Upon successful testing, we'll provide proper certification and file all necessary documentation with local authorities.",
      icon: "✅"
    }
  ];

  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Backflow Testing Process</h2>
        <p className={styles.sectionSubtitle}>Simple, efficient, and thorough testing to ensure your water system&apos;s safety</p>
        
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <div className={styles.iconContainer}>
                  <span className={styles.icon}>{step.icon}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
