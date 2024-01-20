import React from 'react';
import InfoSection from './InfoSection.js';
import FenceCards from './FenceCard.js';
import { testimonialsData } from './TestimonialsData.js';
import Testimonials from './ReviewsSections.js';
import FinancingSection from './FinancingSection.js';
import Accordion from './AccordionDropDown.js';
import AccordionInformation from './AccordionInformation.js';
import styles from './AccordionDropDown.module.scss';

const Homepage = () => {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <InfoSection />
            <div style={{ color: 'black', display: 'flex', justifyContent: 'center', fontSize: '3rem', fontFamily: 'Courier New',textAlign: 'center' }}>
                Pick Your Fence
            </div>
            <FenceCards />
            <Testimonials testimonials={testimonialsData} />
            <FinancingSection />

            <div className={styles.accordionDiv}>
                <AccordionInformation />
                <Accordion />
            </div>
        </div>
    );
};

export default Homepage;
