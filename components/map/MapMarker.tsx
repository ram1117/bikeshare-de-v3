import React from "react";
import { Popup, Marker } from "react-leaflet";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapMarkerProps {
  station: any;
}

const MarkerIcon = icon({
  iconUrl: "/icons/icon-marker-1.svg",
  iconRetinaUrl: "/icons/icon-marker-1.svg",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  // shadowUrl: "/static/leaflet/marker-shadow.png",
  // shadowRetinaUrl: "/static/leaflet/marker-shadow.png",
  // shadowSize: [41, 41],
  // shadowAnchor: [12, 41],
});

function MapMarker({ station }: MapMarkerProps) {
  return (
    <Marker position={[station.latitude, station.longitude]} icon={MarkerIcon}>
      <Popup>
        <h2>{station.name}</h2>
        <h2>{station.free_bikes}</h2>
        <h2>{station.empty_slots === null ? " N/A" : station.empty_slots}</h2>
        <input
          className="coordinates"
          readOnly
          value={`${station.latitude} , ${station.longitude}`}
        />
      </Popup>
    </Marker>
  );
}

export default MapMarker;
