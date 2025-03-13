import Image from 'next/image';
import styles from './ServicesOverview.module.scss';

export default function ServicesOverview() {
  const services = [
    { 
      title: 'Backflow Testing & Certification', 
      description: 'Annual testing and certification for all types of backflow prevention devices',
      icon: '/icons/backflow-testing.svg',
      imageUrl: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/f4337028-9269-4e91-1c3f-eff878df4d00/public'
    },
    { 
      title: 'Backflow Installation', 
      description: 'Professional installation of new backflow prevention devices for all applications',
      icon: '/icons/backflow-installation.svg',
      imageUrl: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/982a4aea-bfe2-49bf-70f7-492b22394300/public'
    }
  ];

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Backflow Testing Services</h2>
        <p className={styles.sectionSubtitle}>Comprehensive backflow prevention solutions for residential and commercial properties</p>
        
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.imageContainer}>
                {service.title.includes('Installation') ? (
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image 
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      style={{ objectFit: 'cover', objectPosition: 'center -50px' }}
                    />
                  </div>
                ) : (
                  <Image 
                    src={service.imageUrl}
                    alt={service.title}
                    width={400}
                    height={360}
                    className={styles.serviceImage}
                  />
                )}
              </div>
              <div className={styles.serviceContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.serviceTypes}>
          <h3>We Test All Types of Backflow Preventers:</h3>
          <div className={styles.typesList}>
            <div className={styles.typeItem}>
              <span className={styles.checkmark}>✓</span>
              <span>Reduced Pressure Zone (RPZ) Assemblies</span>
            </div>
            <div className={styles.typeItem}>
              <span className={styles.checkmark}>✓</span>
              <span>Double Check Valve Assemblies (DCVA)</span>
            </div>
            <div className={styles.typeItem}>
              <span className={styles.checkmark}>✓</span>
              <span>Pressure Vacuum Breakers (PVB)</span>
            </div>
            <div className={styles.typeItem}>
              <span className={styles.checkmark}>✓</span>
              <span>Atmospheric Vacuum Breakers (AVB)</span>
            </div>
            <div className={styles.typeItem}>
              <span className={styles.checkmark}>✓</span>
              <span>Spill-Resistant Vacuum Breakers (SVB)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
