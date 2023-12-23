'use client';

import React, { useEffect, useState } from 'react';
import MapWrapper from '@/components/map/MapWrapper';

function NetworkPage({ params }: { params: { network: string } }) {
  const [networkData, setNetworkData] = useState({ stations: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BIKEDATA_API_URL}/${params.network}`)
      .then((res) => res.json())
      .then((data) => {
        setNetworkData(data.network);
      });
  }, [params.network]);

  useEffect(() => {
    if (networkData.stations.length !== 0) {
      setIsLoading(false);
    }
  }, [networkData]);

  return (
    <div className="flex flex-col items-center justify-start min-h-[90vh] h-max">
      {!isLoading && <MapWrapper networkData={networkData} />}
    </div>
  );
}

export default NetworkPage;
