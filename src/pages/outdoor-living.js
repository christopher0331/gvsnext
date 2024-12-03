import React, { useState, useEffect } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Hero from '../components/Hero.js';
import CallToActionSection from '@/components/CallToActionSection';
import SvgComponent from '@/components/SvgComponent';
import styles from '../components/OutdoorLiving.module.scss';
import Head from 'next/head';

export default function OutdoorLiving({ heroContent }) {
  // State to manage the expansion of text sections
  const [isExpanded, setIsExpanded] = useState({
    retreat: false,
    design: false,
  });

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

  // Function to toggle expansion state
  const toggleExpansion = section => {
    setIsExpanded(prevState => ({ ...prevState, [section]: !prevState[section] }));
  };

  return (
    <>
      <Head>
        <title>GreenView Solutions Outdoor Living Page</title>
        <meta name="description" content="This page is the outdoor living page and contains information on all our outdoor living products" />
        <link rel="canonical" href="https://greenviewsolutions.net/outdoor-living" />

      </Head>

      <div className={styles.outdoorLivingContainer}>
        <Header heroContent={heroContent} />

        <div className={styles.content}>

          <div className={styles.imageContainer}>
            <img src='https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/globalimages/outdoorLivingPergolaStucture.JPG' alt="Outdoor Living Pergola Structure" />
          </div>

          <div>
            <div className={styles.textSection}>
              <h2>Elevate Your Backyard Retreat</h2>
              <p>
                {isExpanded.retreat ? (
                  "Crafting a superior deck forms the foundation of countless possibilities for your outdoor haven in Denver. Sourcing from leading suppliers in the market, we present a diverse array of personalization for your venture. For a year-round Denver outdoor experience, we advocate the adoption of mineral-based composite decking. This choice ensures enduring quality and resilience across all seasons. Engage with our skilled designers at GreenView Solutions to discover the enhancements we can bring to your outdoor area."
                ) : (
                  "Crafting a superior deck forms the foundation of countless possibilities for your outdoor haven in Denver..."
                )}
                <button onClick={() => toggleExpansion('retreat')}>
                  {isExpanded.retreat ? 'Read less' : 'Read more'}
                </button>
              </p>
            </div>

            <div className={styles.textSection}>
              <h2>Exquisite Design and Implementation for Outdoor Environments</h2>
              <p>
                {isExpanded.design ? (
                  "GreenView Solutions brings over a decade and a half of expertise in converting Denver homes into exquisite outdoor sanctuaries..."
                ) : (
                  "GreenView Solutions brings over a decade and a half of expertise..."
                )}
                <button onClick={() => toggleExpansion('design')}>
                  {isExpanded.design ? 'Read less' : 'Read more'}
                </button>
              </p>
            </div>
          </div>
        </div>

        <CallToActionSection />
        <SvgComponent />
        <Footer />
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      heroContent: {
        title: 'Outdoor Living Year Round',
        description: 'This page is the outdoor living page and contains information on all our outdoor living products.',
        features: ['Custom designs', 'Durable materials', 'Expert installation'],
      },
    },
  };
}
