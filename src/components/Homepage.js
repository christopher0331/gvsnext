import React from 'react';
import InfoSection from './InfoSection.js';
import FenceCards from './FenceCard.js';
import { testimonialsData } from './TestimonialsData.js';
import Testimonials from './ReviewsSections.js';
import FinancingSection from './FinancingSection.js';
import Accordion from './AccordionDropDown.js';
import AccordionInformation from './AccordionInformation.js';
import styles from './AccordionDropDown.module.scss';
import Head from 'next/head';
import CallToActionSection from './CallToActionSection.js';
import LocationsMap from './LocationsMap.js';

const Homepage = () => {

    const schema = {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": "GreenView Solutions",
        "url": "https://greenviewsolutions.net",
        "logo": "/gvsLogoGreen",
        "description": "GreenView Solutions offers a variety of fencing solutions in Arvada, CO, including wood, vinyl, and chainlink fences, along with financing options to meet your needs.",
        "telephone": "+303-358-8168",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "12650 W 64th Ave Unit E-149",
            "addressLocality": "Arvada",
            "addressRegion": "CO",
            "postalCode": "80004",
            "addressCountry": "US"
        },
        "areaServed": [
            "Arvada, CO",
            "Longmont, CO",
            "Frederick, CO",
            "Erie, CO",
            "Aurora, CO",
            "Denver, CO",
            "Golden, CO",
            "Broomfield, CO",
            "Westminster, CO",
            "Fort Collins, CO"
        ],        
        "sameAs": [
            "https://www.facebook.com/greenviewsolutions",
            "https://www.twitter.com/greenviewsolutions",
            "https://www.instagram.com/greenviewsolutions"
        ]
    };

    return (
        <>
            <Head>
                <title>GreenView Solutions Homepage</title>
                <meta name="description" content="Discover your fencing solutions at GreenView Solutions! Explore various fence types, financing options, and find all the contact information you need on our homepage. Get the perfect fence for your property in Arvada, CO, with options ranging from wood to vinyl, chainlink, and more." />
                <link rel="canonical" href="https://greenviewsolutions.net" />
            </Head>
            <div style={{ backgroundColor: 'white' }}>
                <InfoSection />
                <div style={{ color: 'black', display: 'flex', justifyContent: 'center', fontSize: '3rem', fontFamily: 'Courier New', textAlign: 'center' }}>
                    Pick Your Fence
                </div>
                <FenceCards />
                <Testimonials testimonials={testimonialsData} />
                <FinancingSection />
                <div style={{ marginBottom: '5%' }}>
                    <CallToActionSection />
                </div>
                <div className={styles.accordionDiv}>
                    <AccordionInformation />
                    <Accordion />
                </div>
                <LocationsMap /> {/* Include the map component */}

            </div>
        </>
    );
};

export default Homepage;
