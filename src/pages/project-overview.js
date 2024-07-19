import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import styles from '../components/ProjectOverview.module.scss';

export default function ContactForm() {
    const [postType, setPostType] = useState('');
    const [picketOrientation, setPicketOrientation] = useState('');
    const [tempFence, setTempFence] = useState('');
    const [address, setAddress] = useState('');
    const [comments, setComments] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [installationType, setInstallationType] = useState('');
    const [streetName, setStreetName] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [picketSize, setPicketSize] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = "service_p6clffh";
        const templateId = "template_499vmpm";
        const userId = "user_wPYeoaoebNsoGt3GhzLVu";

        const templateParams = {
            postType,
            streetName,
            city,
            zipCode,
            picketSize,
            picketOrientation,
            tempFence,
            address,
            comments,
            installationType
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
        setPostType('');
        setPicketOrientation('');
        setTempFence('');
        setAddress('');
        setComments('');
        setInstallationType('');
        setStreetName('');
        setCity('');
        setZipCode('');
        setPicketSize('');
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className={styles.projOverviewDiv}>
            <form onSubmit={handleSubmit}>
                <h1>Project Overview Form</h1>

                <div>
                    <p className={styles.pofLabel}>Posts:</p>
                    <label>
                        <input
                            type="radio"
                            name="postType"
                            value="Steel PostMaster Post"
                            checked={postType === 'Steel PostMaster Post'}
                            onChange={() => setPostType('Steel PostMaster Post')}
                        />
                        Steel PostMaster Post
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="postType"
                            value="Cedar 4x4 Posts"
                            checked={postType === 'Cedar 4x4 Posts'}
                            onChange={() => setPostType('Cedar 4x4 Posts')}
                        />
                        Cedar 4x4 Posts
                    </label>
                </div>
                <div className={styles.picketOrientationSection}>
                    <p className={styles.pofLabel}>Picket Orientation:</p>
                    <div className={styles.radioGroup}>
                        <label>
                            <input
                                type="radio"
                                name="picketOrientation"
                                value="Facing Client (In)"
                                checked={picketOrientation === 'Facing Client (In)'}
                                onChange={() => setPicketOrientation('Facing Client (In)')}
                            />
                            Facing Client (In)
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="picketOrientation"
                                value="Facing Out"
                                checked={picketOrientation === 'Facing Out'}
                                onChange={() => setPicketOrientation('Facing Out')}
                            />
                            Facing Out
                        </label>
                    </div>
                    <div className={styles.orientationImages}>
                        <div className={styles.imageWrapper}>
                            <Image src="/facing-in-image.png" alt="Facing In" width={200} height={150} layout="responsive" />
                            <p>Facing In</p>
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image src="/facing-out-image.png" alt="Facing Out" width={200} height={150} layout="responsive" />
                            <p>Facing Out</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={styles.pofLabel}>Temp Fence (Orange Construction Fence):</p>
                    <label>
                        <input
                            type="radio"
                            name="tempFence"
                            value="Yes"
                            checked={tempFence === 'Yes'}
                            onChange={() => setTempFence('Yes')}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="tempFence"
                            value="No"
                            checked={tempFence === 'No'}
                            onChange={() => setTempFence('No')}
                        />
                        No
                    </label>
                </div>

                <div className={styles.installationSection}>
                    <div className={styles.imageContainer}>
                        <Image src="/project-overview-image.png" alt="Fence Installation Types" width={400} height={300} layout="responsive" className={styles.fenceImage} />
                    </div>
                    <div className={styles.installationOptions}>
                        <p className={styles.pofLabel}>Installation Type:</p>
                        <label>
                            <input
                                type="radio"
                                name="installationType"
                                value="Pleasing to the Eye"
                                checked={installationType === 'Pleasing to the Eye'}
                                onChange={() => setInstallationType('Pleasing to the Eye')}
                            />
                            Pleasing to the Eye
                        </label>
                        <p className={styles.description}>Fence to be level with highest grade (Customer to fill in gaps)</p>

                        <label>
                            <input
                                type="radio"
                                name="installationType"
                                value="Stepped Installation"
                                checked={installationType === 'Stepped Installation'}
                                onChange={() => setInstallationType('Stepped Installation')}
                            />
                            Stepped Installation
                        </label>
                        <p className={styles.description}>Fence must be stepped resulting in gaps under fence in certain areas (Customer to fill in gaps)</p>

                        <label>
                            <input
                                type="radio"
                                name="installationType"
                                value="Following Flow"
                                checked={installationType === 'Following Flow'}
                                onChange={() => setInstallationType('Following Flow')}
                            />
                            Following Flow
                        </label>
                        <p className={styles.description}>Slightly uneven grade with fence following flow of the ground (Fence will be uneven at top)</p>
                    </div>
                </div>

                <div className={styles.addressSection}>
                    <p className={styles.pofLabel}>Address:</p>
                    <input
                        type="text"
                        name="streetName"
                        value={streetName}
                        onChange={(e) => setStreetName(e.target.value)}
                        placeholder="Street"
                    />
                    <div className={styles.cityZipWrapper}>
                        <input
                            type="text"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="City"
                        />
                        <input
                            type="text"
                            name="zipCode"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            placeholder="Zip Code"
                        />
                    </div>
                </div>

                <div className={styles.picketSizeSection}>
                    <p className={styles.pofLabel}>Picket Size:</p>
                    <label>
                        <input
                            type="radio"
                            name="picketSize"
                            value="4 inch"
                            checked={picketSize === '4 inch'}
                            onChange={() => setPicketSize('4 inch')}
                        />
                        4&quot; Pickets
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="picketSize"
                            value="6 inch"
                            checked={picketSize === '6 inch'}
                            onChange={() => setPicketSize('6 inch')}
                        />
                        6&quot; Pickets
                    </label>
                </div>

                <div>
                    <p className={styles.pofLabel}>Other Comments:</p>
                    <textarea
                        name="comments"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    ></textarea>
                </div>
                <button className={styles.pofButton} type="submit">Submit</button>
            </form>
            {showPopup && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <p>Thank you for your submission!</p>
                        <span className={styles.close} onClick={handleClosePopup}>
                            &times;
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}