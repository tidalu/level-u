"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapPin from "./pin";

interface MapComponentProps {
  items: any
}

const MapComponent = ({ items }: MapComponentProps) => {
  return (
    <MapContainer
      center={[51.726608, 19.637289]}
      zoom={10}
      scrollWheelZoom={true}
      className="w-full rounded-3xl h-[60vh] z-20"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item: any) => (
        <MapPin key={item.cityName} item={item} />
      ))}
    </MapContainer>
  );
};

export default MapComponent;
