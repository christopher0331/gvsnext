import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InfoSection from '../../components/InfoSection';
import FenceCards from '../../components/FenceCard';
import { testimonialsData } from '../../components/TestimonialsData';
import Testimonials from '../../components/ReviewsSections';
import FinancingSection from '../../components/FinancingSection';
import Accordion from '../../components/AccordionDropDown';
import styles from '../../components/AccordionDropDown.module.scss';
import CallToActionSection from '../../components/CallToActionSection';
import LocationsMap from '../../components/LocationsMap';
import FeaturedProjects from '../../components/FeaturedProjects';
import AreasServed from '../../components/AreasServed';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


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
        <title>Welcome to GreenView Solutions in {capitalizedLocation}</title>
        <meta name="description" content={`Explore our services and offerings in ${capitalizedLocation}.`} />
        <link rel="canonical" href={`https://greenviewsolutions.net/${location}`} />
      </Head>

      <Header location={capitalizedLocation} data={headerData} heroContent={heroContent} locatio={capitalizedLocation}/>

      <div style={{ backgroundColor: 'white' }}>
        <InfoSection />

        <Testimonials testimonials={testimonialsData} />

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

      </div>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const locations = ['boulder', 'arvada', 'denver', 'littleton', 'lakewood', 'golden', 'thornton', 'broomfield', 'centennial', 'englewood', 'glenwood springs', 'gunbarrel', 'highlands ranch', 'jefferson county', 'louisville', 'northglenn', 'parker', 'superior', 'westminster', 'eastlake', 'belmar', 'castle rock', 'columbine valley', 'fountain', 'greenwood village', 'lone tree', 'fort collins', 'meridian', 'milliken', 'parker', 'sedalia', 'superior', 'estes park', 'westminster hills']; 
  const paths = locations.map(location => ({
    params: { location }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { location } = params;
  const capitalizedLocation = location.charAt(0).toUpperCase() + location.slice(1);

  // Example location-specific content
  const locationContent = {
    description: `Discover our exceptional services and offerings in ${capitalizedLocation}.`
  };

  const heroContent = {
    title: `Premium Fencing Solutions in ${capitalizedLocation}`,
    description: `Explore our exceptional range of vinyl fencing options in ${capitalizedLocation}, designed to enhance your property's aesthetics, privacy, and security.`,
    features: ['Low maintenance', 'Weather-resistant', 'Customizable'],
  };

  return { props: { capitalizedLocation, locationContent, heroContent } };
}