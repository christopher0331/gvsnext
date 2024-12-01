import Head from 'next/head'
import HeroSection from '../components/outdoor-living/HeroSection'
import ServicesOverview from '../components/outdoor-living/ServicesOverview'
import ImageGallery from '../components/outdoor-living/ImageGallery'
import CredibilitySection from '../components/outdoor-living/CredibilitySection'
import FeaturedProjects from '../components/outdoor-living/FeaturedProjects'
import CallToActionSection from '../components/CallToActionSection'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SvgComponent from '../components/SvgComponent';
import TestimonialsSection from '../components/TestimonialsSection';

export default function OutdoorLivingNew() {
    return (
        <div>
            <Head>
                <title>Outdoor Living - Transform Your Backyard | Greenview Solutions</title>
                <meta name="description" content="Create your dream outdoor living space with our expert pergola and concrete services. Transform your backyard into a beautiful oasis." />
            </Head>
            <Header />
            <main>
                <ServicesOverview />
                <ImageGallery />
                <CallToActionSection
                    title="Ready to Secure Your Property with Chain-Link Fencing?"
                    description="Schedule a consultation with our expert team to explore the perfect chain-link fencing solution for your property."
                    buttonText="Request a Free Consultation"
                    buttonLink="/contact"
                />
                <CredibilitySection />
                <FeaturedProjects />
                <TestimonialsSection />
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#333' }}>Our Simple Process</h2>
                    <p  style={{ fontSize: '1.5rem', color: '#333'}}>Transforming your outdoor space is easy with our straightforward approach</p>
                    <p  style={{ fontSize: '1.1rem', color: 'gray', marginBottom: '2rem' }}>Image is clickable and interactive</p>

                    <SvgComponent />   
                </div>
            </main>
            <Footer />
        </div>
    )
}
