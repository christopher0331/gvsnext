import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import styles from '../components/ContactUs.module.scss'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { useEffect } from 'react';
const ContactUs = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.innerHTML = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-59K2K2F');
        `;
        document.head.appendChild(script);
    
        return () => {
          document.head.removeChild(script);
        };
      }, []);

    return (
        <div className={styles.pageWrapper}>
            <Head>
                <title>Contact Us - GreenView Solutions</title>
                <meta name="description" content="Get in touch with GreenView Solutions for all your fencing needs in Denver, CO." />
            </Head>
            <Header />
            <main className={styles.contactUsPage}>
                <section className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Contact Us</h1>
                        <p className={styles.heroSubtitle}>Lets build your dream fence together</p>
                    </div>
                </section>
                <section className={styles.contactSection}>
                    <div className={styles.contactContainer}>
                        <div className={styles.formSection}>
                            <h2 className={styles.sectionTitle}>Send us a message</h2>
                            <ContactForm />
                        </div>
                        <div className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>Get in touch</h2>
                            <p className={styles.infoText}>
                                When you need residential or commercial fencing in Denver, CO,
                                GreenView Solutions is your trusted partner. Since 2010, we have been
                                building better fencing and creating extremely satisfied customers.
                                Let us add you to our growing list of success stories.
                            </p>
                            <ul className={styles.contactList}>
                                <li>
                                    <FaPhone className={styles.icon} />
                                    <span><strong>Phone:</strong> (303) 358-8168</span>
                                </li>
                                <li>
                                    <FaMapMarkerAlt className={styles.icon} />
                                    <span><strong>Address:</strong>6525 Gunpark Dr Ste 370-110, Boulder, CO 80301</span>
                                    <br />
                                    <span><strong>Address:</strong>12650 W 64th Ave Unit E-149, Arvada, CO 80004</span>

                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default ContactUs