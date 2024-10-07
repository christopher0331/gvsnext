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
import FeaturedProjects from './FeaturedProjects';

const Homepage = () => {
    


    return (
        <>
            <Head>
                <title>GVS-Boulder Fencing Company | Fence Installation and Repair in Boulder, CO and in Arvada, CO</title>
                <meta name="description" content="Discover your fencing solutions at GreenView Solutions! Explore various fence types, financing options, and find all the contact information you need on our homepage. Get the perfect fence for your property in Arvada, CO, with options ranging from wood to vinyl, chainlink, and more." />
                <link rel="canonical" href="https://greenviewsolutions.net" />
            </Head>

            <div style={{ backgroundColor: 'white' }}>
                <InfoSection />

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

            </div>
        </>
    );
};

export default Homepage;
