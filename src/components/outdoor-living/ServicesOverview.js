import styles from './ServicesOverview.module.scss'

export default function ServicesOverview() {
  const services = [
    { title: 'Pergola Construction', description: 'Custom-designed pergolas to enhance your outdoor space' },
    { title: 'Concrete Work', description: 'High-quality concrete solutions for patios, walkways, and more' },
    { title: 'Outdoor Kitchens', description: 'Functional and stylish outdoor cooking areas' },
    { title: 'Landscaping', description: 'Beautiful landscaping to complement your outdoor living area' },
  ]

  return (
    <section className={styles.services}>
      <h2 className={styles.sectionTitle}>Our Outdoor Living Services</h2>
      <div className={styles.serviceGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
