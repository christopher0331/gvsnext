import { useState, useEffect, React } from 'react';
import styles from '../components/AboutUs.module.scss';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import SvgComponent from '@/components/SvgComponent';
import Image from 'next/image';
import Head from 'next/head';

const CrewWithTruck = "https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/AboutUs/AboutUsImage.jpg";

const AboutUs = (props) => {
  const [isTextExpanded, setTextExpanded] = useState({ paragraph1: false, paragraph2: false });

  const toggleTextDisplay = (paragraph) => {
    setTextExpanded(prevState => ({ ...prevState, [paragraph]: !prevState[paragraph] }));
  };


  useEffect(() => {
    window.scrollTo(0, 0)

    // Initialize GTM dataLayer
    window.dataLayer = window.dataLayer || [];

    // Define gtag function
    function gtag() {
      window.dataLayer.push(arguments);
    }

    // Load GTM script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11428060127';
    script.async = true;
    document.body.appendChild(script);

    // Execute the GTM script
    script.onload = () => {
      gtag('js', new Date());
      gtag('config', 'AW-11428060127');
    };

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, [])

  const paragraph1 = " When you have a fence built and installed by the team at GreenView Solutions, you can rest assured that it is done so with extreme care and superior skill. We are a proud member of the American Fence Association and Master Builders Association, which means our superior skills haven’t gone unnoticed. Additionally, we participate in the Better Business Bureau Reliability Program, guaranteeing our company exhibits a reputation for excellent customer care. We are 100% bonded and insured, ensuring you can trust that our work will meet your standards of excellence and deliver a visually-appealing, purposeful fence for your home or business."

  const paragraph2 = "Choosing your style of fencing is not an endeavor that you should take lightly. There is a lot to consider, including style, durability, area, and size. Because Denver and the surrounding communities have a vast assortment of plots and styles for residential neighborhoods and office complexes, GreenView Solutions offers a wide variety of fence styles to suit your needs perfectly. Not only do we utilize the best materials for all our fences, but we also employ a staff that uses proven techniques to ensure durability and elegance regardless of the scope of your project. We design and install wood fences, chain link fences, ornamental iron fences, specialty fences, and commercial fences, all with the grace and precision that can only be cultivated through nearly 50 years of hands-on experience."

  // Truncate text function
  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.slice(0, length) + '...';
  };



  return (
    <div>
      <Head>
        <title>GreenView Solutions About Us Page</title>
        <meta name="description" content="This page is the about us page that contains information about greenview solutions"/>
        <link rel="canonical" href="https://greenviewsolutions.net/about" />

      </Head>
      <Header />
      <div className={styles.aboutUsContainer}>

        <h1 className={styles.title}>
          About Us
        </h1>

        <div className={styles.aboutUsInfo}>
          <h3>We are Bonded and Insured</h3>
          {/* First paragraph with toggle */}
          <p>
            {isTextExpanded.paragraph1 ? paragraph1 : truncateText(paragraph1, 250)}
            <span className={styles.readMore} onClick={() => toggleTextDisplay('paragraph1')}>
              {isTextExpanded.paragraph1 ? 'Read Less' : 'Read More'}
            </span>
          </p>

          {/* Second paragraph with toggle */}
          <h3>We Offer a Wide Range of Fencing Styles</h3>

          <p>
            {isTextExpanded.paragraph2 ? paragraph2 : truncateText(paragraph2, 250)}
            <span className={styles.readMore} onClick={() => toggleTextDisplay('paragraph2')}>
              {isTextExpanded.paragraph2 ? 'Read Less' : 'Read More'}
            </span>
          </p>


        </div>


        <div className={styles.imageAndDescription}>

          <Image class={styles.crewImage} src={CrewWithTruck} alt='GreenView Solutions crew with truck' height={550} width={550} />
          <div className={styles.description}>

            <div className={styles.aboutUsSection}>
              <div className={styles.aboutUsTitle}>
                What Matters To Us:
              </div>
              <div className={styles.aboutUsText}>
                Our chief concern is delighting our customers with exceptional service and communication.
              </div>
            </div>

            <div className={styles.aboutUsSection}>
              <div className={styles.aboutUsTitle}>
                What We Do:
              </div>
              <div className={styles.aboutUsText}>
                GreenView Solutions builds beautiful fencing, in a timely manner, and  with quality
                as the primary concern. We strive to leave the customer feeling like they got more than
                they paid for.
              </div>
            </div>

            <div className={styles.aboutUsSection}>
              <div className={styles.aboutUsTitle}>
                About Us:
              </div>
              <div className={styles.aboutUsText}>
                GreenView Solutions was started 10 years ago, and has employed experts with decades
                of experience. There is no fencing or irrigation project our experts have not completed,
                and our upper managment team ensures that all projects are done with the highest level
                of quality in mind.
              </div>
            </div>
          </div>
        </div>
      </div>

      <SvgComponent />
      <Footer />

    </div >

  )
}


export default AboutUs;





