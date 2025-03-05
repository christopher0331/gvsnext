import styles from './CredibilitySection.module.scss'
import { FaLeaf, FaTools, FaAward, FaHandshake } from 'react-icons/fa'

export default function CredibilitySection() {
  const credentials = [
    { number: '15+', text: 'Years of Experience', description: 'Creating beautiful outdoor spaces across Colorado', icon: <FaLeaf /> },
    { number: '500+', text: 'Projects Completed', description: 'From intimate patios to expansive outdoor living areas', icon: <FaTools /> },
    { number: '98%', text: 'Customer Satisfaction', description: 'Our clients love their new outdoor living spaces', icon: <FaHandshake /> },
    { number: '25+', text: 'Industry Awards', description: 'Recognized for excellence in outdoor design and construction', icon: <FaAward /> },
  ]

  return (
    <section className={styles.credibility}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Why Choose GreenView Solutions</h2>
        <p className={styles.sectionSubtitle}>Creating exceptional outdoor living spaces since 2008</p>
        
        <div className={styles.credentialsGrid}>
          {credentials.map((cred, index) => (
            <div key={index} className={styles.credentialCard}>
              <div className={styles.iconWrapper}>
                {cred.icon}
              </div>
              <span className={styles.number}>{cred.number}</span>
              <span className={styles.text}>{cred.text}</span>
              <p className={styles.description}>{cred.description}</p>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  )
}
