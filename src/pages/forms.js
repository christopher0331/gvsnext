import React, { useState, useEffect } from 'react';
import WarrantyForm from './warranty-form';
import ProjectOverview from './project-overview';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/components/Forms.module.scss';

export default function Forms() {

    return (
        <div>
            <Header />
            Forms
            <div className={styles.formContainerStyle}>
                <WarrantyForm />
                <ProjectOverview />
            </div>
            <Footer />
        </div>
    );
}
