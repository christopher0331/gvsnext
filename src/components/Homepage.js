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

const Homepage = () => {
    return (
        <>
            <Head>
                <title>GreenView Solutions Homepage</title>
                <meta name="description" content="This page is the homepage that displays financing options, different fence types and all are contact info" />
            </Head>
            <div style={{ backgroundColor: 'white' }}>
                <InfoSection />
                <div style={{ color: 'black', display: 'flex', justifyContent: 'center', fontSize: '3rem', fontFamily: 'Courier New', textAlign: 'center' }}>
                    Pick Your Fence
                </div>
                <FenceCards />
                <Testimonials testimonials={testimonialsData} />
                <FinancingSection />
                <div style={{marginBottom: '5%'}}>
                    <CallToActionSection />
                </div>
                <div className={styles.accordionDiv}>
                    <AccordionInformation />
                    <Accordion />
                </div>
            </div>
        </>
    );
};

export default Homepage;
