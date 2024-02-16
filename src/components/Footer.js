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
                        <li><a href="#">Wood Fences</a></li>
                        <li><a href="#">Outdoor Living</a></li>
                        <li><a href="#">Rolloff Dumpsters</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Portfolio</a></li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <h3>Contact Us</h3>
                    <p>Email: contact@fencingpros.com</p>
                    <p>Phone: (303)358-8168</p>
                    <p>Address: 12650 W 64th Ave Unit E-149, Arvada, CO 80004</p>
                    <p>Address: 6525 Gunpark Dr Ste 370-110, Boulder, CO 80301</p>
                </div>
                <div className={styles.socialMedia}>
                    <h3>Follow Us</h3>
                    {/* Icons or images for social media links */}
                    <a href="https://www.facebook.com/greenviewsolutions" target="_blank" rel="noopener noreferrer">
                        <FaSquareFacebook size={50} />
                    </a>
                    <a href="https://www.google.com/maps/place/Greenview+Solutions/@39.9890046,-105.1713587,11z/data=!4m6!3m5!1s0x876bf5d9d671bf3f:0xe263da5d1b64b4a4!8m2!3d40.125623!4d-104.9541494!16s%2Fg%2F11j76mvz9t?coh=164777&entry=tt&shorturl=1" target="_blank" rel="noopener noreferrer">
                        <FaGoogle size={50} />
                    </a>
                    <a href="https://www.instagram.com/greenview_solutions_llc" target="_blank" rel="noopener noreferrer">
                        <FiInstagram size={50} />
                    </a>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} GreenView Solutions LLC. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
