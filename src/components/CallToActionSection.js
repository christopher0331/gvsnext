import React from 'react';
import styles from './CallToActionSection.module.scss';

export default function CallToActionSection() {
    return (
        <div className={styles.callToActionSection}>
            <div className={styles.textContent}>
                <h2>Speak to a Fence Expert Now!</h2>
                <p>Our dedicated staff is always ready to assist with any inquiries or guidance you 
                   require to begin your fencing endeavor. Feel free to contact us via our online 
                   form or give us a call to obtain the information you seek!
                </p>
            </div>
            <button>Contact Us Today</button>
        </div>
    );
}
