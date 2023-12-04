import React from "react";
import AllCitiesWrapper from "@/components/allcities/AllCitiesWrapper";
import { fetchBikeData } from "../page";

const CitiesPage = async () => {
  const refinedData = await fetchBikeData();
  return (
    <section className="flex flex-col items-center justify-start min-h-[90vh] h-max">
      <AllCitiesWrapper data={refinedData} />
    </section>
  );
};

export default CitiesPage;
