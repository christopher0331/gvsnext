import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InfoSection from '../../components/InfoSection';
import FenceCards from '../../components/FenceCard';
import { testimonialsData } from '../../components/TestimonialsData';
import Reviews from '../../components/Reviews';
import FinancingSection from '../../components/FinancingSection';
import Accordion from '../../components/AccordionDropDown';
import styles from '../../components/AccordionDropDown.module.scss';
import CallToActionSection from '../../components/CallToActionSection';
import LocationsMap from '../../components/LocationsMap';
import FeaturedProjects from '../../components/FeaturedProjects';
import AreasServed from '../../components/AreasServed';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LocationContent from '../../components/LocationContent';
import { CORE_LOCATIONS, isValidLocation, getLocationData } from '../../utils/locations';


export default function HomePage({ capitalizedLocation, locationContent, headerData, heroContent  }) {
  const router = useRouter();
  const { location } = router.query;
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
    <>
      <Head>
        <title>Professional Fencing Services in {capitalizedLocation}, CO | GreenView Solutions</title>
        <meta name="description" content={`Expert fence installation and repair services in ${capitalizedLocation}, Colorado. Local expertise, custom designs, and professional installation for residential and commercial properties.`} />
        <link rel="canonical" href={`https://greenviewsolutions.net/${location}`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`Professional Fencing Services in ${capitalizedLocation}, CO | GreenView Solutions`} />
        <meta property="og:description" content={`Expert fence installation and repair services in ${capitalizedLocation}, Colorado. Local expertise, custom designs, and professional installation.`} />
        <meta property="og:url" content={`https://greenviewsolutions.net/${location}`} />
        <meta property="og:type" content="website" />
        <meta name="geo.region" content="US-CO" />
        <meta name="geo.placename" content={`${capitalizedLocation}, Colorado`} />
      </Head>

      <Header location={capitalizedLocation} data={headerData} heroContent={heroContent} locatio={capitalizedLocation}/>

      <div style={{ backgroundColor: 'white' }}>
        <InfoSection />
        <Reviews testimonials={testimonialsData} />

        <FeaturedProjects />

        <div style={{ marginBottom: '5%' }}>
          <CallToActionSection />
        </div>

        <FinancingSection />

        <div className={styles.accordionDiv} style={{ overflow: 'hidden' }}>
          <Accordion />
        </div>

        <LocationsMap />

        <AreasServed />
        <LocationContent location={location} />
      </div>

      <Footer />
    </>
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
    title: `Professional Fencing Services in ${capitalizedLocation}, Colorado`,
    description: `Expert fence installation and repair services in ${capitalizedLocation}. We provide custom designs, professional installation, and dedicated support for both residential and commercial properties.`,
    metaDescription: `Expert fence installation and repair services in ${capitalizedLocation}, Colorado. Local expertise, custom designs, and professional installation for residential and commercial properties.`,
    nearestOffice: locationData.nearestOffice,
    distanceFromOffice: locationData.distanceFromOffice
  };

  const heroContent = {
    title: `Premium Fencing Solutions in ${capitalizedLocation}`,
    description: `Explore our exceptional range of vinyl fencing options in ${capitalizedLocation}, designed to enhance your property's aesthetics, privacy, and security.`,
    features: ['Low maintenance', 'Weather-resistant', 'Customizable'],
  };

  return { props: { capitalizedLocation, locationContent, heroContent } };
}