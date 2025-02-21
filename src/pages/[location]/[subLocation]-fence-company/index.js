import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getLocationData, isValidLocation } from '../../../utils/locations';
import styles from '../FenceCompany.module.scss';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CallToActionSection from '../../../components/CallToActionSection';
import Reviews from '../../../components/Reviews';

export default function LocationFenceCompany({ location, subLocation, capitalizedLocation, phoneNumber, headerData, heroContent }) {
  const router = useRouter();

  const title = `${capitalizedLocation} Fence Company | GreenView Solutions`;
  const description = `Looking for a fence company near me in ${capitalizedLocation}, CO? GreenView Solutions offers professional fence installation, repair, and custom fencing solutions in ${capitalizedLocation} and surrounding areas.`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={`https://greenviewsolutions.net/${location}/${subLocation}-fence-company`} />
      </Head>

      <Header location={capitalizedLocation} data={headerData} heroContent={heroContent} />

      <main className={styles.main}>

        <section className={styles.introduction}>
          <h2>Your Local {capitalizedLocation} Fence Contractor</h2>
          <p>
            Are you searching for a &quot;fence company near me&quot; in {capitalizedLocation}? Look no further than GreenView Solutions. 
            We&apos;re your trusted local fence contractors, serving the {capitalizedLocation} area and surrounding communities 
            with premium fencing solutions tailored to your needs.
          </p>
        </section>

        <section className={styles.services}>
          <h2>Expert Fence Installation in {capitalizedLocation}</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h3>Residential Fencing</h3>
              <p>
                Transform your {capitalizedLocation} home with our custom residential fencing solutions. From privacy fences 
                to decorative picket fences, we deliver quality craftsmanship and lasting value throughout the {capitalizedLocation} area.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Commercial Fencing</h3>
              <p>
                Protect your business in {capitalizedLocation} with our commercial fencing solutions. We understand the unique 
                security and aesthetic needs of commercial properties throughout the {capitalizedLocation} area.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Custom Fence Design</h3>
              <p>
                Create the perfect fence for your {capitalizedLocation} property. Our custom design services ensure your fence 
                complements your property while meeting all local building codes and HOA requirements.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.materials}>
          <h2>Premium Fencing Materials</h2>
          <div className={styles.materialGrid}>
            <div className={styles.materialCard}>
              <h3>Wood Fencing</h3>
              <p>Classic, natural beauty perfect for {capitalizedLocation} homes.</p>
              <Link href="/wood-fences">Learn More →</Link>
            </div>
            <div className={styles.materialCard}>
              <h3>Vinyl Fencing</h3>
              <p>Low-maintenance, durable fencing solutions for {capitalizedLocation} properties.</p>
              <Link href="/vinyl-fences">Learn More →</Link>
            </div>
            <div className={styles.materialCard}>
              <h3>Aluminum Fencing</h3>
              <p>Elegant, long-lasting fencing options for your {capitalizedLocation} property.</p>
              <Link href="/aluminum-fences">Learn More →</Link>
            </div>
            <div className={styles.materialCard}>
              <h3>Chain Link Fencing</h3>
              <p>Practical, cost-effective security solutions in {capitalizedLocation}.</p>
              <Link href="/chainlink-fence">Learn More →</Link>
            </div>
          </div>
        </section>

        <section className={styles.whyChooseUs}>
          <h2>Why Choose GreenView Solutions in {capitalizedLocation}?</h2>
          <div className={styles.reasonsGrid}>
            <div className={styles.reason}>
              <h3>Local Expertise</h3>
              <p>Deep understanding of {capitalizedLocation}&apos;s climate, terrain, and building requirements.</p>
            </div>
            <div className={styles.reason}>
              <h3>Quality Materials</h3>
              <p>Premium fencing materials built to withstand Colorado&apos;s weather conditions.</p>
            </div>
            <div className={styles.reason}>
              <h3>Professional Installation</h3>
              <p>Expert installers serving all {capitalizedLocation} neighborhoods.</p>
            </div>
            <div className={styles.reason}>
              <h3>Outstanding Service</h3>
              <p>Trusted by homeowners and businesses throughout {capitalizedLocation}.</p>
            </div>
          </div>
        </section>

        <section className={styles.seoArticle}>
          <h2>Professional Fence Company Near Me in {capitalizedLocation}, Colorado</h2>
          
          <article>
            <p>
              When searching for a &quot;fence company near me&quot; in {capitalizedLocation}, Colorado, homeowners and businesses trust GreenView Solutions 
              for exceptional fencing services. As your local fence contractor serving {capitalizedLocation} and surrounding areas, we understand 
              the unique needs of Colorado properties, from dealing with the local climate to meeting specific HOA requirements.
            </p>

            <p>
              Looking for a reliable fence company near {capitalizedLocation}? Our team of expert fence installers brings years of experience 
              to every project. Whether you need a privacy fence or a decorative aluminum fence, we&apos;re the fence company {capitalizedLocation} 
              residents turn to for quality craftsmanship and outstanding service.
            </p>

            <h3>Expert Fence Installation Services in {capitalizedLocation}</h3>
            
            <p>
              As the premier fence company near {capitalizedLocation}, we offer comprehensive fencing solutions including:
              • Custom wood fence installation for residential properties
              • Vinyl fencing ideal for low-maintenance needs
              • Aluminum fence installation for upscale {capitalizedLocation} properties
              • Chain link fences for commercial properties throughout {capitalizedLocation}
              • Privacy fence installation for homes in the {capitalizedLocation} area
            </p>

            <h3>Why Choose Our Local Fence Company in {capitalizedLocation}?</h3>
            
            <p>
              When searching for &quot;fence companies near me&quot; in {capitalizedLocation}, CO, you&apos;ll find that GreenView Solutions stands out. 
              Our deep understanding of {capitalizedLocation}&apos;s terrain, weather patterns, and local building codes ensures your fence 
              installation is done right the first time. We provide prompt service and expert fence installation to all {capitalizedLocation} neighborhoods.
            </p>

            <p>
              As your trusted {capitalizedLocation} fence company, we pride ourselves on:
              • In-depth knowledge of local {capitalizedLocation} building regulations
              • Experience with {capitalizedLocation}&apos;s unique soil conditions and terrain
              • Expertise in weather-resistant fence installation for Colorado&apos;s climate
              • Strong relationships with {capitalizedLocation} homeowners and businesses
              • Comprehensive warranty protection on all fence installations
            </p>

            <h3>Professional Fence Installation Near {capitalizedLocation}</h3>
            
            <p>
              Looking for quality fence installation near {capitalizedLocation}? Our fence company serves all local areas in and around 
              {capitalizedLocation}. We understand that when you search for a &quot;fence contractor near me&quot; in {capitalizedLocation}, 
              you&apos;re looking for quality, reliability, and value. That&apos;s exactly what GreenView Solutions delivers with every 
              fence installation project.
            </p>

            <p>
              Ready to work with the most trusted fence company in {capitalizedLocation}? Contact GreenView Solutions today for your free 
              estimate. Our fence installation experts are ready to help you choose the perfect fencing solution for your {capitalizedLocation} 
              property. Don&apos;t settle for less when searching for fence companies near {capitalizedLocation} &ndash; choose the local leaders in 
              fence installation and design.
            </p>
          </article>
        </section>

        <Reviews location={location} />
        
        <CallToActionSection 
          title={`Ready to Start Your Fencing Project in ${capitalizedLocation}?`}
          subtitle="Contact GreenView Solutions for a Free Estimate"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const { CORE_LOCATIONS, LOCATION_MAPPING } = require('../../../utils/locations');
  
  const paths = [];
  
  // Create paths for each location under its main location
  CORE_LOCATIONS.forEach((loc) => {
    // Don't create paths where the location is the same as its main location
    if (loc !== LOCATION_MAPPING[loc]) {
      paths.push({
        params: {
          location: LOCATION_MAPPING[loc],
          subLocation: loc
        }
      });
    }
  });

  return {
    paths,
    fallback: false
  };
}



export async function getStaticProps({ params }) {
  const { location, subLocation } = params;
  const capitalizedSubLocation = subLocation.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Phone numbers configuration
  const phoneNumbers = {
    'denver': '(304)801-2861',
    'boulder': '(304)801-2861',
    'fort-collins': '(304)801-2861',
    'default': '(304)801-2861'
  };

  const headerData = {
    title: `${capitalizedSubLocation} Fence Company`,
    description: `Professional fence installation and repair services in ${capitalizedSubLocation}, CO`,
    phone: phoneNumbers[subLocation] || phoneNumbers.default
  };

  const heroContent = {
    title: `${capitalizedSubLocation} Fence Installation & Fence Company`,
    description: `Looking for a ${capitalizedSubLocation} fencing company that you can trust? For more than a decade, GreenView Solutions has been building quality fences. We are a ${capitalizedSubLocation} fencing company that cares about our customers.`,
    features: [
      'Highest quality fences',
      'Best service',
      'Industry\'s best warranty'
    ]
  };

  return {
    props: {
      location,
      subLocation,
      capitalizedLocation: capitalizedSubLocation,
      phoneNumber: phoneNumbers[subLocation] || phoneNumbers.default,
      headerData,
      heroContent
    }
  };
}
