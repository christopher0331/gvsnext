import React from 'react';
import styles from './CoolLoader.module.scss'; // Adjust the path as needed

function CoolLoader() {
    return (
        <div className={styles.spinner}>
            <div className={styles.dot1}></div>
            <div className={styles.dot2}></div>
        </div>
    );
}

export default CoolLoader;
