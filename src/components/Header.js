import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './Navbar.js';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useImageIndex } from '../contexts/ImageIndexContext';
import Hero from './Hero';
import styles from './Hero.scss';

export default function Header({ heroContent, postTitle, location }) {
    {console.log('heroContent', heroContent)}
    const [isScrolled, setIsScrolled] = useState(false);
    const { imageIndex, images } = useImageIndex();
    const router = useRouter();

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
                style={{ objectFit: 'cover', zIndex: 10 }}
                quality={100}
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 
                       (max-width: 1200px) 50vw, 
                       33vw"
            />

            <div className="overlay"></div>

            <div className="header-content"></div>

            <Hero {...heroContent} />
        </div>
    );
}
