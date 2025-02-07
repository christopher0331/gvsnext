import React, { useState } from 'react';
import styles from './QuickEstimate.module.scss';

export default function QuickEstimateProcess() {
    const [activeTab, setActiveTab] = useState('traditional');

    const tabContent = {
        traditional: {
            title: 'In-Person Consultation',
            timeline: [
                { text: 'Schedule your appointment', icon: '📅' },
                { text: 'Meet our experts at your property', icon: '🏠' },
                { text: 'Get your estimate within 48 hours', icon: '📋' }
            ],
            eta: '48 hours'
        },
        videoCall: {
            title: 'Virtual Consultation',
            timeline: [
                { text: 'Book a video call', icon: '📅' },
                { text: 'Show us your property virtually', icon: '📱' },
                { text: 'Receive estimate within 24 hours', icon: '📋' }
            ],
            eta: '24 hours'
        }
    };

    const content = tabContent[activeTab];

    return (
        <section className={styles.container}>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'traditional' ? styles.active : ''}`}
                    onClick={() => setActiveTab('traditional')}
                >
                    Traditional Appointment
                </button>
                <span className={styles.orDivider}>OR</span>
                <button
                    className={`${styles.tab} ${activeTab === 'videoCall' ? styles.active : ''}`}
                    onClick={() => setActiveTab('videoCall')}
                >
                    Video Call Estimate
                </button>
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{content.title}</h1>
                    <p className={styles.eta}>{content.eta}</p>
                </div>

                <div className={styles.timeline}>
                    {content.timeline.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.stepNumber}>{index + 1}</div>
                            <div className={styles.stepIcon}>{step.icon}</div>
                            <h2>{step.text}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
