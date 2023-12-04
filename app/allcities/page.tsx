import React from "react";
import { refineBikeData } from "@/utils";
import AllCitiesWrapper from "@/components/allcities/AllCitiesWrapper";

export const fetchBikeData1 = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BIKEDATA_API_URL}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const bikeNetworkData = await res.json();
  const refinedData = refineBikeData(bikeNetworkData);
  return refinedData;
};

const CitiesPage = async () => {
  const refinedData = await fetchBikeData1();
  return (
    <section className="flex flex-col items-center justify-start min-h-[90vh] h-max">
      <AllCitiesWrapper data={refinedData} />
    </section>
  );
};

export default CitiesPage;
