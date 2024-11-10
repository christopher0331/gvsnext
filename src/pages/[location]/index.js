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

export default function HomePage({ capitalizedLocation, locationContent }) {
  const router = useRouter();
  const { location } = router.query;

  return (
    <>
      <Head>
        <title>Welcome to GreenView Solutions in {capitalizedLocation}</title>
        <meta name="description" content={`Explore our services and offerings in ${capitalizedLocation}.`} />
        <link rel="canonical" href={`https://greenviewsolutions.net/${location}`} />
      </Head>

      <Header location={capitalizedLocation} />

      <div style={{ backgroundColor: 'white' }}>
        <h1>Welcome to GreenView Solutions in {capitalizedLocation}</h1>
        <p>{locationContent.description}</p>
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

  return { props: { capitalizedLocation, locationContent } };
} 