import { useState, useEffect } from 'react';
import Head from 'next/head';
import ProjectOverviewForm from '../components/ProjectOverviewForm';
import WarrantyForm from '../components/WarrantyForm';
import FeedbackForm from '../components/FeedbackForm';
import ContactForm from '../components/ContactForm'; // Import the new ContactForm
import styles from '../components/Forms.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Forms() {
  const [activeForm, setActiveForm] = useState('general');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  const closePopup = () => {
    setShowPopup(false);
  };

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

  const renderForm = () => {
    switch(activeForm) {
      case 'contact':
        return <ContactForm onSubmit={handleSubmit} />;
      case 'warranty':
        return <WarrantyForm onSubmit={handleSubmit} />;
      case 'projectOverview':
        return <ProjectOverviewForm onSubmit={handleSubmit} />;
      case 'feedback':
        return <FeedbackForm onSubmit={handleSubmit} />;
      default:
        return <ContactForm onSubmit={handleSubmit} />;
    }
  };

  return (
    <div>
      <Head>
        <title>Contact Us - GreenView Solutions</title>
        <meta name="description" content="Get in touch with GreenView Solutions for your fencing and outdoor living needs." />
      </Head>
      <Header />
      <div className={styles.pageContainer}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <h2 className={styles.sidebarTitle}>Financing Options Available!</h2>
            <ul className={styles.sidebarList}>
              <li>Get an Instant Decision</li>
              <li>Prequalify With No Impact to Your Credit</li>
              <li>Financing Packages Up to $75,000</li>
            </ul>
          </div>

          <div className={styles.sidebarSection}>
            <h2 className={styles.sidebarTitle}>What to expect from GreenView Solutions</h2>
            <ul className={styles.sidebarList}>
              <li>Top Rated Customer Service</li>
              <li>Professional Team</li>
              <li>Licensed, Bonded & Insured</li>
              <li>Industry Best Warranty</li>
              <li>GVS Fence Quality</li>
              <li>GVS Fence Selection</li>
            </ul>
          </div>
        </aside>

        <main className={styles.mainContent}>
          <h1 className={styles.title}>Contact Us</h1>

          <div className={styles.tabContainer}>
            <button 
              className={`${styles.tab} ${activeForm === 'contact' ? styles.activeTab : ''}`}
              onClick={() => setActiveForm('contact')}
            >
              Contact Form
            </button>
            <button 
              className={`${styles.tab} ${activeForm === 'projectOverview' ? styles.activeTab : ''}`}
              onClick={() => setActiveForm('projectOverview')}
            >
              Project Overview Form
            </button>
            <button 
              className={`${styles.tab} ${activeForm === 'warranty' ? styles.activeTab : ''}`}
              onClick={() => setActiveForm('warranty')}
            >
              Warranty Form
            </button>
            <button 
              className={`${styles.tab} ${activeForm === 'feedback' ? styles.activeTab : ''}`}
              onClick={() => setActiveForm('feedback')}
            >
              Feedback
            </button>
          </div>

          <div className={styles.formContainer}>
            {renderForm()}
          </div>
        </main>
      </div>
      <Footer />

      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.close} onClick={closePopup}>&times;</span>
            <h2>Thank You!</h2>
            <p>We appreciate your submission. Our team will review it and get back to you soon!</p>
            <button className={styles.closeButton} onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}export async function getStaticProps() {
  return {
    props: {
      heroImage: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/564989bf-964c-45c3-2ec6-deeeb9dd2800/public",
      showHero: true,
    },
  };
}

