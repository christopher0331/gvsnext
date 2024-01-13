// components/Footer.js

import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.about}>
                    <h3>About Us</h3>
                    <p>Leading fencing solutions provider with over 20 years of experience in bringing quality and craftsmanship to every project.</p>
                </div>
                <div className={styles.links}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <h3>Contact Us</h3>
                    <p>Email: contact@fencingpros.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Fencing St., City, State</p>
                </div>
                <div className={styles.socialMedia}>
                    <h3>Follow Us</h3>
                    {/* Icons or images for social media links */}
                    <a href="#"><img src="/path-to-facebook-icon" alt="Facebook"/></a>
                    <a href="#"><img src="/path-to-instagram-icon" alt="Instagram"/></a>
                    <a href="#"><img src="/path-to-twitter-icon" alt="Twitter"/></a>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} Fencing Pros. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
