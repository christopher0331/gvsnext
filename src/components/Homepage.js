import React, { useEffect } from 'react';
import InfoSection from './InfoSection.js';
import FenceCards from './FenceCard.js';
import { testimonialsData } from './TestimonialsData.js';
import Testimonials from './ReviewsSections.js';
import FinancingSection from './FinancingSection.js';
import Accordion from './AccordionDropDown.js';
import styles from './AccordionDropDown.module.scss';
import Head from 'next/head';
import CallToActionSection from './CallToActionSection.js';
import LocationsMap from './LocationsMap.js';
import FeaturedProjects from './FeaturedProjects';
import AreasServed from './AreasServed';
import QuickEstimate from './QuickEstimateProcess.jsx';

const Homepage = () => {
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
        <>
            <Head>
                <title>GVS-Boulder Fencing Company | Fence Installation and Repair in Boulder, CO and in Arvada, CO</title>
                <meta name="description" content="Discover your fencing solutions at GreenView Solutions! Explore various fence types, financing options, and find all the contact information you need on our homepage. Get the perfect fence for your property in Arvada, CO, with options ranging from wood to vinyl, chainlink, and more." />
                <link rel="canonical" href="https://greenviewsolutions.net" />
            </Head>

            <div style={{ backgroundColor: 'white' }}>

                <InfoSection />
                
                <QuickEstimate />

                <Testimonials testimonials={testimonialsData} />
                
                <FeaturedProjects />

                <div style={{ marginBottom: '5%' }}>
                    <CallToActionSection />
                </div>
                
                <FinancingSection />


                <div className={styles.accordionDiv} style={{overflow: 'hidden'}}>
                    <Accordion />
                </div>

                <LocationsMap />

                <AreasServed />


            </div>
        </>
    );
};

export default Homepage;

export async function getStaticProps() {
    return {
        props: {
            heroContent: {
                title: 'Premium Vinyl Fencing Solutions in Boulder and Denver',
                description: 'Explore our exceptional range of vinyl fencing options, designed to enhance your property\'s aesthetics, privacy, and security.',
                features: ['Low maintenance', 'Weather-resistant', 'Customizable'],
            },
        },
    };
}