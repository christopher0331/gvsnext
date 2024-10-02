import React from 'react';
import styles from './OurWarranty.module.scss';

const OurWarranty = () => {
  return (
    <div className={styles.warrantyContainer}>
      <h1>Our Warranty</h1>
      <p>
        At GreenView Solutions, we take pride in the quality of our workmanship and the materials we use.
        We are committed to providing our customers in Denver, Colorado, with durable and reliable fencing
        solutions that stand the test of time.
      </p>

      <h2>Warranty Coverage</h2>
      <p>
        We offer a <strong>3-year limited warranty</strong> on all our fencing installations. This warranty covers defects in materials and workmanship under normal residential use and service.
      </p>

      <h3>What is Covered</h3>
      <ul>
        <li>Defects in materials provided by GreenView Solutions during installation.</li>
        <li>Defects in workmanship performed by our installation team.</li>
        <li>Structural failures due to normal environmental conditions.</li>
      </ul>

      <h3>What is Not Covered</h3>
      <ul>
        <li>Damage caused by improper use, abuse, or neglect.</li>
        <li>Normal wear and tear, including fading or discoloration due to weather exposure.</li>
        <li>Damage resulting from unauthorized modifications or repairs by third parties.</li>
        <li>
          Damage due to <strong>Acts of God</strong>, such as:
          <ul>
            <li>Severe wind storms or tornadoes.</li>
            <li>Hail, heavy snow, or ice accumulation.</li>
            <li>Flooding, lightning strikes, or earthquakes.</li>
            <li>Fire or other natural disasters.</li>
          </ul>
        </li>
        <li>Damage caused by insects, animals, or vegetation growth.</li>
        <li>Soil erosion, ground movement, or changes in grading impacting the fence structure.</li>
        <li>Improper maintenance or failure to perform recommended maintenance.</li>
      </ul>

      <h2>Maintenance Requirements</h2>
      <p>
        Proper maintenance is essential to ensure the longevity and appearance of your fence. We recommend:
      </p>
      <ul>
        <li>Inspecting your fence annually for signs of damage or wear.</li>
        <li>Cleaning your fence to remove dirt, mildew, or debris as needed.</li>
        <li>Applying stain or sealant to wood fences every 2-3 years or as recommended.</li>
        <li>Keeping vegetation trimmed away from the fence line.</li>
        <li>Ensuring sprinkler systems do not spray directly onto the fence.</li>
      </ul>

      <h2>Warranty Claims</h2>
      <p>
        To make a warranty claim, please contact us within 30 days of noticing the defect:
      </p>
      <ul>
        <li>Email: <a href="mailto:admin@gvsco.net">admin@gvsco.net</a></li>
        <li>Phone: <a href="tel:3033588168">(303) 358-8168</a></li>
      </ul>
      <p>
        Provide your name, contact information, proof of purchase or installation, and a detailed description of the issue along with any supporting photos.
      </p>
      <p>
        Upon receiving your claim, we will assess the issue and, if covered, will repair or replace the affected portion of the fence at no additional cost. Labor for warranty repairs is included during the warranty period.
      </p>

      <h2>Limitations and Exclusions</h2>
      <p>
        This warranty is non-transferable and applies only to the original purchaser of the fence installation services from GreenView Solutions. The warranty is valid for residential installations within the Denver, Colorado metropolitan area.
      </p>
      <p>
        GreenView Solutions is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use the fencing product. Our total liability shall not exceed the original purchase price of the fence installation.
      </p>

      <h2>Additional Information</h2>
      <p>
        Some states do not allow limitations on how long an implied warranty lasts or the exclusion of incidental or consequential damages, so the above limitations may not apply to you.
      </p>
      <p>
        This warranty gives you specific legal rights, and you may also have other rights which vary from state to state.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about our warranty or need assistance with your fence, please don&apos;t hesitate to reach out.
      </p>
      <p>
        <strong>GreenView Solutions</strong><br />
        Denver, Colorado<br />
        Email: <a href="mailto:admin@gvsco.net">admin@gvsco.net</a><br />
        Phone: <a href="tel:3033588168">(303) 358-8168</a>
      </p>
    </div>
  );
};

export default OurWarranty;