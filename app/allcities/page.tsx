import React from "react";
import { refineBikeData } from "@/utils";
import AllCitiesWrapper from "@/components/allcities/AllCitiesWrapper";

export const fetchBikeData = async () => {
  const res = await fetch("http://api.citybik.es/v2/networks");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const bikeNetworkData = await res.json();
  const refinedData = refineBikeData(bikeNetworkData);
  return refinedData;
};

const AllCitiesPage = async () => {
  const refinedData = await fetchBikeData();
  return (
    <section className="flex flex-col items-center justify-start min-h-[90vh] h-max">
      <AllCitiesWrapper data={refinedData} />
    </section>
  );
};

export default AllCitiesPage;
