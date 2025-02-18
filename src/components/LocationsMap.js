import React from 'react';
import { GoogleMap, LoadScript, Marker, Circle } from '@react-google-maps/api';
import { useRouter } from 'next/router';

const containerStyle = {
    width: '100%',
    height: '60vh',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e2e8f0'
};

// Brick and mortar store locations
const storeLocations = {
    boulder: {
        lat: 40.0702236,
        lng: -105.2007782,
        isStore: true
    },
    arvada: {
        lat: 39.8112567,
        lng: -105.1407289,
        isStore: true
    }
};

// Town center coordinates for other locations
const townLocations = {
    denver: { lat: 39.7392, lng: -104.9903 },
    longmont: { lat: 40.1672, lng: -105.1019 },
    erie: { lat: 40.0505, lng: -105.0500 },
    aurora: { lat: 39.7294, lng: -104.8319 },
    golden: { lat: 39.7555, lng: -105.2211 },
    frederick: { lat: 40.0991, lng: -104.9372 },
    broomfield: { lat: 39.9205, lng: -105.0867 },
    westminster: { lat: 39.8367, lng: -105.0372 },
    'fort-collins': { lat: 40.5853, lng: -105.0844 },
    eastlake: { lat: 39.9172, lng: -104.9719 },
    superior: { lat: 39.9528, lng: -105.1686 },
    thornton: { lat: 39.8680, lng: -104.9719 },
    greeley: { lat: 40.4233, lng: -104.7091 },
    loveland: { lat: 40.3977, lng: -105.0744 },
    'estes-park': { lat: 40.3772, lng: -105.5217 },
    'wheat-ridge': { lat: 39.7661, lng: -105.0772 },
    'commerce-city': { lat: 39.8083, lng: -104.9339 },
    louisville: { lat: 39.9778, lng: -105.1319 },
    niwot: { lat: 40.1002, lng: -105.1767 }
};

// Circle options for coverage area
const circleOptions = {
    strokeColor: '#2B7A0B',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2B7A0B',
    fillOpacity: 0.15,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 4828.03, // 3 miles in meters
    zIndex: 1
};

const LocationsMap = () => {
    const router = useRouter();
    const { location } = router.query;
    
    // Determine if we're on the homepage or a location page
    const isHomepage = !location;
    
    // Get the appropriate coordinates based on location
    const getLocationCoords = () => {
        if (isHomepage) {
            return {
                lat: 39.9407401, // Midpoint between Boulder and Arvada
                lng: -105.1707536
            };
        }
        
        // Check if it's a store location first
        if (storeLocations[location]) {
            return storeLocations[location];
        }
        
        // Otherwise, use town center coordinates
        return townLocations[location] || null;
    };
    
    const centerCoords = getLocationCoords();
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>

            <LoadScript
                googleMapsApiKey="AIzaSyBhckNcG0QXLFtnGZBDAQDc3n5Q6KWiy08" // Replace with your Google Maps API key
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={centerCoords}
                    zoom={isHomepage ? 10 : 12}
                    options={{
                        styles: [
                            {
                                featureType: 'all',
                                elementType: 'all',
                                stylers: [{ saturation: -20 }]
                            }
                        ],
                        disableDefaultUI: false,
                        zoomControl: true,
                        mapTypeControl: false,
                        streetViewControl: false,
                        fullscreenControl: false
                    }}
                >
                    {isHomepage ? (
                        // Show both store locations on homepage
                        Object.entries(storeLocations).map(([key, coords]) => (
                            <Marker
                                key={key}
                                position={coords}
                                title={key.charAt(0).toUpperCase() + key.slice(1)}
                            />
                        ))
                    ) : (
                        // Show single location with circle for location pages
                        <>
                            <Marker position={centerCoords} />
                            <Circle
                                center={centerCoords}
                                options={circleOptions}
                            />
                        </>
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default React.memo(LocationsMap);
