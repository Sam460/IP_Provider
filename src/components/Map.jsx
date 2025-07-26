// Map.js

import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { RiUserLocationFill } from 'react-icons/ri';

// Map container dimensions
const containerStyle = {
  width: '100%',
  height: '100%',
};

// Default center (India)
const centerDefault = {
  lat: 20.5937,
  lng: 78.9629,
};

// Google Maps API Key
const API_KEY = 'AIzaSyA2BxbjaRRNPaVTI156GtZtXTpozApKrFI';

const Map = ({ lat, lon }) => {
  // Actual center based on props or fallback
  const center = {
    lat: lat || centerDefault.lat,
    lng: lon || centerDefault.lng,
  };

  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
  });

  // Show loading placeholder
  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        <Marker
          position={center}
          icon={{
            path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z',
            fillColor: 'blue',
            fillOpacity: 1,
            strokeWeight: 1,
            scale: 1.5,
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
