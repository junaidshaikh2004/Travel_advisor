import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ setCoordinates, setBounds, coordinates, getPlacesData }) => {

  const MapEventHandler = () => {
    useMapEvents({
      moveend(e) {
        
        const center = e.target.getCenter();
        setCoordinates({ lat: center.lat, lng: center.lng });
        
        const bounds = e.target.getBounds();
        setBounds({ ne: bounds.getNorthEast(), sw: bounds.getSouthWest() });
      },

    });
    return null;
  };

  

  return (
    <div className='h-full w-full'> 
      <MapContainer 
        center={coordinates} 
        zoom={14} 
        className='h-[600px] w-full'  
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* <Marker position={coordinates}>
          <Popup>A marker at your current location!</Popup>
        </Marker> */}
        <MapEventHandler />
      </MapContainer>
    </div>
  );
};

export default Map;



