"use client";

import React from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapMarker from "./MapMarker";
import MapMarkerCluster from "./MapMarkerCluster";
import PageHeader from "./PageHeader";

interface MapWrapperProps {
  networkData: any;
  busyStations: any;
}

function MapWrapper({ networkData, busyStations }: MapWrapperProps) {
  const { location } = networkData;
  return (
    <div className="w-full flex flex-col items-center p-4 max-w-[1280px] lg:mt-12">
      <PageHeader
        className="w-full text-center lg:hidden"
        city={location?.city}
        network={networkData.name}
      />

      <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch gap-4 lg:gap-8">
        <MapContainer
          center={[location?.latitude, location?.longitude]}
          zoom={13}
          className="h-[60vh] md:h-[60vh] lg:h-[70vh] min-h-[560px] w-11/12 lg:w-3/5 rounded-xl shadow-xl z-[888]"
          zoomControl={false}
        >
          <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />
          <ZoomControl position="bottomright" />
          <MapMarkerCluster>
            {networkData.stations.map((station: any) => (
              <MapMarker station={station} key={station.id} />
            ))}
          </MapMarkerCluster>
        </MapContainer>
        <div className="w-11/12 lg:w-2/5 flex flex-col items-center gap-4 p-4 rounded-xl bg-citytile-bg shadow-xl">
          <PageHeader
            className="w-full hidden lg:block"
            city={location?.city}
            network={networkData.name}
          />
          <ul className="w-full flex flex-col gap-4">
            {busyStations.map((station: any) => (
              <li key={station.id} className="border-b border-dotted">
                <div>
                  <h2 className="text-base lg:text-lg font-semibold">
                    {station.name}
                  </h2>
                  <h3 className="font-md text-sm lg:text-base">
                    Freie Bikes:
                    {"  "}
                    {station.free_bikes}
                  </h3>
                  <h3 className="font-md text-sm lg:text-base">{`${station.latitude} , ${station.longitude}`}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MapWrapper;
