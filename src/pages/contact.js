import { React, useEffect } from 'react';
import ContactForm from '../components/ContactForm.js';
import styles from '../components/ContactUs.module.scss';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Head from 'next/head';


const ContactUs = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
        // Initialize GTM dataLayer
        window.dataLayer = window.dataLayer || [];

        // Define gtag function
        function gtag() {
            window.dataLayer.push(arguments);
        }

        // Load GTM script
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11428060127';
        script.async = true;
        document.body.appendChild(script);

        // Execute the GTM script
        script.onload = () => {
            gtag('js', new Date());
            gtag('config', 'AW-11428060127');
        };

        // Clean up
        return () => {
            document.body.removeChild(script);
        };
    }, [])

    return (
        <div>
            <Head>
                <title>GreenView Solutions Contact Us Page</title>
                <meta name="description" content="This page is the contact us page and contains all information on how to get into contact with us" />
                <link rel="canonical" href="https://greenviewsolutions.net/contact" />
                <link rel="alternate" hreflang="en-US" href="https://greenviewsolutions.net/contact" />

            </Head>
            <Header />
            <div>
                <div className={styles.contactUsTitle}>
                    Contact Us
                </div>

                <div className={styles.contactFormAndInfo}>
                    <div className={styles.contactForm}>
                        <ContactForm />
                    </div>
                </div>
                <div>
                    <div className={styles.contactUsParagraph}>
                        When you’re in need of residential or commercial fencing in Denver, CO,
                        look no further than GreenView Solutions. We’ve been building better
                        fencing since 2010, and we’d love to add you to our ever-growing list of
                        extremely satisfied customers. As a residential and commercial fence contractor,
                        we take great pride in helping homeowners and business owners with all their
                        fencing needs. We provide the best materials and services, and our quality
                        craftsmen expertly install all our fences. With over 100 projects completed,
                        we’ve built quite a reputation as the Denver fencing experts. Find out a bit more
                        about what we can do for you and contact us today.
                        <br />
                        <br />
                        <ul>
                            <li>
                                <strong> Chain Link Fences </strong> –
                                An economical fencing option, we’re your source for chain link fences in Denver, CO.
                                Choose from a variety of colors, and we can also provide solutions for gates and
                                privacy slats.
                            </li>
                            <li>
                                <strong> Wood Fences </strong> –
                                Choose wood fencing for your home or business when you need privacy and security.
                                We offer a variety of styles to choose from.
                            </li>
                            <li>
                                <strong> Ornamental Iron Fencing </strong> –
                                Add security and elegance to your business or home with a decorative fence. We
                                have multiple styles and colors to select from.
                            </li>
                            <li>
                                <strong> Commercial Fencing </strong> –
                                Our commercial fence installation services will give you the security you need.
                                Whether you need a large or small fence or one indoors or outdoors, we’re the
                                team to call. We use the best industrial materials that will stand the test of
                                time.
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default ContactUs;