import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import heroImage from '../../public/homepage-hero-image.webp';
const Navbar = React.lazy(() => import('./Navbar'));

export default function Header({ data }) {
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="relative header-container" style={{ height: '100vh' }}>

            <Image
                src={heroImage}
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                style={{ zIndex: 10 }}
                priority // preload this image

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


            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
            </Suspense>

            <div className="header-content" style={{ zIndex: 30, position: 'relative', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Quality Fencing Solutions for Your Home</h1>
                <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Expert Craftsmanship, Durable Materials, and Unmatched Service</p>
                <button style={{ padding: '10px 20px', fontSize: '1.2rem', backgroundColor: 'green', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                    Get a Free Quote
                </button>
            </div>


        </div>
    );
};


