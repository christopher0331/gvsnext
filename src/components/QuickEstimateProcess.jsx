import React, { useState } from 'react';
import styles from './QuickEstimate.module.scss';

export default function QuickEstimateProcess() {
    const [activeTab, setActiveTab] = useState('videoCall');

    return (
        <section className={styles.container}>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'videoCall' ? styles.active : ''}`}
                    onClick={() => setActiveTab('videoCall')}
                >
                    Video Call Estimate
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'traditional' ? styles.active : ''}`}
                    onClick={() => setActiveTab('traditional')}
                >
                    Traditional Appointment
                </button>
            </div>

            {activeTab === 'videoCall' && (
                <div className={styles.content}>
                    <p className={styles.subtitle}>
                        Estimated time to receive your estimate: 24 hours.
                    </p>
                    <h1 className={styles.title}>Quick and Easy Wood Fence Estimates via Video Call</h1>
                    <p className={styles.subtitle}>
                        Experience the convenience of receiving a fast and accurate wood fence estimate through a video call consultation with GreenView Solutions. Enjoy expert craftsmanship with a hassle-free experience.
                    </p>
                    <p className={styles.subtitle}>
                        We support various video call platforms including Facebook Video, Zoom, WhatsApp, and more.
                    </p>

                    <div className={styles.timeline}>
                        <div className={styles.step}>
                            <div className={styles.iconWrapper}>
                                <div className={styles.icon}>
                                    <span className={styles.number}>01</span>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h2>Contact us to schedule an appointment</h2>                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.iconWrapper}>
                                <div className={styles.icon}>
                                    <span className={styles.number}>02</span>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h2>Schedule a video call meeting with our experts</h2>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.iconWrapper}>
                                <div className={styles.icon}>
                                    <span className={styles.number}>03</span>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h2>Receive your estimate within 24 hours</h2>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'traditional' && (
                <div className={styles.content}>
                    <p className={styles.subtitle}>
                        Estimated time to receive your estimate: 1-3 business days.
                    </p>
                    <h1 className={styles.title}>Traditional Face-to-Face Appointment</h1>
                    <p className={styles.subtitle}>
                        Schedule a traditional face-to-face appointment with our experts to discuss your wood fence needs in person. Benefit from personalized service and expert advice.
                    </p>

                    <div className={styles.timeline}>
                        <div className={styles.step}>
                            <div className={styles.iconWrapper}>
                                <div className={styles.icon}>
                                    <span className={styles.number}>01</span>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h2>Contact us to schedule an appointment</h2>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.iconWrapper}>
                                <div className={styles.icon}>
                                    <span className={styles.number}>02</span>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h2>Meet with our experts at your convenience</h2>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.iconWrapper}>
                                <div className={styles.icon}>
                                    <span className={styles.number}>03</span>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h2>Receive your estimate 24-48 hrs post-appointment</h2>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
