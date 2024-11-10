import { useState } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FencingTypeCards from '../../components/FencingTypeCards';
import CTASection from '../../components/CTASection';
import FenceShapeShowcase from '../../components/FenceShapeShowcase';
import TestimonialsSection from '../../components/TestimonialsSection';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import styles from '../../components/WoodFencesStyles.module.scss';
import LocationsMap from '../../components/LocationsMap';
import { useRouter } from 'next/router';


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
};

export default function Fencing({ locationData, capitalizedLocation, locationFaqs }) {
    const [selectedFence, setSelectedFence] = useState(null);
    const router = useRouter();
    const { location } = router.query;

    return (
        <>
            <Head>
                <title>Chain Link Fencing Solutions in {capitalizedLocation} | GreenView Solutions</title>
                <meta name="description" content={`Explore our range of chain link fencing options in ${capitalizedLocation}.`} />
                <link rel="canonical" href={`https://greenviewsolutions.net/${location}/chainlink-fences`} />
            </Head>

            <Header location={capitalizedLocation} />

            <div className={styles.seoTextContainer}>
                <div className={styles.seoText}>
                    <h1>Chain Link Fencing Solutions in {capitalizedLocation}</h1>
                    <p>Explore our range of chain link fencing options, perfect for security and boundary definition in {capitalizedLocation}.</p>
                </div>
            </div>

            <section className={styles.fenceTypesSection}>
                <div className={styles.container}>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={styles.sectionTitle}
                    >
                        Our Chain Link Fence Collection
                    </motion.h2>
                    <div className={styles.fenceTypeGrid}>
                        {chainLinkFenceTypes.map((fenceType, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className={styles.fenceTypeWrapper}
                                onClick={() => setSelectedFence(fenceType)}
                            >
                                <FencingTypeCards {...fenceType} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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

            <FenceShapeShowcase />

            <CTASection
                title={`Ready to Secure Your Property in ${capitalizedLocation}?`}
                description={`Schedule a consultation with our expert team to explore the perfect chain link fencing solution for your property in ${capitalizedLocation}.`}
                buttonText="Request a Free Consultation"
                buttonLink="/contact"
            />
            <TestimonialsSection />

            <LocationsMap />      

            <Footer />
        </>
    );
}

export async function getStaticPaths() {
    const locations = ['boulder', 'arvada', 'denver', 'littleton', 'lakewood', 'golden', 'thornton', 'broomfield', 'centennial', 'englewood', 'glenwood springs', 'gunbarrel', 'highlands ranch', 'jefferson county', 'louisville', 'northglenn', 'parker', 'superior', 'westminster', 'eastlake', 'belmar', 'castle rock', 'columbine valley', 'fountain', 'greenwood village', 'lone tree', 'fort collins', 'meridian', 'milliken', 'parker', 'sedalia', 'superior', 'estes park', 'westminster hills']; 

    const paths = locations.length > 0 ? locations.map(location => ({
        params: { location }
    })) : [];

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { location } = params;
    const capitalizedLocation = location.charAt(0).toUpperCase() + location.slice(1);

    const locationData = {
        description: `Explore our chain link fencing options in ${capitalizedLocation}.`
    };

    return { props: { locationData, capitalizedLocation } };
} 