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
import Reviews from '../components/Reviews';
import { testimonialsData } from '../components/TestimonialsData';
import { useEffect } from 'react';


export default function OutdoorLivingNew({heroContent}) {

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

    return (
        <div>
            <Head>
                <title>Outdoor Living - Transform Your Backyard | Greenview Solutions</title>
                <meta name="description" content="Explore our comprehensive outdoor living solutions, featuring custom designs, durable materials, and expert installation. Transform your backyard into a stunning oasis with our pergola and concrete services, tailored to meet your unique needs and preferences." />
            </Head>

            <Header heroContent={heroContent} />

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
                <Reviews testimonials={testimonialsData} />
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

export async function getStaticProps() {
    return {
      props: {
        heroContent: {
          title: 'Outdoor Living Year Round',
          description: 'Explore our comprehensive outdoor living solutions, featuring custom designs, durable materials, and expert installation. Transform your backyard into a stunning oasis with our pergola and concrete services, tailored to meet your unique needs and preferences.',
          features: ['Custom designs', 'Durable materials', 'Expert installation'],
        },
      },
    };
  }
  