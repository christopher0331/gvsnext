import React, { useState, useEffect } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Hero from '../components/Hero.js';
import CallToActionSection from '@/components/CallToActionSection';
import SvgComponent from '@/components/SvgComponent';
import styles from '../components/OutdoorLiving.module.scss';
import Head from 'next/head';
import Link from 'next/link';

export default function OutdoorLiving({ heroContent }) {
  // State to manage the expansion of text sections
  const [isExpanded, setIsExpanded] = useState({
    retreat: false,
    design: false,
  });
  
  // FAQ data for the FAQ section and schema markup
  const faqData = [
    {
      question: "What outdoor living structures are best for Colorado's climate?",
      answer: "For Colorado's varied climate, we recommend mineral-based composite decking, pergolas with adjustable louvers for sun control, and covered structures that can withstand snow loads while providing year-round enjoyment."
    },
    {
      question: "How long does it take to build a custom outdoor living space?",
      answer: "The timeline varies based on the project scope, but most custom outdoor living spaces take between 2-6 weeks from start to finish, including design, permitting, and construction phases."
    },
    {
      question: "Do I need a permit for building a deck or pergola in Denver?",
      answer: "Yes, most outdoor structures require permits in Denver and surrounding areas. Our team handles the entire permitting process for you, ensuring all structures meet local building codes and regulations."
    },
    {
      question: "What materials do you recommend for long-lasting outdoor structures in Colorado?",
      answer: "We recommend composite decking, cedar or redwood for pergolas, and powder-coated aluminum for structural components. These materials withstand Colorado's intense sun, seasonal temperature changes, and precipitation."
    },
    {
      question: "Can outdoor living spaces be used year-round in Colorado?",
      answer: "Absolutely! We design outdoor living spaces specifically for year-round use in Colorado. Features like overhead heaters, fire features, wind barriers, and adjustable shade systems make your outdoor space comfortable in all seasons."
    }
  ];

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
        <title>Custom Outdoor Living Spaces & Pergolas | GreenView Solutions Denver</title>
        <meta name="description" content="Transform your backyard into a year-round retreat with GreenView Solutions' custom outdoor living spaces. Expert design and installation of decks, pergolas, and outdoor structures in Denver, CO." />
        <link rel="canonical" href="https://greenviewsolutions.net/outdoor-living" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Custom Outdoor Living Spaces & Pergolas | GreenView Solutions Denver" />
        <meta property="og:description" content="Transform your backyard into a year-round retreat with GreenView Solutions' custom outdoor living spaces. Expert design and installation of decks, pergolas, and outdoor structures in Denver, CO." />
        <meta property="og:image" content="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/globalimages/outdoorLivingPergolaStucture.JPG" />
        <meta property="og:url" content="https://greenviewsolutions.net/outdoor-living" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Outdoor Living Spaces & Pergolas | GreenView Solutions Denver" />
        <meta name="twitter:description" content="Transform your backyard into a year-round retreat with GreenView Solutions' custom outdoor living spaces. Expert design and installation in Denver, CO." />
        <meta name="twitter:image" content="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/globalimages/outdoorLivingPergolaStucture.JPG" />
        <meta name="keywords" content="outdoor living spaces, custom decks, pergolas, Denver outdoor structures, backyard retreats, outdoor living Colorado" />
        
        {/* Schema.org structured data for outdoor living services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Outdoor Living Space Construction",
              "provider": {
                "@type": "LocalBusiness",
                "name": "GreenView Solutions",
                "image": "https://greenviewsolutions.net/gvsLogoGreen.png",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "6525 Gunpark Dr Ste 370-110",
                  "addressLocality": "Boulder",
                  "addressRegion": "CO",
                  "postalCode": "80301",
                  "addressCountry": "US"
                },
                "telephone": "+303-358-8168",
                "priceRange": "$$"
              },
              "areaServed": [
                "Denver", "Boulder", "Arvada", "Westminster", "Longmont", "Erie", "Broomfield", "Golden", "Aurora"
              ],
              "description": "Custom outdoor living spaces including decks, pergolas, and outdoor structures designed for year-round enjoyment in Colorado.",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </Head>

      <div className={styles.outdoorLivingContainer}>
        <Header heroContent={heroContent} />
        
        {/* Breadcrumb Navigation */}
        <div className={styles.breadcrumb}>
          <nav aria-label="breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
                <span> / </span>
              </li>
              <li aria-current="page">Outdoor Living</li>
            </ol>
          </nav>
        </div>

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

        {/* FAQ Section with Schema.org markup */}
        <div className={styles.faqSection}>
          <h2>Frequently Asked Questions About Outdoor Living Spaces</h2>
          <div className={styles.faqContainer}>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          
          {/* Hidden FAQ Schema for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqData.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })
            }}
          />
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
