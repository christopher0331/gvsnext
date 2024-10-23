import Image from 'next/image'
import styles from './FeaturedProjects.module.scss'

export default function FeaturedProjects() {
  const projects = [
    {
      title: 'Luxury Backyard Retreat',
      description: 'A complete backyard transformation featuring a custom pergola, stamped concrete patio, and outdoor kitchen.',
      image: 'https://greenviewsolutions.net/_next/image?url=https%3A%2F%2Fimagedelivery.net%2FOHVtjf602XdHccCnziCADA%2F74505337-9ac6-4a35-5cdd-536aed33f000%2Fpublic&w=3840&q=80',
    },
    {
      title: 'Modern Pergola & Fire Pit',
      description: 'A sleek, modern pergola design paired with a cozy fire pit area and ambient lighting.',
      image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/e03d5e94-a080-4fc6-c798-c1c81c1b0c00/public',
    },
  ]

  return (
    <section className={styles.featuredProjects}>
      <h2 className={styles.sectionTitle}>Featured Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <Image src={project.image} alt={project.title} width={500} height={300} objectFit="cover" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
