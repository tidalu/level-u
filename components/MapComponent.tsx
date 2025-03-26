'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapPin from './pin';
import React from 'react';

interface MapComponentProps {
  items: any;
}

const MapComponent = ({ items }: MapComponentProps) => {
  console.log('items', items);
  return (
    <MapContainer
      center={[41.4725, 69.5906]}
      zoom={12}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      className="w-full rounded-3xl h-[60vh] z-20"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item: any) => (
        <MapPin key={item.cityName} item={item}  />
      ))}
    </MapContainer>
  );
};

export default React.memo(MapComponent);
