import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FencingTypeCards from '../../components/FencingTypeCards';
import CTASection from '../../components/CTASection';
import Reviews from '../../components/Reviews';
import { testimonialsData } from '../../components/TestimonialsData';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import styles from '../../components/WoodFencesStyles.module.scss';
import LocationsMap from '../../components/LocationsMap';
import { useRouter } from 'next/router';
import BenefitsSection from '../../components/BenefitsSection';
import VinylFenceFAQ from '../../components/VinylFenceFAQ';


const vinylFenceTypes = [
    {
        title: '3 Rail',
        description: 'Enhance your property with our classic 3 rail vinyl fencing, offering a perfect balance of openness and boundary definition.',
        image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/56fbbe69-a163-40b4-ed24-163f6714c300/public',
        benefits: ['Open, airy design', 'Ideal for large properties', 'Low maintenance'],
    },
    {
        title: 'Hamilton',
        description: 'Elevate your property&apos;s charm with our Hamilton vinyl fencing, blending classic elegance with modern durability for a timeless look.',
        image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/64bdfb33-549d-4c4e-e22f-79b920b4fc00/public',
        benefits: ['Elegant picket design', 'Low maintenance', 'Weather-resistant', 'Customizable height and spacing'],
    },
]

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};



export default function Fencing({ capitalizedLocation, locationContent, headerData, heroContent  }) {
    const [selectedFence, setSelectedFence] = useState(null);
    const router = useRouter();
    const { location } = router.query;

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

    const vinylBenefits = [
        {
            title: "Low Maintenance",
            description: "Vinyl fencing requires minimal upkeep, saving you time and money on repairs and painting.",
            icon: "🔧"
        },
        {
            title: "Durability",
            description: "Resistant to rot, pests, and weather damage, vinyl fences can last for decades with proper care.",
            icon: "💪"
        },
        {
            title: "Versatility",
            description: "Available in various styles and colors to match any property aesthetic.",
            icon: "🎨"
        },
        {
            title: "Cost-Effective",
            description: "While initial costs may be higher, the longevity and low maintenance of vinyl fencing offer long-term savings.",
            icon: "💰"
        }
    ]
    return (
        <>
            <Head>
                <title>Vinyl Fencing Solutions in {capitalizedLocation} | GreenView Solutions</title>
                <meta name="description" content={`Discover our range of vinyl fencing options in ${capitalizedLocation}.`} />
                <link rel="canonical" href={`https://greenviewsolutions.net/${location}/vinyl-fences`} />
            </Head>

            <Header location={capitalizedLocation} data={headerData} heroContent={heroContent} locatio={capitalizedLocation} />

            <div className={styles.seoTextContainer}>
                <div className={styles.seoText}>
                    <h1>Vinyl Fencing Solutions in {capitalizedLocation}</h1>
                    <p>Discover our range of vinyl fencing options, perfect for enhancing your property&apos;s style and privacy in {capitalizedLocation}.</p>
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
                        Our Premium Vinyl Fence Collection
                    </motion.h2>
                    <p className={styles.sectionSubtitle}>Discover the perfect blend of durability and style</p>
                    <div 
                        className={`${styles.fenceTypeGrid} ${styles.centeredGrid}`}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '2rem',
                            flexWrap: 'wrap', // Changed from 'nowrap' to 'wrap'
                            maxWidth: '1200px',
                            margin: '0 auto'
                        }}
                    >
                        {vinylFenceTypes.map((fenceType, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className={styles.fenceTypeWrapper}
                                onClick={() => setSelectedFence(fenceType)}
                                style={{
                                    flexBasis: '100%', // Full width on mobile
                                    maxWidth: '400px', // Max width for larger screens
                                    margin: '0 auto 2rem', // Center and add bottom margin
                                }}
                            >
                                <FencingTypeCards {...fenceType} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <BenefitsSection
                title="Why Choose Vinyl Fencing?"
                benefits={vinylBenefits}
                titleClassName={styles.benefitsSectionTitle}
            />

            <CTASection
                title={`Ready to Enhance Your Property in ${capitalizedLocation}?`}
                description={`Schedule a consultation with our expert team to explore the perfect vinyl fencing solution for your property in ${capitalizedLocation}.`}
                buttonText="Request a Free Consultation"
                buttonLink="/contact"
            />

            <VinylFenceFAQ />

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


            <Reviews testimonials={testimonialsData} />

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
        description: `Discover our vinyl fencing options in ${capitalizedLocation}.`
    };
    const heroContent = {
        title: `Premium Fencing Solutions in ${capitalizedLocation}`,
        description: `Explore our exceptional range of vinyl fencing options in ${capitalizedLocation}, designed to enhance your property's aesthetics, privacy, and security.`,
        features: ['Low maintenance', 'Weather-resistant', 'Customizable'],
      };
    

    return { props: { locationData, capitalizedLocation, heroContent } };
} 