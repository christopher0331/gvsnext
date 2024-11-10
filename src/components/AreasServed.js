import React from 'react';
import Link from 'next/link';
import styles from './AreasServed.module.scss';

const locations = [
    'boulder', 'arvada', 'denver', 'littleton', 'lakewood', 'golden', 'thornton', 'broomfield', 'centennial', 'englewood', 'glenwood springs', 'gunbarrel', 'highlands ranch', 'jefferson county', 'louisville', 'northglenn', 'parker', 'superior', 'westminster', 'eastlake', 'belmar', 'castle rock', 'columbine valley', 'fountain', 'greenwood village', 'lone tree', 'fort collins', 'meridian', 'milliken', 'parker', 'sedalia', 'superior', 'estes park', 'westminster hills'
];

const AreasServed = () => {
  return (
    <div className={styles.areasServedContainer}>
      <h2>Greater Denver Service Areas</h2>
      <div className={styles.areasGrid}>
        {locations.map((location, index) => (
          <Link key={index} href={`/${location}`}>
            {location.charAt(0).toUpperCase() + location.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AreasServed; 