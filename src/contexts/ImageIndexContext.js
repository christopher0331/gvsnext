import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ImageIndexContext = createContext();

export function ImageIndexProvider({ children }) {
    const [imageIndex, setImageIndex] = useState(0);
    const router = useRouter();

    // Using custom variant instead of 'public' to get higher quality images
    // Format: https://imagedelivery.net/{account_hash}/{image_id}/{variant}
    const images = [
        'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/ce4466b3-8197-4d3c-e954-ed7640bdaf00/hero',
        'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/89a55ba0-12e9-4225-301e-de520afd1000/hero',
        'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/e33e7492-b082-48b5-548e-38728e33b200/hero'
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
