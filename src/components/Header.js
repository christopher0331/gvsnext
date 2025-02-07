import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './Navbar.js';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useImageIndex } from '../contexts/ImageIndexContext';
import Hero from './Hero';
import styles from './Hero.scss';

export default function Header({ heroContent = {}, postTitle, location }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const { imageIndex, images } = useImageIndex();
    const router = useRouter();

    // Ensure heroContent has all required properties
    const safeHeroContent = {
        title: heroContent?.title || '',
        description: heroContent?.description || '',
        features: Array.isArray(heroContent?.features) ? heroContent.features : []
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const pageName = router.pathname.split('/').pop();
    const heroImage = images[imageIndex];

    return (
        <div className="header-container">
            <Navbar />
            <Image
                src={heroImage}
                alt="Hero Image"
                fill
                className="hero-image"
                quality={100}
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 
                       (max-width: 1200px) 50vw, 
                       33vw"
            />

            <div className="overlay"></div>

            <div className="header-content"></div>

            <Hero 
                title={safeHeroContent.title}
                description={safeHeroContent.description}
                features={safeHeroContent.features}
            />
        </div>
    );
}
