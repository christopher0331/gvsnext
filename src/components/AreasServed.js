import React from 'react';
import Link from 'next/link';
import styles from './AreasServed.module.scss';
import { CORE_LOCATIONS, getLocationData } from '../utils/locations';
// Simple map pin icon component
const MapPinIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// Sort locations by name for consistent display
const sortedLocations = CORE_LOCATIONS.sort();

const AreasServed = () => {
  // Group locations by office
  const groupedLocations = sortedLocations.reduce((acc, location) => {
    const data = getLocationData(location);
    if (!data) return acc;
    
    const office = data.nearestOffice;
    if (!acc[office]) acc[office] = [];
    acc[office].push({ location, ...data });
    return acc;
  }, {});
  return (
    <div className={styles.areasServedContainer}>
      <h2>Our Service Areas</h2>
      <div className={styles.areasGrid}>
        {Object.entries(groupedLocations).map(([office, locations]) => (
          <div key={office} className={styles.officeGroup}>
            <h3 className={styles.officeTitle}>{office} Area</h3>
            <div className={styles.locationsList}>
              {locations.map(({ location, name, distanceFromOffice }) => (
                <Link key={location} href={`/${location}`}>
                  <div className={styles.locationInfo}>
                    <MapPinIcon className={styles.icon} />
                    <div>
                      <div>{name}, CO</div>
                      {distanceFromOffice === 0 ? (
                        <div className={styles.distance}>Main Office Location</div>
                      ) : (
                        <div className={styles.distance}>{distanceFromOffice} miles away</div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreasServed; 