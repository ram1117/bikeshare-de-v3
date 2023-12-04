import React from "react";
import { refineBikeData } from "@/utils";
import MainPageWrapper from "@/components/mainpage/MainPageWrapper";

export const fetchBikeData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BIKEDATA_API_URL}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const bikeNetworkData = await res.json();
  const refinedData = refineBikeData(bikeNetworkData);
  return refinedData;
};

export default async function Home() {
  const refinedData = await fetchBikeData();

  return (
    <section className="flex flex-col items-center justify-start md:justify-center min-h-[90vh] h-max mb-12">
      <MainPageWrapper data={refinedData} />
    </section>
  );
}
