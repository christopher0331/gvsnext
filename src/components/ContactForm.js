import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import styles from './Forms.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zipCode: '',
    fenceType: '',
    installationType: '',
    linearFeet: '',
    projectDetails: '',
    completionTimeframe: '',
    referralSource: '',
    otherProjectDescription: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = 'First Name is required';
    if (!formData.lastName) tempErrors.lastName = 'Last Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.phone) tempErrors.phone = 'Phone is required';
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      // Handle form submission logic here
      emailjs.sendForm('service_p6clffh', 'template_jidzwzw', e.target, 'user_wPYeoaoebNsoGt3GhzLVu')
        .then((result) => {
          console.log('Email sent:', result.text);
          alert('Thank you for your request, we will be in touch soon!!');
        }, (error) => {
          console.log('Email error:', error.text);
          alert('Failed to send email, please try again.');
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <motion.div
          className={styles.successMessage}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Thank you for reaching out!</h2>
          <p>We will get back to you shortly.</p>
        </motion.div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formParagraph}>
            Elevate your surroundings with our quality workmanship, creating a perfect blend of functionality and aesthetics. From sturdy fences that stand the test of time to breathtaking outdoor living spaces, we turn your vision into a reality!
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.row}>
              <label className={styles.inputBox}>
                <input className={styles.inputField} placeholder="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
              </label>
              <label className={styles.inputBox}>
                <input className={styles.inputField} placeholder="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
              </label>
            </div>
            <div className={styles.row}>
              <label className={styles.inputBox}>
                <input className={styles.inputField} placeholder="Company Name (if applicable)" type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
              </label>
            </div>
            <div className={styles.row}>
              <label className={styles.inputBox}>
                <input className={styles.inputField} placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </label>
            </div>
            <div className={styles.row}>
              <label className={styles.inputBox}>
                <input className={styles.inputField} placeholder="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
              </label>
            </div>
            <p className={styles.smsConsent}>
              By providing your phone number, you agree to receive text messages (SMS) from GreenView Solutions. You can unsubscribe at any time by replying STOP. Message and data rates may apply. Message frequency varies.
            </p>
            <div className={styles.row}>
              <label className={styles.inputBox}>
                <input className={styles.inputField} placeholder="Street 1" type="text" name="street1" value={formData.street1} onChange={handleChange} />
              </label>
            </div>
            <div className={styles.row}>
              <label className={styles.inputBox}>
                <input className={styles.inputField} placeholder="Street 2" type="text" name="street2" value={formData.street2} onChange={handleChange} />
              </label>
            </div>
            <div className={styles.row}>
              <label className={styles.inputBox}>
                <input className={styles.inputField} placeholder="City" type="text" name="city" value={formData.city} onChange={handleChange} />
              </label>
              <label className={styles.inputBox}>
                <input className={styles.inputField} placeholder="State" type="text" name="state" value={formData.state} onChange={handleChange} />
              </label>
              <label className={styles.inputBox}>
                <input className={styles.inputField} placeholder="ZIP Code" type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} />
              </label>
            </div>
          </div>
          <div className={styles.serviceDetails}>
            <div className={styles.row}>
              <label className={styles.inputBox}>
                <select className={styles.inputField} name="fenceType" value={formData.fenceType} onChange={handleChange}>
                  <option value="">What type of fencing are you looking for?</option>
                  <option value="wood">Wood</option>
                  <option value="vinyl">Vinyl</option>
                  <option value="chainLink">Chain Link</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
            <div className={styles.row}>
              <label className={styles.inputBox}>
                <textarea className={styles.inputField} placeholder="Is this a new installation or replacement?" name="installationType" value={formData.installationType} onChange={handleChange} />
              </label>
            </div>
            <div className={styles.row}>
              <label className={styles.inputBox}>
                <input className={styles.inputField} placeholder="Approximate total linear feet of the project" type="text" name="linearFeet" value={formData.linearFeet} onChange={handleChange} />
              </label>
            </div>
            <div className={styles.row}>
              <label className={styles.inputBox}>
                <textarea className={styles.inputField} placeholder="Additional project details (e.g., type of fence, wood type, height, number of gates)" name="projectDetails" value={formData.projectDetails} onChange={handleChange} />
              </label>
            </div>
            <div className={styles.row}>
              <label className={styles.inputBox}>
                <input className={styles.inputField} placeholder="Desired timeframe for project completion" type="text" name="completionTimeframe" value={formData.completionTimeframe} onChange={handleChange} />
              </label>
            </div>
            <div className={styles.row}>
              <label className={styles.inputBox}>
                <select className={styles.inputField} name="referralSource" value={formData.referralSource} onChange={handleChange}>
                  <option value="">How did you hear about GreenView Solutions?</option>
                  <option value="google">Google</option>
                  <option value="socialMedia">Social Media</option>
                  <option value="yardSign">Yard Sign</option>
                  <option value="referral">Referral</option>
                  <option value="googleMaps">Google Maps</option>
                  <option value="magazine">The Home Mag</option>
                  <option value="magazine">Quality Connections</option>
                </select>
              </label>
            </div>
            <div className={styles.row}>
              <label className={styles.inputBox}>
                <textarea className={styles.inputField} placeholder="Other Project Description" name="otherProjectDescription" value={formData.otherProjectDescription} onChange={handleChange} />
              </label>
            </div>
          </div>
          <div className={styles.submitButtonBox}>
            <input className={styles.submitButton} type="submit" value="Submit" />
          </div>
        </form>
      )}
    </div>
  );
}