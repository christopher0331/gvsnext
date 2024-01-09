import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Ensure this path is correct
import Image from 'next/image';

const Header = () => {
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
        src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/gvsnextimages/globalimages/7E439C8E-FA41-40A6-8527-6DD6229C38CE.JPG"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ zIndex: 10 }}
      />

      <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 15 }}></div>
      
      <Navbar />
      
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



export default Header;
