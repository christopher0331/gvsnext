// components/Financing.js
import React from 'react';
import styles from './FinancingSection.module.scss';
import Image from 'next/image';

const Financing = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className={styles.financingContainer}>
                <div className={styles.content}>
                    <h2>6 Months Interest-Free Financing Available</h2>
                    <p>Make your dream fence a reality with our flexible financing options. Get your fence now and spread the cost with 6 months interest-free financing. We understand that a quality fence is an investment in your property.</p>
                    <ul>
                        <li>0% interest for 6 months</li>
                        <li>Quick, simple application</li>
                        <li>Flexible payment plans</li>
                        <li>No hidden fees</li>
                    </ul>
                    <a href="https://www.ffcapplication.com/?i=XY5sWUYH644gfJ4gujgeBam42nEvNGIYEC5wDNmMe9o=" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>Apply for Financing</a>

                </div>
                <div className={styles.imageWrapper}>
                    <Image src="/wStandardLarge.png" alt="Financing Options" width={500} height={300} />
                </div>
            </div>
        </div>
    );
};

export default Financing;
