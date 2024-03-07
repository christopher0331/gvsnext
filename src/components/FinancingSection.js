// components/Financing.js
import React from 'react';
import styles from './FinancingSection.module.scss';
import Image from 'next/image';

const Financing = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className={styles.financingContainer}>
                <div className={styles.content}>
                    <h2>Flexible Financing for Your Fencing Needs</h2>
                    <p>Make your dream fence a reality with our tailored financing options. We understand that a quality fence is an investment in your property. Thats why we offer flexible, budget-friendly financing solutions.</p>
                    <ul>
                        <li>Competitive interest rates</li>
                        <li>Simple application process</li>
                        <li>Customizable payment plans</li>
                        <li>No hidden fees</li>
                    </ul>
                    <a href="https://www.ffcapplication.com/?i=XY5sWUYH644gfJ4gujgeBam42nEvNGIYEC5wDNmMe9o=" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>Apply for Financing</a>

                </div>
                <div className={styles.imageWrapper}>
                    <Image src="/picket.png" alt="Financing Options" width={500} height={300} />
                </div>
            </div>
        </div>
    );
};

export default Financing;
