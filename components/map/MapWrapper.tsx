"use client";

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapMarker from "./MapMarker";

interface MapWrapperProps {
  networkData?: any;
}

function MapWrapper({ networkData }: MapWrapperProps) {
  const { location } = networkData;
  return (
    <div className="w-full flex flex-col items-center p-2 max-w-[1280px]">
      <h2>{location?.city}</h2>
      <h3>{networkData.name}</h3>
      <MapContainer
        center={[location?.latitude, location?.longitude]}
        zoom={13}
        className="h-[70vh] md:h-[60vh] w-full lg:w-4/5 rounded-xl shadow-xl"
      >
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />
        {networkData.stations.map((station: any) => (
          <MapMarker station={station} key={station.id} />
        ))}
      </MapContainer>
    </div>
  );
}

export default MapWrapper;
