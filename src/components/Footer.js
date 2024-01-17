// components/Footer.js
import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";


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
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaSquareFacebook size={50} />
                    </a>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <FaGoogle size={50} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FiInstagram size={50} />
                    </a>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} Fencing Pros. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
