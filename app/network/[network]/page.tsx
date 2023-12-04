import React from "react";
import dynamic from "next/dynamic";

const MapWrapper = dynamic(() => import("@/components/map/MapWrapper"), {
  ssr: false,
});

const fetchNetworkDetails = async (networkId: string) => {
  const response = await fetch(
    `http://api.citybik.es/v2/networks/${networkId}`
  );
  if (!response.ok) throw new Error("Error getting Data");
  return response.json();
};

const NetworkPage = async ({ params }: { params: { network: string } }) => {
  const { network: networkData } = await fetchNetworkDetails(params.network);
  return (
    <div className="flex flex-col items-center justify-start min-h-[90vh] h-max">
      <MapWrapper networkData={networkData} />
    </div>
  );
};

export default NetworkPage;
