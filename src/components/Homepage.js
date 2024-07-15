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
        "logo": "/gvsLogoGreen.png",
        "description": "GreenView Solutions offers a variety of fencing solutions in Arvada, CO, including wood, vinyl, and chainlink fences, along with financing options to meet your needs.",
        "telephone": "+303-358-8168",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "6525 Gunpark Dr Ste 370-110",
            "addressLocality": "Boulder",
            "addressRegion": "CO",
            "postalCode": "80301",
            "addressCountry": "US"
        },
        "areaServed": [
            "Boulder, CO",
            "Niwot, CO",
            "Louisville, CO",
            "Longmont, CO",
            "Frederick, CO",
            "Erie, CO",
            "Superior, CO",
            "Denver, CO",
            "Westminster, CO",
            "Fort Collins, CO"
        ],
        "sameAs": [
            "https://www.facebook.com/greenviewsolutions",
            "https://www.twitter.com/greenviewsolutions",
            "https://www.instagram.com/greenviewsolutions"
        ],    
        "hasMap": "https://www.google.com/maps/place/6525+Gunpark+Dr+Ste+370-110,+Boulder,+CO+80301/"

    };

    return (
        <>
            <Head>
                <title>GVS-Boulder Fencing Company | Fence Installation and Repair in Denver, CO</title>
                <meta name="description" content="Discover your fencing solutions at GreenView Solutions! Explore various fence types, financing options, and find all the contact information you need on our homepage. Get the perfect fence for your property in Arvada, CO, with options ranging from wood to vinyl, chainlink, and more." />
                <link rel="canonical" href="https://greenviewsolutions.net" />
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
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
                
                <LocationsMap /> 

            </div>
        </>
    );
};

export default Homepage;
