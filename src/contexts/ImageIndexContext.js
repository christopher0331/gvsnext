import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ImageIndexContext = createContext();

export function ImageIndexProvider({ children }) {
    const [imageIndex, setImageIndex] = useState(0);
    const router = useRouter();

    const images = [
        'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/564989bf-964c-45c3-2ec6-deeeb9dd2800/public',
        'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/33fea834-d24d-44f3-72d3-1c46598ed600/public',
        'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/208d8f03-ee93-4377-7600-08b1183c3d00/public'
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
