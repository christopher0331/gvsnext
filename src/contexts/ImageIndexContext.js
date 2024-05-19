import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ImageIndexContext = createContext();

export function ImageIndexProvider({ children }) {
    const [imageIndex, setImageIndex] = useState(0);
    const router = useRouter();

    const images = [
        '/homepage-hero-image.webp',
        '/vinyl-fence.jpeg',
        '/wood-fence.jpeg'
    ];


    useEffect(() => {
        const handleRouteChange = () => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events, images.length]);

    return (
        <ImageIndexContext.Provider value={{ imageIndex, images }}>
            {children}
        </ImageIndexContext.Provider>
    );
}

export function useImageIndex() {
    return useContext(ImageIndexContext);
}
