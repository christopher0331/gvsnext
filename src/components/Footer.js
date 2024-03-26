import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import HomePageForm from './HomePageForm';
import Link from 'next/link';
import { FaSquareFacebook, FaGoogle } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>

                <div className={styles.about}>
                    <h3>About Us</h3>
                    <p>Welcome to our fencing company, proudly serving Arvada and Boulder, CO for over 20 years. We specialize in high-quality fencing solutions, offering wood, vinyl, chain-link, and ornamental metal fences. Our expert team ensures superior craftsmanship and customer satisfaction in every project. Contact us today for your fencing needs!</p>
                </div>

                <div className={styles.links}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/wood-fences">Wood Fences</Link></li>
                        <li><Link href="/vinyl-fences">Vinyl Fences</Link></li>
                        <li><Link href="/chainlink-fence">Chain Link Fences</Link></li>
                        <li><Link href="/outdoor-living">Outdoor Living</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                    </ul>
                </div>

                <div className={styles.contact}>
                    <h3>Contact Us</h3>
                    <p>Email: admin@gvsco.net</p>
                    <p>Phone: (303)358-8168</p>
                    <p>Address: 12650 W 64th Ave Unit E-149, Arvada, CO 80004</p>
                    <p>Address: 6525 Gunpark Dr Ste 370-110, Boulder, CO 80301</p>
                </div>

                <div>
                    <HomePageForm />
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} GreenView Solutions LLC. All rights reserved.</p>
            </div>

        </footer>
    );
};
