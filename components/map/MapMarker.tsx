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
  iconSize: [32, 32],
  iconAnchor: [12, 24],
});

function MapMarker({ station }: MapMarkerProps) {
  return (
    <Marker position={[station.latitude, station.longitude]} icon={MarkerIcon}>
      <Popup>
        <div>
          <h2 className="font-bold text-sm lg:text-lg w-[70%] capitalize">
            {station.name}
          </h2>
          <h2 className="font-md text-sm lg:text-base">
            Freie Bikes: {station.free_bikes}
          </h2>
          <h2 className="font-md text-sm lg:text-base">
            leere Stellplätze:{" "}
            {station.empty_slots === null ? " N/A" : station.empty_slots}
          </h2>
          <h2 className="font-md text-sm lg:text-base">Koordinaten:</h2>
          <h2 className="font-md text-sm lg:text-base">{`${station.latitude} , ${station.longitude}`}</h2>
        </div>
      </Popup>
    </Marker>
  );
}

export default MapMarker;
