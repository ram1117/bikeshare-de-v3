import React from 'react';
import MapWrapper from '@/components/map/MapWrapper';

const fetchNetworkDetails = async (networkId: string) => {
  const response = await fetch(
    `http://api.citybik.es/v2/networks/${networkId}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (!response.ok) throw new Error('Error getting data');
  const data = await response.json();
  console.log(data);
  return data;
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
