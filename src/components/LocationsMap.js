import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '80%', // Use 100% width for full responsiveness
    height: '50vh', // 50% of the viewport height
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    border: '1px solid #ddd' // Light border
};

const center = {
    lat: 39.9407401, // Replace with the latitude of the midpoint between your locations
    lng: -105.1707536  // Replace with the longitude of the midpoint between your locations
};

const location1 = {
    lat: 40.0702236, // Replace with the latitude of your first location
    lng: -105.2007782  // Replace with the longitude of your first location
};

const location2 = {
    lat: 39.8112567, // Replace with the latitude of your second location
    lng: -105.1407289  // Replace with the longitude of your second location
};

const LocationsMap = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>

            <LoadScript
                googleMapsApiKey="AIzaSyBhckNcG0QXLFtnGZBDAQDc3n5Q6KWiy08" // Replace with your Google Maps API key
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    {/* Your map markers here */}
                    <Marker position={location1} />
                    <Marker position={location2} />

                    <></>
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default React.memo(LocationsMap);
