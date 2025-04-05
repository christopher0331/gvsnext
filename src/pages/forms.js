import { useState, useEffect } from 'react';
import Head from 'next/head';
import ProjectOverviewForm from '../components/ProjectOverviewForm';
import WarrantyForm from '../components/WarrantyForm';
import FeedbackForm from '../components/FeedbackForm';
import ContactForm from '../components/ContactForm'; // Import the new ContactForm
import styles from '../components/Forms.module.css';
import HeaderNew from '../components/HeaderNew';
import Footer from '../components/Footer';

export default function Forms({heroContent}) {
  const [activeForm, setActiveForm] = useState('general');
  const [showPopup, setShowPopup] = useState(false);
  const [showTabsIntro, setShowTabsIntro] = useState(true);

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
        <meta name="description" content="Explore our comprehensive range of outdoor living products designed to enhance your lifestyle. From custom designs to durable materials and expert installation, we offer solutions that transform your outdoor spaces into beautiful, functional areas for year-round enjoyment." />
      </Head>

      <HeaderNew heroContent={heroContent} />  

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
          
          {showTabsIntro && (
            <div className={styles.tabsIntroContainer}>
              <div className={styles.tabsIntro}>
                <h3>❗ Choose the Right Form for Your Needs ❗</h3>
                <p>We have <strong>4 different forms</strong> available to better serve you! Click on any tab below to switch between forms.</p>
                <button onClick={() => setShowTabsIntro(false)} className={styles.dismissButton}>Got it!</button>
              </div>
            </div>
          )}

          <div className={styles.tabContainer}>
            <button 
              className={`${styles.tab} ${activeForm === 'contact' ? styles.activeTab : ''}`}
              onClick={() => setActiveForm('contact')}
            >
              Contact Form
              {activeForm !== 'contact' && <span className={styles.tabBadge}>Try Me!</span>}
            </button>
            <button 
              className={`${styles.tab} ${activeForm === 'projectOverview' ? styles.activeTab : ''}`}
              onClick={() => setActiveForm('projectOverview')}
            >
              Project Overview Form
              {activeForm !== 'projectOverview' && <span className={styles.tabBadge}>Try Me!</span>}
            </button>
            <button 
              className={`${styles.tab} ${activeForm === 'warranty' ? styles.activeTab : ''}`}
              onClick={() => setActiveForm('warranty')}
            >
              Warranty Form
              {activeForm !== 'warranty' && <span className={styles.tabBadge}>Try Me!</span>}
            </button>
            <button 
              className={`${styles.tab} ${activeForm === 'feedback' ? styles.activeTab : ''}`}
              onClick={() => setActiveForm('feedback')}
            >
              Feedback
              {activeForm !== 'feedback' && <span className={styles.tabBadge}>Try Me!</span>}
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
}


export async function getStaticProps() {
  return {
    props: {
      heroImage: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/564989bf-964c-45c3-2ec6-deeeb9dd2800/public",
      showHero: true,
    },
    props: {
      heroContent: {
        title: 'Get in Touch with Us',
        description: 'Whether you have questions, need support, or want to provide feedback, our team is here to help. Fill out the appropriate form and we will get back to you as soon as possible. Our dedicated team is committed to providing you with the best service and support, ensuring your needs are met promptly and efficiently. We value your input and look forward to assisting you.',
        features: ['Contact us', 'Request information', 'Provide feedback'],
      },
    },
  };
}
