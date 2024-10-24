import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import FencingTypeCards from '../components/FencingTypeCards'
import CTASection from '../components/CTASection'
import TestimonialsSection from '../components/TestimonialsSection'
import VinylFenceFAQ from '../components/VinylFenceFAQ'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../components/WoodFencesStyles.module.scss';
import LocationsMap from '../components/LocationsMap'
import BenefitsSection from '../components/BenefitsSection'

const vinylFenceTypes = [
    {
        title: '3 Rail',
        description: 'Enhance your property with our classic 3 rail vinyl fencing, offering a perfect balance of openness and boundary definition.',
        image: 'https://greenviewsolutions.net/_next/image?url=https%3A%2F%2Fgreenviewsolutionsimages.s3.us-west-1.amazonaws.com%2Fgvsnextimages%2Fglobalimages%2FfencingRenders%2Fv3PostandDowell.png&w=2048&q=75',
        benefits: ['Open, airy design', 'Ideal for large properties', 'Low maintenance'],
    },
    {
        title: 'Hamilton',
        description: 'Elevate your property&apos;s charm with our Hamilton vinyl fencing, blending classic elegance with modern durability for a timeless look.',
        image: 'https://greenviewsolutions.net/_next/image?url=https%3A%2F%2Fgreenviewsolutionsimages.s3.us-west-1.amazonaws.com%2Fgvsnextimages%2Fglobalimages%2FfencingRenders%2FvStandardPartial.png&w=2048&q=75',
        benefits: ['Elegant picket design', 'Low maintenance', 'Weather-resistant', 'Customizable height and spacing'],
    },
]

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
}

export default function VinylFencing() {
    const [selectedFence, setSelectedFence] = useState(null)

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
                <title>Premium Vinyl Fencing Solutions in Seattle | Seattle Outdoor Living</title>
                <meta name="description" content="Discover our high-quality vinyl fencing options in Seattle. From privacy fences to decorative designs, we offer durable and low-maintenance solutions to enhance your property's beauty and security." />
                <link rel="canonical" href="https://www.seattleoutdoorliving.com/fencing/vinyl" />
            </Head>

            <Header />

            <div className={styles.seoTextContainer}>
                <div className={styles.seoText}>
                    <h1>Premium Vinyl Fencing Solutions in Seattle</h1>
                    <p>Explore our exceptional range of vinyl fencing options, designed to enhance your property&apos;s aesthetics, privacy, and security. From classic styles to modern designs, our expert team delivers top-quality vinyl fencing solutions tailored to your needs. Discover the benefits of low-maintenance, long-lasting vinyl fences and transform your outdoor space today!</p>
                </div>
            </div>

            <section className={styles.fenceTypesSection}>
                <div className={`${styles.container} ${styles.centeredContainer}`}>
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
                title="Ready to Upgrade Your Property with Vinyl Fencing?"
                description="Schedule a consultation with our expert team to explore the perfect vinyl fencing solution for your property."
                buttonText="Request a Free Consultation"
                buttonLink="/contact"
            />

            <VinylFenceFAQ />

            <TestimonialsSection />

            <LocationsMap />      

            <Footer />
        </>
    )
}