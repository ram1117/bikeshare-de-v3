import React from 'react';
import dynamic from 'next/dynamic';
import { error } from 'console';

const MapWrapper = dynamic(() => import('@/components/map/MapWrapper'), {
  ssr: false,
});

const fetchNetworkDetails = async (networkId: string) => {
  const response = await fetch(
    `http://api.citybik.es/v2/networks/${networkId}`
  );
  if (!response.ok) console.error(error);
  // const data = response.json();
  console.log(response);
  return undefined;
};

const NetworkPage = async ({ params }: { params: { network: string } }) => {
  const { network: networkData } = await fetchNetworkDetails(params.network);
  const sortedStations = networkData.stations.sort(
    (a: any, b: any) => b.free_bikes - a.free_bikes
  );

  const busyStations = sortedStations.slice(0, 5);

  return (
    <div className="flex flex-col items-center justify-start min-h-[90vh] h-max">
      <MapWrapper networkData={networkData} busyStations={busyStations} />
    </div>
  );
};

export default NetworkPage;
