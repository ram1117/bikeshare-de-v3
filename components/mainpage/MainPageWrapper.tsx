import React from "react";
// import ButtonPanel from "./ButtonPanel"
import Link from "next/link";
import SearchInput from "./SearchInput";
import CitiesTiles from "../CitiesTiles";

const TOPCITIES = [
  "Berlin",
  "Hamburg",
  "München",
  "Köln",
  "Düsseldorf",
  "Dortmund",
];

interface MainPageWrapperProps {
  data: any;
}

function MainPageWrapper({ data }: MainPageWrapperProps) {
  const topCitiesData = data.cities.filter((item: any) =>
    TOPCITIES.includes(item.city)
  );

  const sortedCities = topCitiesData.sort((item1: any, item2: any) =>
    item1.city > item2.city ? 1 : -1
  );

  return (
    <div className="flex flex-col justify-center items-center w-11/12 max-w-[1280px]">
      <SearchInput citiesList={data.cities} />
      <CitiesTiles citiesList={sortedCities} />
      <Link href="/allcities">
        <div className="bg-citytile-bg rounded-lg shadow-xl px-12 py-4 font-bold">
          See All Cities..
        </div>
      </Link>
    </div>
  );
}

export default MainPageWrapper;
