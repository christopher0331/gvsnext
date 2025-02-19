import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './CallToActionSection.module.scss';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default function CallToActionSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a non-animated placeholder
  }

  return (
    <section className={styles.ctaSection}>
      <MotionDiv 
        className={styles.ctaContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Elevate Your Property with Premium Fencing</h2>
        <p>Get a free quote for your fencing project today!</p>
        <Link href="/contact" className={styles.ctaButton}>
          <MotionDiv
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ width: '100%', height: '100%' }}
          >
            Contact Us Now
          </MotionDiv>
        </Link>
      </MotionDiv>
    </section>
  );
}