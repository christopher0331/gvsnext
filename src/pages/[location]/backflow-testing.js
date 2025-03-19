import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/backflow/HeroSection';
import ServicesOverview from '../../components/backflow/ServicesOverview';
import BenefitsSection from '../../components/backflow/BenefitsSection';
import ProcessSection from '../../components/backflow/ProcessSection';
import FAQSection from '../../components/backflow/FAQSection';
import TestimonialSection from '../../components/backflow/TestimonialSection';
import CallToActionSection from '../../components/CallToActionSection';
import Reviews from '../../components/Reviews';
import AreasServed from '../../components/AreasServed';
import LocationsMap from '../../components/LocationsMap';
import BackflowLocationContent from '../../components/backflow/BackflowLocationContent';
import { testimonialsData } from '../../components/TestimonialsData';
import styles from '../../components/backflow/BackflowTesting.module.scss';
import { useRouter } from 'next/router';
import { isValidLocation, getLocationData, CORE_LOCATIONS } from '../../utils/locations';

export default function BackflowTesting({ capitalizedLocation, locationContent, heroContent }) {
  const router = useRouter();
  const { location } = router.query;

  // FAQ data for the FAQ section and schema markup
  const faqCategories = [
    {
      name: "Backflow Testing Basics",
      icon: "🔍",
      faqs: [
        {
          question: `What is backflow testing and why is it important in ${capitalizedLocation}?`,
          answer: `Backflow testing is a critical safety procedure that checks if your backflow prevention devices are functioning properly to prevent contaminated water from flowing back into the clean water supply. In ${capitalizedLocation}, it's essential for protecting public health by ensuring that pollutants, chemicals, or waste materials don't enter the drinking water system. Regular testing is not only important for safety but is also required by most municipalities and water authorities in the ${capitalizedLocation} area.`
        },
        {
          question: `How often should backflow testing be performed in ${capitalizedLocation}?`,
          answer: `In ${capitalizedLocation} and surrounding areas, backflow testing is typically required annually. Commercial properties, irrigation systems, and fire sprinkler systems in ${capitalizedLocation} require yearly certification. However, some high-risk facilities may require more frequent testing. We recommend checking with your local ${capitalizedLocation} water authority for specific requirements, and we can help you establish a regular testing schedule to maintain compliance.`
        },
        {
          question: "What happens if I don't get my backflow preventer tested?",
          answer: `Failing to test your backflow prevention devices in ${capitalizedLocation} can result in several consequences: 1) Legal penalties and fines from your municipality or water provider, 2) Potential water service interruption until compliance is achieved, 3) Increased liability if contamination occurs, 4) Risk to public health and safety. Additionally, insurance companies may deny claims related to water damage if required backflow testing wasn't performed.`
        }
      ]
    },
    {
      name: "Our Testing Services",
      icon: "🔧",
      faqs: [
        {
          question: "What types of backflow preventers do you test?",
          answer: `We test all types of backflow prevention devices in ${capitalizedLocation} including Reduced Pressure Zone (RPZ) assemblies, Double Check Valve Assemblies (DCVA), Pressure Vacuum Breakers (PVB), Atmospheric Vacuum Breakers (AVB), and Spill-Resistant Vacuum Breakers (SVB). Our certified technicians are experienced with all makes and models used in residential, commercial, and industrial applications throughout ${capitalizedLocation}.`
        },
        {
          question: `What does your backflow testing service in ${capitalizedLocation} include?`,
          answer: `Our comprehensive backflow testing service in ${capitalizedLocation} includes: 1) Visual inspection of the device and installation, 2) Functional testing of all components according to industry standards, 3) Documentation of test results, 4) Filing of required reports with local ${capitalizedLocation} authorities, 5) Backflow test tags properly attached to devices, 6) Recommendations for repairs or replacement if needed, and 7) Scheduling for your next annual test to ensure continuous compliance.`
        },
        {
          question: "Are your technicians certified for backflow testing?",
          answer: `Yes, all our backflow testing technicians serving ${capitalizedLocation} are certified by the American Society of Sanitary Engineering (ASSE) and hold valid backflow tester certifications recognized by Colorado authorities. They undergo regular training to stay current with the latest regulations, testing procedures, and industry best practices. We're fully licensed, insured, and authorized to perform testing and submit official documentation to water authorities throughout ${capitalizedLocation} and the entire Denver Metro area.`
        }
      ]
    },
    {
      name: "Scheduling & Pricing",
      icon: "📅",
      faqs: [
        {
          question: "How long does backflow testing take?",
          answer: `A standard backflow test in ${capitalizedLocation} typically takes 30-45 minutes per device, depending on the type, size, and accessibility of the backflow preventer. For properties with multiple devices, we efficiently schedule our testing to minimize disruption to your operations. We pride ourselves on punctuality and will provide you with a specific time window when scheduling your appointment in ${capitalizedLocation}.`
        },
        {
          question: `What is the cost of backflow testing in ${capitalizedLocation}?`,
          answer: `Our backflow testing services in ${capitalizedLocation} start at $75 for a standard residential backflow preventer. Commercial pricing depends on the number and types of devices, with volume discounts available for properties with multiple units. We provide transparent, upfront pricing with no hidden fees. Contact us for a detailed quote based on your specific needs in ${capitalizedLocation} and we'll be happy to explain all costs involved.`
        },
        {
          question: "How do I schedule backflow testing with your company?",
          answer: `Scheduling backflow testing in ${capitalizedLocation} is easy! You can request an appointment through our online booking system on this website, call our office at (303) 358-8168, or email us at info@greenviewsolutions.net. We offer flexible scheduling including some evening and weekend appointments to accommodate your needs. For annual testing, we also offer a reminder service to help you maintain compliance without having to track testing dates yourself.`
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
    "url": `https://www.greenviewsolutions.net/${location}/backflow-testing`,
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
    "description": `Professional backflow testing, certification, and installation services for residential and commercial properties in ${capitalizedLocation}. Our certified technicians ensure your water systems remain safe and compliant with local regulations.`,
    "offers": {
      "@type": "Offer",
      "price": "75.00",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    }
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

  return (
    <div className={styles.container}>
      <Head>
        <title>Backflow Testing & Certification Services in {capitalizedLocation}, CO | GreenView Solutions</title>
        <meta name="description" content={`Professional backflow testing & certification in ${capitalizedLocation}, CO. Licensed technicians, timely service & competitive rates. Protect your water supply today!`} />
        <meta name="keywords" content={`backflow testing ${capitalizedLocation}, backflow certification ${capitalizedLocation}, backflow prevention ${capitalizedLocation}, ${capitalizedLocation} backflow testing, commercial backflow testing ${capitalizedLocation}, residential backflow testing ${capitalizedLocation}, certified backflow tester ${capitalizedLocation}, backflow inspection ${capitalizedLocation}, backflow installation ${capitalizedLocation}`} />
        <link rel="canonical" href={`https://www.greenviewsolutions.net/${location}/backflow-testing`} />
        <meta property="og:title" content={`Backflow Testing & Certification Services in ${capitalizedLocation}, CO | GreenView Solutions`} />
        <meta property="og:description" content={`Professional backflow testing & certification in ${capitalizedLocation}, CO. Licensed technicians, timely service & competitive rates. Protect your water supply today!`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.greenviewsolutions.net/${location}/backflow-testing`} />
        <meta property="og:image" content="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/backflow/backflow-testing-hero.webp" />
        <meta name="geo.region" content="US-CO" />
        <meta name="geo.placename" content={`${capitalizedLocation}, Colorado`} />
        
        {/* Schema.org markup for FAQs */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        
        {/* Schema.org markup for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        
        {/* Schema.org markup for Service */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Head>

      <Header location={capitalizedLocation} heroContent={heroContent} />

      <main>
        
        <ServicesOverview location={capitalizedLocation} />
        
        <BenefitsSection location={capitalizedLocation} />
        
        <ProcessSection location={capitalizedLocation} />
        
        <FAQSection faqCategories={faqCategories} location={capitalizedLocation} />
        
        <TestimonialSection testimonials={testimonialsData} location={capitalizedLocation} />
        
        <CallToActionSection 
          title={`Ready to Schedule Your Backflow Testing in ${capitalizedLocation}?`}
          description={`Our certified technicians are ready to help ensure your water system in ${capitalizedLocation} is safe and compliant with local regulations.`}
          buttonText="Schedule Now"
          buttonLink="/contact"
        />
        
        <Reviews testimonials={testimonialsData} />
        
        <LocationsMap />
        
        <BackflowLocationContent location={location} />
        
        <AreasServed />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = CORE_LOCATIONS.map(location => ({
    params: { location }
  }));

  return { 
    paths,
    fallback: 'blocking' // This allows us to handle invalid locations
  };
}

export async function getStaticProps({ params }) {
  const { location } = params;
  
  // Check if this is a valid location
  if (!isValidLocation(location)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const locationData = getLocationData(location);
  const capitalizedLocation = locationData.name;

  const locationContent = {
    title: `Professional Backflow Testing Services in ${capitalizedLocation}, Colorado`,
    description: `Expert backflow testing and certification services in ${capitalizedLocation}. We provide professional testing, certification, and installation for both residential and commercial properties.`,
    metaDescription: `Professional backflow testing & certification in ${capitalizedLocation}, CO. Licensed technicians, timely service & competitive rates. Protect your water supply today!`,
    nearestOffice: locationData.nearestOffice,
    distanceFromOffice: locationData.distanceFromOffice
  };

  const heroContent = {
    title: `Backflow Testing & Certification in ${capitalizedLocation}`,
    description: `Professional backflow testing and certification services in ${capitalizedLocation}. Our certified technicians ensure your water systems remain safe and compliant with local regulations.`,
    features: ['Certified Technicians', 'Same-Day Service', 'Competitive Rates'],
  };

  return { props: { capitalizedLocation, locationContent, heroContent } };
}
