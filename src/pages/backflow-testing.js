import Head from 'next/head'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/backflow/HeroSection';
import ServicesOverview from '../components/backflow/ServicesOverview';
import BenefitsSection from '../components/backflow/BenefitsSection';
import ProcessSection from '../components/backflow/ProcessSection';
import FAQSection from '../components/backflow/FAQSection';
import TestimonialSection from '../components/backflow/TestimonialSection';
import CallToActionSection from '../components/CallToActionSection';
import Reviews from '../components/Reviews';
import AreasServed from '../components/AreasServed';
import SvgComponent from '../components/SvgComponent';
import { testimonialsData } from '../components/TestimonialsData';
import styles from '../components/backflow/BackflowTesting.module.scss';

export default function BackflowTesting({heroContent}) {
  // FAQ data for the FAQ section and schema markup
  const faqCategories = [
    {
      name: "Backflow Testing Basics",
      icon: "🔍",
      faqs: [
        {
          question: "What is backflow testing and why is it important?",
          answer: "Backflow testing is a critical safety procedure that checks if your backflow prevention devices are functioning properly to prevent contaminated water from flowing back into the clean water supply. It's essential for protecting public health by ensuring that pollutants, chemicals, or waste materials don't enter the drinking water system. Regular testing is not only important for safety but is also required by most municipalities and water authorities."
        },
        {
          question: "How often should backflow testing be performed?",
          answer: "In most municipalities including Denver and surrounding areas, backflow testing is required annually. Commercial properties, irrigation systems, and fire sprinkler systems typically require yearly certification. However, some high-risk facilities may require more frequent testing. We recommend checking with your local water authority for specific requirements, and we can help you establish a regular testing schedule to maintain compliance."
        },
        {
          question: "What happens if I don't get my backflow preventer tested?",
          answer: "Failing to test your backflow prevention devices can result in several consequences: 1) Legal penalties and fines from your municipality or water provider, 2) Potential water service interruption until compliance is achieved, 3) Increased liability if contamination occurs, 4) Risk to public health and safety. Additionally, insurance companies may deny claims related to water damage if required backflow testing wasn't performed."
        }
      ]
    },
    {
      name: "Our Testing Services",
      icon: "🔧",
      faqs: [
        {
          question: "What types of backflow preventers do you test?",
          answer: "We test all types of backflow prevention devices including Reduced Pressure Zone (RPZ) assemblies, Double Check Valve Assemblies (DCVA), Pressure Vacuum Breakers (PVB), Atmospheric Vacuum Breakers (AVB), and Spill-Resistant Vacuum Breakers (SVB). Our certified technicians are experienced with all makes and models used in residential, commercial, and industrial applications."
        },
        {
          question: "What does your backflow testing service include?",
          answer: "Our comprehensive backflow testing service includes: 1) Visual inspection of the device and installation, 2) Functional testing of all components according to industry standards, 3) Documentation of test results, 4) Filing of required reports with local authorities, 5) Backflow test tags properly attached to devices, 6) Recommendations for repairs or replacement if needed, and 7) Scheduling for your next annual test to ensure continuous compliance."
        },
        {
          question: "Are your technicians certified for backflow testing?",
          answer: "Yes, all our backflow testing technicians are certified by the American Society of Sanitary Engineering (ASSE) and hold valid backflow tester certifications recognized by Colorado authorities. They undergo regular training to stay current with the latest regulations, testing procedures, and industry best practices. We're fully licensed, insured, and authorized to perform testing and submit official documentation to water authorities throughout the Denver Metro area."
        }
      ]
    },
    {
      name: "Scheduling & Pricing",
      icon: "📅",
      faqs: [
        {
          question: "How long does backflow testing take?",
          answer: "A standard backflow test typically takes 30-45 minutes per device, depending on the type, size, and accessibility of the backflow preventer. For properties with multiple devices, we efficiently schedule our testing to minimize disruption to your operations. We pride ourselves on punctuality and will provide you with a specific time window when scheduling your appointment."
        },
        {
          question: "What is the cost of backflow testing?",
          answer: "Our backflow testing services start at $75 for a standard residential backflow preventer. Commercial pricing depends on the number and types of devices, with volume discounts available for properties with multiple units. We provide transparent, upfront pricing with no hidden fees. Contact us for a detailed quote based on your specific needs and we'll be happy to explain all costs involved."
        },
        {
          question: "How do I schedule backflow testing with your company?",
          answer: "Scheduling is easy! You can request an appointment through our online booking system on this website, call our office at (303) 358-8168, or email us at info@greenviewsolutions.net. We offer flexible scheduling including some evening and weekend appointments to accommodate your needs. For annual testing, we also offer a reminder service to help you maintain compliance without having to track testing dates yourself."
        }
      ]
    }
  ];

  // Schema markup for FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  // Schema markup for local business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "GreenView Solutions",
    "image": "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/globalimages/logo.webp",
    "url": "https://www.greenviewsolutions.net/backflow-testing",
    "telephone": "(303) 358-8168",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10189 E. Colfax Ave.",
      "addressLocality": "Aurora",
      "addressRegion": "CO",
      "postalCode": "80010",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.740010,
      "longitude": -104.871941
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/GreenViewSolutions/",
      "https://www.instagram.com/greenviewsolutions/"
    ],
    "priceRange": "$$",
    "servesCuisine": "Backflow Testing and Certification"
  };

  // Schema markup for service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Backflow Testing and Certification",
    "provider": {
      "@type": "LocalBusiness",
      "name": "GreenView Solutions"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.7392,
        "longitude": -104.9903
      },
      "geoRadius": "50 miles"
    },
    "description": "Professional backflow testing, certification, and installation services for residential and commercial properties in the Denver Metro area. Our certified technicians ensure your water systems remain safe and compliant with local regulations.",
    "offers": {
      "@type": "Offer",
      "price": "75.00",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Backflow Testing & Certification Services Denver Metro | GreenView Solutions</title>
        <meta name="description" content="Professional backflow testing & certification in the Denver Metro area. Licensed technicians, timely service & competitive rates. Protect your water supply today!" />
        <meta name="keywords" content="backflow testing, backflow certification, backflow prevention, Denver Metro backflow testing, commercial backflow testing, residential backflow testing, certified backflow tester, backflow inspection, backflow installation" />
        <meta property="og:title" content="Backflow Testing & Certification Services Denver Metro | GreenView Solutions" />
        <meta property="og:description" content="Professional backflow testing & certification in the Denver Metro area. Licensed technicians, timely service & competitive rates. Protect your water supply today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.greenviewsolutions.net/backflow-testing" />
        <meta property="og:image" content="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/backflow/backflow-testing-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Backflow Testing & Certification Services Denver Metro" />
        <meta name="twitter:description" content="Professional backflow testing & certification in the Denver Metro area. Licensed technicians, timely service & competitive rates." />
        <meta name="twitter:image" content="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/backflow/backflow-testing-hero.jpg" />
        <link rel="canonical" href="https://www.greenviewsolutions.net/backflow-testing" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </Head>

      <Header heroContent={heroContent} />
      
      <main className={styles.main}>
        
        <ServicesOverview />
        <BenefitsSection />
        
        <section className={styles.infoSection}>
          <div className={styles.infoContainer}>
            <h2>Denver&apos;s Trusted Backflow Testing Experts</h2>
            <p>
              At GreenView Solutions, we provide comprehensive backflow testing and certification services to ensure your water systems remain safe and compliant with local regulations. Our certified technicians have extensive experience working with all types of backflow prevention devices across residential, commercial, and municipal properties throughout Denver and the surrounding areas.
            </p>
            <p>
              Backflow prevention is a critical component of water safety, protecting your drinking water from contamination. Whether you need annual certification for your business, testing for your irrigation system, or installation of new backflow preventers, our team delivers reliable, professional service with clear documentation and competitive pricing.
            </p>
            <div className={styles.calloutBox}>
              <h3>Why Choose GreenView Solutions for Backflow Testing?</h3>
              <ul>
                <li><strong>Certified Technicians:</strong> All our testers are fully certified and stay current with the latest regulations</li>
                <li><strong>Comprehensive Service:</strong> Testing, certification, and installation</li>
                <li><strong>Timely Reporting:</strong> We handle all required documentation with local water authorities</li>
                <li><strong>Competitive Pricing:</strong> Transparent rates with no hidden fees</li>
                <li><strong>Prompt Service:</strong> Flexible scheduling to meet your needs</li>
              </ul>
            </div>
          </div>
        </section>
        
        <ProcessSection />
        <AreasServed />
        <Reviews testimonials={testimonialsData.filter(t => t.service === "backflow" || t.service === "general").slice(0, 6)} />
        <CallToActionSection
          title="Schedule Your Backflow Testing Today"
          description="Protect your water system and ensure compliance with local regulations. Our certified technicians provide thorough testing and clear documentation."
          buttonText="Request a Free Quote"
          buttonLink="/contact"
        />
        
        <FAQSection faqCategories={faqCategories} />
        
        <div className={styles.processOverview}>
          <h2>Our Simple Process</h2>
          <p className={styles.processSubtitle}>Getting your backflow testing and certification is easy with our straightforward approach</p>
          <p className={styles.processNote}>Image is clickable and interactive</p>
          <SvgComponent />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      heroContent: {
        title: 'Backflow Testing & Certification',
        description: 'Professional backflow testing, certification, and repair services for residential and commercial properties in Denver and surrounding areas. Our certified technicians ensure your water systems remain safe and compliant with local regulations.',
        features: ['Certified Technicians', 'Same-Day Service Available', 'Competitive Rates'],
      },
    },
  };
}
