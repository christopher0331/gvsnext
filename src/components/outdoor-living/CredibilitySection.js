import styles from './CredibilitySection.module.scss'

export default function CredibilitySection() {
  const credentials = [
    { number: '15+', text: 'Years of Experience' },
    { number: '500+', text: 'Projects Completed' },
    { number: '98%', text: 'Customer Satisfaction' },
    { number: '25+', text: 'Industry Awards' },
  ]

  return (
    <section className={styles.credibility}>
      <h2 className={styles.sectionTitle}>Why Choose Us</h2>
      <div className={styles.credentialsGrid}>
        {credentials.map((cred, index) => (
          <div key={index} className={styles.credentialCard}>
            <span className={styles.number}>{cred.number}</span>
            <span className={styles.text}>{cred.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
