import React, { useState } from 'react';
import styles from './FeaturedProjects.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const allProjects = [
    {
        title: 'Composite Fence',
        imageSrc: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/8828fb17-4be3-40ff-5fcd-e7c7891d4200/public',
        description: 'A modern, low-maintenance composite fence that combines durability with aesthetic appeal.',
        link: 'https://greenviewsolutions.net/portfolio',
    },
    {
        title: 'Custom Metal Gate',
        imageSrc: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/e03d5e94-a080-4fc6-c798-c1c81c1b0c00/public',
        description: 'A bespoke metal gate designed to enhance security while adding a touch of elegance to the property.',
        link: 'https://greenviewsolutions.net/portfolio',
    },
    {
        title: 'Horizontal Step Up',
        imageSrc: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/a366669c-92a3-4320-8ba7-921586401d00/public',
        description: 'A sleek, horizontal fence design that gracefully steps up to accommodate sloping terrain.',
        link: 'https://greenviewsolutions.net/portfolio',
    },
    {
        title: 'Horizontal Step Down',
        imageSrc: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/1c18d317-f7a3-42fc-993c-7f0e41866a00/public',
        description: 'An innovative horizontal fence that seamlessly steps down, following the natural contours of the land.',
        link: 'https://greenviewsolutions.net/portfolio',
    },
    {
        title: 'Pergola',
        imageSrc: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/74505337-9ac6-4a35-5cdd-536aed33f000/public',
        description: 'A stunning outdoor pergola that creates a perfect blend of shade and open-air relaxation.',
        link: 'https://greenviewsolutions.net/portfolio',
    },
    {
        title: 'Custom Fence',
        imageSrc: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/506a9ba8-c52e-453f-6dc7-259205160800/public',
        description: 'A unique, tailor-made fence design that perfectly complements the homeowner\'s style and needs.',
        link: 'https://greenviewsolutions.net/portfolio',
    },
    {
        title: 'Ranch Rail Fence',
        imageSrc: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/3476fde9-ff2e-4b47-7275-e0bce7616700/public',
        description: 'A classic ranch rail fence that combines rustic charm with practical functionality for large properties.',
        link: 'https://greenviewsolutions.net/portfolio',
    },
    {
        title: 'Stained Double Gate',
        imageSrc: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/50b30f79-46b1-4c7e-ae83-fa7fff8b5200/public',
        description: 'A beautifully stained double gate that serves as an impressive entryway to the property.',
        link: 'https://greenviewsolutions.net/portfolio',
    },
    {
        title: 'Decorative Iron Gate',
        imageSrc: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/3d7e6df7-187f-428f-d374-3e933e685500/public',
        description: 'An ornate iron gate featuring intricate designs that add a touch of sophistication to the entrance.',
        link: 'https://greenviewsolutions.net/portfolio',
    },
    {
        title: 'Stained Horizontal Step Down',
        imageSrc: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/bc022fad-b78c-4b8c-4313-593fd64b4200/public',
        description: 'A richly stained horizontal fence that gracefully steps down, combining style with practicality.',
        link: 'https://greenviewsolutions.net/portfolio',
    },
    {
        title: 'Custom Chicken Coop',
        imageSrc: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/a09d398c-caf5-4a47-4a1e-0f150dcdb900/public',
        description: 'A bespoke chicken coop designed for both functionality and aesthetic appeal in a backyard setting.',
        link: 'https://greenviewsolutions.net/portfolio',
    },
    {
        title: 'Custom Shed',
        imageSrc: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/e9aba115-bdf0-4179-1378-3f5988e19300/public',
        description: 'A custom-built shed that provides ample storage while complementing the property\'s overall design.',
        link: 'https://greenviewsolutions.net/portfolio',
    },
    // ... Add more projects to reach 30 total
];

const FeaturedProjectCard = ({ title, imageSrc, description, link }) => {
    return (
        <div className={styles.card}>
            <Link href={link}>
                <div className={styles.imageContainer}>
                    <Image
                        src={imageSrc}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        quality={80}
                    />
                </div>
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardDescription}>{description}</p>
                </div>
            </Link>
        </div>
    );
};

const FeaturedProjects = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const projectsPerPage = 6;
    const totalPages = Math.ceil(allProjects.length / projectsPerPage);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const currentProjects = allProjects.slice(
        currentPage * projectsPerPage,
        (currentPage + 1) * projectsPerPage
    );

    return (
        <div className={styles.featuredProjectsContainer}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <div 
                className={styles.projectsWrapper}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <button 
                    onClick={prevPage} 
                    className={`${styles.navButton} ${styles.prevButton}`}
                    style={{ opacity: isHovering ? 1 : 0.7 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                </button>
                <div className={styles.projectsGrid}>
                    {currentProjects.map((project, index) => (
                        <FeaturedProjectCard key={index} {...project} />
                    ))}
                </div>
                <button 
                    onClick={nextPage} 
                    className={`${styles.navButton} ${styles.nextButton}`}
                    style={{ opacity: isHovering ? 1 : 0.7 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default FeaturedProjects;