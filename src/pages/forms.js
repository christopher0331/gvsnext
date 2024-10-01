import { useState } from 'react';
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

  const renderForm = () => {
    switch(activeForm) {
      case 'contact':
        return <ContactForm />;
      case 'warranty':
        return <WarrantyForm />;
      case 'projectOverview':
        return <ProjectOverviewForm />;
      case 'feedback':
        return <FeedbackForm />;
      default:
        return <ContactForm />;
    }
  };

  return (
    <div>
      <Head>
        <title>Contact Us - Seattle Outdoor Living</title>
        <meta name="description" content="Get in touch with Seattle Outdoor and other things Living for your fencing needs." />
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
            <h2 className={styles.sidebarTitle}>What to expect from Seattle Outdoor Living</h2>
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

