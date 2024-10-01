import React from 'react';
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

const Homepage = () => {
    
    
    const schema = {
        "@context": "http://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "name": "GreenView Solutions - Boulder",
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
                    "https://www.instagram.com/greenview_solutions_llc",
                    "https://www.google.com/maps/place/Greenview+Solutions/@39.9890046,-105.1713587,11z/data=!4m6!3m5!1s0x876bf5d9d671bf3f:0xe263da5d1b64b4a4!8m2!3d40.125623!4d-104.9541494!16s%2Fg%2F11j76mvz9t?coh=164777&entry=tt&shorturl=1"
                ],
                "hasMap": "https://www.google.com/maps/place/6525+Gunpark+Dr+Ste+370-110,+Boulder,+CO+80301/"
            },
            {
                "@type": "LocalBusiness",
                "name": "GreenView Solutions - Arvada",
                "url": "https://greenviewsolutions.net",
                "logo": "/gvsLogoGreen.png",
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
                    "Denver, CO",
                    "Westminster, CO",
                    "Broomfield, CO",
                    "Wheat Ridge, CO",
                    "Golden, CO",
                    "Lakewood, CO",
                    "Thornton, CO",
                    "Northglenn, CO"
                ],
                "sameAs": [
                    "https://www.facebook.com/greenviewsolutions",
                    "https://www.twitter.com/greenviewsolutions",
                    "https://www.instagram.com/greenview_solutions_llc"
                ],
                "hasMap": "https://www.google.com/maps/place/12650+W+64th+Ave+Unit+E-149,+Arvada,+CO+80004/"
            }
        ]
    };

    return (
        <>
            <Head>
                <title>GVS-Boulder Fencing Company | Fence Installation and Repair in Boulder, CO and in Arvada, CO</title>
                <meta name="description" content="Discover your fencing solutions at GreenView Solutions! Explore various fence types, financing options, and find all the contact information you need on our homepage. Get the perfect fence for your property in Arvada, CO, with options ranging from wood to vinyl, chainlink, and more." />
                <link rel="canonical" href="https://greenviewsolutions.net" />
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            </Head>

            <div style={{ backgroundColor: 'white' }}>
                <InfoSection />

                <Testimonials testimonials={testimonialsData} />
                
                <div style={{ color: 'black', display: 'flex', justifyContent: 'center', fontSize: '3rem', fontFamily: 'Courier New', textAlign: 'center', marginTop: '5%' }}>
                    Pick Your Fence
                </div>
                
                <FenceCards />

                <div style={{ marginBottom: '5%' }}>
                    <CallToActionSection />
                </div>
                
                <FinancingSection />


                <div className={styles.accordionDiv} style={{overflow: 'hidden'}}>
                    <Accordion />
                </div>
 run
                <LocationsMap />

            </div>
        </>
    );
};

export default Homepage;
