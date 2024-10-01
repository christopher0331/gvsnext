import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import styles from './Forms.module.css';

export default function WarrantyForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [streetName, setStreetName] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [state, setState] = useState('');
    const [projectDetails, setProjectDetails] = useState('');
    const [fenceType, setFenceType] = useState('');
    const [fenceLength, setFenceLength] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = "service_p6clffh";
        const templateId = "template_499vmpm";
        const userId = "user_wPYeoaoebNsoGt3GhzLVu";

        const templateParams = {
            firstName,
            lastName,
            email,
            phone,
            streetName,
            city,
            zipCode,
            state,
            projectDetails,
            fenceType,
            fenceLength
        };

        emailjs
            .send(serviceId, templateId, templateParams, userId)
            .then((result) => {
                console.log(result.text);
                setShowPopup(true);
            })
            .catch((error) => {
                console.log(error.text);
            });

        // Reset form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setStreetName('');
        setCity('');
        setZipCode('');
        setState('');
        setProjectDetails('');
        setFenceType('');
        setFenceLength('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Warranty Form</h2>
            <p className={styles.formParagraph}>Fields marked with an * are required</p>

            <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name*:</label>
                <input
                    type="text"
                    id="firstName"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name*:</label>
                <input
                    type="text"
                    id="lastName"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Email*:</label>
                <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="streetName">Street*:</label>
                <input
                    type="text"
                    id="streetName"
                    required
                    value={streetName}
                    onChange={(e) => setStreetName(e.target.value)}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="city">City*:</label>
                <input
                    type="text"
                    id="city"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="zipCode">Zip Code*:</label>
                <input
                    type="text"
                    id="zipCode"
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="state">State/Region*:</label>
                <input
                    type="text"
                    id="state"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="fenceType">Fence Type:</label>
                <input
                    type="text"
                    id="fenceType"
                    value={fenceType}
                    onChange={(e) => setFenceType(e.target.value)}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="fenceLength">Approximate Fence Length (in feet):</label>
                <input
                    type="number"
                    id="fenceLength"
                    value={fenceLength}
                    onChange={(e) => setFenceLength(e.target.value)}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="projectDetails">Project Details:</label>
                <textarea
                    id="projectDetails"
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                />
            </div>

            <button type="submit" className={styles.submitButton}>Submit Form</button>

            {showPopup && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <p>Thank you for your quote request! We will get back to you soon.</p>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </form>
    );
}