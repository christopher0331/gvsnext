import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FencingTypeCards from '../components/FencingTypeCards'
import CTASection from '../components/CTASection'
import TestimonialsSection from '../components/TestimonialsSection'
import ChainLinkFenceFAQ from '../components/ChainlinkFenceFAQ'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../components/WoodFencesStyles.module.scss';
import LocationsMap from '../components/LocationsMap'
import BenefitsSection from '../components/BenefitsSection'

const chainLinkFenceTypes = [
    {
        title: 'Galvanized',
        description: 'Our galvanized chain-link fencing offers durability and corrosion resistance, perfect for long-lasting boundary solutions.',
        image: '/chain-link-fence-galvinized.jpeg',
        benefits: ['Corrosion-resistant', 'Cost-effective', 'Low maintenance'],
    },
    {
        title: 'PVC Coated',
        description: 'Enhance your property with our vinyl-coated chain-link fencing, combining durability with improved aesthetics.',
        image: '/chain-link-fence-pvc-coated.jpeg',
        benefits: ['Attractive finish', 'Additional protection', 'Various color options'],
    },
    {
        title: 'Slatted',
        description: 'Enhance your property with our slatted chain-link fencing, combining durability with improved aesthetics.',
        image: '/chain-link-fence-slatted.jpeg',
        benefits: ['Increased privacy', 'Wind reduction', 'Customizable appearance'],
    },
]

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
}

export default function ChainLinkFencing({ heroContent }) {
    const [selectedFence, setSelectedFence] = useState(null)

    useEffect(() => {
        const script = document.createElement('script');
        script.innerHTML = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-59K2K2F');
        `;
        document.head.appendChild(script);
    
        return () => {
          document.head.removeChild(script);
        };
      }, []);

    const chainLinkBenefits = [
        {
            title: "Affordability",
            description: "Chain-link fencing is one of the most cost-effective fencing solutions available.",
            icon: "💰"
        },
        {
            title: "Durability",
            description: "Resistant to weather damage and requires minimal maintenance for long-lasting performance.",
            icon: "💪"
        },
        {
            title: "Versatility",
            description: "Suitable for various applications, from residential to commercial and industrial use.",
            icon: "🔧"
        },
        {
            title: "Security",
            description: "Provides effective boundary marking and security without obstructing visibility.",
            icon: "🔒"
        }
    ]

    return (
        <>
            <Head>
                <title>Professional Chain-Link Fencing Solutions | GreenView Solutions</title>
                <meta name="description" content="Discover our high-quality chain-link fencing options. From galvanized to vinyl-coated designs, we offer durable and cost-effective solutions to enhance your property's security and boundary definition." />
                <link rel="canonical" href="https://greenviewsolutions.net/chainlink-fence" />
            </Head>

            <Header heroContent={heroContent} />

            <section className={styles.fenceTypesSection}>
                <div className={`${styles.container} ${styles.centeredContainer}`}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={styles.sectionTitle}
                    >
                        Our Premium Chain-Link Fence Collection
                    </motion.h2>
                    <p className={styles.sectionSubtitle}>Discover the perfect blend of durability and functionality</p>
                    <div
                        className={`${styles.fenceTypeGrid} ${styles.centeredGrid}`}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '2rem',
                            flexWrap: 'wrap',
                            maxWidth: '1200px',
                            margin: '0 auto'
                        }}
                    >
                        {chainLinkFenceTypes.map((fenceType, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className={styles.fenceTypeWrapper}
                                onClick={() => setSelectedFence(fenceType)}
                                style={{
                                    flexBasis: 'calc(33.333% - 2rem)', // Approximately one-third width minus gap
                                    maxWidth: '400px',
                                    margin: '0 0 2rem', // Remove left and right auto margin
                                }}
                            >
                                <FencingTypeCards {...fenceType} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <BenefitsSection
                title="Why Choose Chain-Link Fencing?"
                benefits={chainLinkBenefits}
                titleClassName={styles.benefitsSectionTitle}
            />

            <AnimatePresence>
                {selectedFence && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedFence(null)}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <h3>{selectedFence.title}</h3>
                            <p>{selectedFence.description}</p>
                            <ul>
                                {selectedFence.benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                            <button onClick={() => setSelectedFence(null)}>Close</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <CTASection
                title="Ready to Secure Your Property with Chain-Link Fencing?"
                description="Schedule a consultation with our expert team to explore the perfect chain-link fencing solution for your property."
                buttonText="Request a Free Consultation"
                buttonLink="/contact"
            />

            <ChainLinkFenceFAQ />

            <TestimonialsSection />

            <LocationsMap />

            <Footer />
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            heroContent: {
                title: 'Professional Chain-Link Fencing Solutions',
                description: 'Discover our high-quality chain-link fencing options. From galvanized to vinyl-coated designs, we offer durable and cost-effective solutions to enhance your property\'s security and boundary definition.',
                features: ['Corrosion-resistant', 'Cost-effective', 'Low maintenance'],
            },
        },
    };
}