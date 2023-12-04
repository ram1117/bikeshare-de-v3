import React from "react";

// @ts-expect-error Missing type definitions
import BaseMarkerCluster from "@changey/react-leaflet-markercluster";
import { divIcon, point } from "leaflet";

const createClusterCustomIcon = (cluster: any) =>
  divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className:
      "bg-[#002C08] bg-opacity-100 text-white font-bold !flex items-center justify-center rounded-3xl border-white border-4 border-opacity-50",
    iconSize: point(40, 40, true),
  });

interface MapMarkerClusterProps {
  children: React.ReactNode;
}

function MapMarkerCluster({ children }: MapMarkerClusterProps) {
  return (
    <BaseMarkerCluster
      iconCreateFunction={createClusterCustomIcon}
      showCoverageOnHover={false}
    >
      {children}
    </BaseMarkerCluster>
  );
}

export default MapMarkerCluster;
