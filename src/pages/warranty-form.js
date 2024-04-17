import React, { useState } from 'react';
import { db } from '/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import styles from '../components/WarrantyForm.module.css';
import Header from '@/components/Header'; 
import Footer from '@/components/Footer';

export default function WarrantyForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [state, setState] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newRequest = {
            firstName,
            lastName,
            email,
            phone,
            street,
            city,
            zipCode,
            state,
            description,
        };

        try {
            const docRef = await addDoc(collection(db, "warrantyForms"), newRequest);
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setStreet('');
        setCity('');
        setZipCode('');
        setState('');
        setDescription('');
    };

    return (
        <div>
            <Header />
            <div className={styles.projOverviewDiv}>
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <h1 className={styles.formTitle}>How can we help?</h1>
                    <p className={styles.formParagraph}>Fields marked with an * are required</p>

                    <div className={styles.formField}>
                        <label className={styles.formLabel}>
                            First Name*:
                            <input
                                className={styles.formInput}
                                type="text"
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.formLabel}>
                            Last Name*:
                            <input
                                className={styles.formInput}
                                type="text"
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.formLabel}>
                            Email*:
                            <input
                                className={styles.formInput}
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.formLabel}>
                            Phone:
                            <input
                                className={styles.formInput}
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.formLabel}>
                            Street*:
                            <input
                                className={styles.formInput}
                                type="text"
                                required
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.formLabel}>
                            City*:
                            <input
                                className={styles.formInput}
                                type="text"
                                required
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.formLabel}>
                            Zip Code*:
                            <input
                                className={styles.formInput}
                                type="text"
                                required
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.formLabel}>
                            State/Region*:
                            <input
                                className={styles.formInput}
                                type="text"
                                required
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.formLabel}>
                            Tell Us About Your Request:
                            <textarea
                                className={styles.formInput}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </label>
                    </div>

                    <button type="submit" className={styles.formButton}>
                        Submit Request
                    </button>
                </form>
            </div>
            <Footer />

        </div>
    );
}
