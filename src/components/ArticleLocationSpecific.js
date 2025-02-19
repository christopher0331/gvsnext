import React from 'react';
import Link from 'next/link';
import styles from './ArticleLocationSpecific.module.scss';
import { getLocationData } from '../utils/locations';

const generateLocationSpecificIntro = (locationData) => {
  const nearOfficeText = locationData.distanceFromOffice === 0
    ? `proudly based right here in ${locationData.name}`
    : `conveniently located just ${locationData.distanceFromOffice} miles away in ${locationData.nearestOffice}`;

  return `As ${locationData.name}&apos;s trusted fencing experts, we understand the unique needs of local homeowners. Whether you&apos;re near ${locationData.landmarks[0]} or in the ${locationData.neighborhoods[0]} area, a quality fence can enhance your property&apos;s security, privacy, and curb appeal. GreenView Solutions, ${nearOfficeText}, brings professional fencing solutions to your neighborhood.`;
};

const ArticleLocationSpecific = ({ location }) => {
  const locationData = getLocationData(location);
  if (!locationData) return null;

  return (
    <article className={styles.articleLocationSpecific}>
      <h2>Expert Fence Installation in {locationData.name}, Colorado | GreenView Solutions</h2>
      
      <p className={styles.intro}>
        {generateLocationSpecificIntro(locationData)}
      </p>

      <p className={styles.reputation}>
        From {locationData.neighborhoods.join(' to ')} and throughout {locationData.name}, our fence installation team 
        has earned a stellar reputation for exceptional craftsmanship and superior service. As your local fencing contractor, 
        we understand {locationData.name}&apos;s specific building codes and climate considerations, ensuring 
        your fence installation is done right the first time.
      </p>

      <section className={styles.fenceType}>
        <h3>Premium Vinyl Fencing in {locationData.name}</h3>
        <p>
          {locationData.name} homeowners increasingly choose <Link href="/vinyl-fences" className={styles.inlineLink}>vinyl fencing</Link> for its elegant appearance and minimal maintenance requirements. 
          Perfect for properties near {locationData.landmarks[1]}, vinyl fencing offers unmatched durability against {locationData.name}&apos;s 
          varying weather conditions. Its smooth, splinter-free surface requires no painting or staining, making it an ideal choice for 
          busy families in the {locationData.neighborhoods[1]} area.
        </p>
        <p>
          Our premium vinyl fences feature advanced weather-resistant technology, specifically designed to withstand Colorado&apos;s 
          intense UV exposure and seasonal temperature fluctuations. Each installation comes with our comprehensive warranty, 
          providing {locationData.name} residents with lasting peace of mind.
        </p>
      </section>

      <section className={styles.fenceType}>
        <h3>Classic Wood Fencing Solutions for {locationData.name} Homes</h3>
        <p>
          <Link href="/wood-fences" className={styles.inlineLink}>Wood fencing</Link> remains a popular choice among {locationData.name} homeowners, particularly in established neighborhoods like 
          {locationData.neighborhoods[0]}. These classic fences beautifully complement local architectural styles while providing 
          natural beauty and privacy. Our wood fences are specifically treated to withstand {locationData.name}&apos;s climate, from 
          summer heat to winter snow.
        </p>
        <p>
          We offer various wood fence styles that perfectly match {locationData.name}&apos;s diverse home designs, from traditional 
          picket fences near {locationData.landmarks[0]} to privacy fences in {locationData.neighborhoods[2]}. Each installation 
          uses premium-grade lumber and comes with our industry-leading warranty protection.
        </p>
      </section>

      <section className={styles.fenceType}>
        <h3>Elegant Aluminum Fencing for {locationData.name} Properties</h3>
        <p>
          Our <Link href="/aluminum-fences" className={styles.inlineLink}>aluminum fencing solutions</Link> are particularly popular in upscale {locationData.name} communities like {locationData.neighborhoods[1]}. 
          These elegant fences provide the perfect balance of security and aesthetics, ideal for properties near {locationData.landmarks[2]}. 
          Each aluminum fence features our premium weather-resistant coating, specifically formulated to protect against Colorado&apos;s 
          harsh climate conditions. We offer custom designs and heights to meet local HOA requirements while maintaining the 
          sophisticated look {locationData.name} homeowners desire.
        </p>
      </section>

      <section className={styles.fenceType}>
        <h3>Composite Fencing</h3>
        <p>
          A Trex composite fence is an excellent option for customers who prefer the natural beauty of wood but prefer
          limited upkeep. Our Trex composite fences are solid and contain no gaps, so you won&apos;t need to worry about
          anyone peeking into your yard.
        </p>
        <p>
          Each Trex composite fence contains 95% recyclable materials, making them an environmentally friendly
          solution. You&apos;ll also receive a comprehensive manufacturer&apos;s warranty to protect against defects.
        </p>
      </section>

      <section className={styles.fenceType}>
        <h3>Durable Chain Link Fencing in {locationData.name}</h3>
        <p>
          <Link href="/chainlink-fence" className={styles.inlineLink}>Chain link fencing</Link> provides a practical, cost-effective solution for many {locationData.name} properties, particularly 
          near {locationData.landmarks[1]} and other recreational areas. We offer both traditional galvanized and vinyl-coated 
          options, perfect for securing larger properties or creating safe play areas in {locationData.neighborhoods[2]}. Our 
          professional installation team ensures proper anchoring to withstand {locationData.name}&apos;s wind conditions, while 
          maintaining clean sight lines and durability.
        </p>
      </section>

      <section className={styles.fenceType}>
        <h3>Commercial Fencing</h3>
        <p>
          We offer commercial fencing solutions for businesses. If you&apos;re seeking to upgrade your commercial property&apos;s
          security or outline property boundaries, we can help. Simply contact us with your project, and we&apos;ll provide a
          tailored solution that meets your needs.
        </p>
      </section>

      <section className={styles.conclusion}>
        <h3>Your Trusted {locationData.name} Fence Installation Experts</h3>
        <p>
          As {locationData.name}&apos;s premier fencing contractor, GreenView Solutions combines local expertise with superior 
          craftsmanship. From {locationData.neighborhoods.join(', ')}, to the areas surrounding {locationData.landmarks.join(' and ')}, 
          we&apos;re committed to enhancing your property with <Link href="/portfolio" className={styles.inlineLink}>beautiful, durable fencing solutions</Link>. Our {locationData.nearestOffice}-based team 
          is ready to provide you with a customized fence design that perfectly suits your {locationData.name} property.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Schedule Your Free {locationData.name} Consultation
        </Link>
      </section>
    </article>
  );
};

export default ArticleLocationSpecific;
