import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './Navbar.js';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useImageIndex } from '../contexts/ImageIndexContext';

export default function Header({ postTitle }) {
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
        <div className="relative header-container" style={{ height: '100vh' }}>
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

            <div className="overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 70%, white)',
                zIndex: 15
            }}></div>

            <div className="header-content" style={{
                zIndex: 30,
                position: 'relative',
                top: '25%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)'  // Simplified shadow
            }}>
                <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    {postTitle ? postTitle : (pageName ? pageName.replace(/-/g, ' ').toUpperCase() : 'WELCOME')}
                </p>
                <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Expert Craftsmanship, Durable Materials, and Unmatched Service</p>
                <Link href="/contact" passHref>
                    <button style={{
                        padding: '10px 20px',
                        fontSize: '1.2rem',
                        backgroundColor: 'green',
                        color: 'white',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer'
                    }}>
                        Get a Free Quote
                    </button>
                </Link>
            </div>
        </div>
    );
}
