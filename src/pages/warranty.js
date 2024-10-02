import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../components/Warranty.module.scss';

export default function Warranty() {
  return (
    <>
      <Head>
        <title>Fence Warranty | GreenView Solutions - Denver, CO</title>
        <meta
          name="description"
          content="Learn about the warranty coverage for our fencing services at GreenView Solutions in Denver, Colorado. Quality guaranteed with specific terms and conditions."
        />
        <link rel="canonical" href="https://greenviewsolutions.net/warranty" />
      </Head>

      <Header />

      <div className={styles.warrantyContainer}>
        <h1>Our Fence Warranty</h1>
        <p>
          At GreenView Solutions, we stand behind the quality of our workmanship and the materials we use.
          We are committed to providing our customers with durable and reliable fencing solutions that stand
          the test of time.
        </p>

        <h2>Warranty Coverage</h2>
        <p>
          We offer a <strong>2-year warranty</strong> on all our fencing installations. This warranty covers defects in workmanship and materials under normal use and service.
        </p>

        <h3>What is Covered:</h3>
        <ul>
          <li>Installation defects resulting from our workmanship.</li>
          <li>Material defects under normal use conditions.</li>
          <li>Structural integrity of the fence under normal weather conditions.</li>
        </ul>

        <h3>What is Not Covered:</h3>
        <ul>
          <li>Damage caused by improper use, abuse, or neglect.</li>
          <li>Normal wear and tear, including fading, staining, or discoloration.</li>
          <li>Damage resulting from unauthorized repairs or modifications.</li>
          <li>
            <strong>Acts of God</strong>, such as severe wind storms, hail, flooding, earthquakes, or other natural disasters.
          </li>
          <li>Damage caused by insects, animals, or vegetation.</li>
          <li>Damage due to soil erosion or changes in the ground conditions.</li>
        </ul>

        <h2>Warranty Claims</h2>
        <p>
          To make a warranty claim, please contact us at <a href="mailto:admin@gvsco.net">admin@gvsco.net</a> or call us at <a href="tel:3033588168">(303) 358-8168</a>. Provide your name, contact information, proof of purchase, and a detailed description of the issue along with any supporting photos.
        </p>

        <h2>Additional Information</h2>
        <p>
          This warranty is non-transferable and applies only to the original purchaser of the fence installation services. Warranty claims will be addressed promptly, and if a defect is found, GreenView Solutions will repair or replace the defective portion of the fence at our discretion.
        </p>
        <p>
          Our commitment is to ensure your complete satisfaction with your fencing investment. Regular maintenance and care will help extend the life and appearance of your fence.
        </p>

        <h2>Maintenance Recommendations</h2>
        <p>
          To maintain the integrity and appearance of your fence, we recommend:
        </p>
        <ul>
          <li>Regularly inspecting your fence for signs of damage or wear.</li>
          <li>Keeping foliage and vegetation trimmed back from the fence line.</li>
          <li>Cleaning your fence as needed to prevent buildup of dirt or mildew.</li>
          <li>Applying sealants or stains to wood fences as recommended.</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our warranty or need assistance with your fence, please do not hesitate to reach out.
        </p>
        <p>
          <strong>GreenView Solutions</strong><br />
          Denver, Colorado<br />
          Email: <a href="mailto:admin@gvsco.net">admin@gvsco.net</a><br />
          Phone: <a href="tel:3033588168">(303) 358-8168</a>
        </p>
      </div>

      <Footer />
    </>
  );
}