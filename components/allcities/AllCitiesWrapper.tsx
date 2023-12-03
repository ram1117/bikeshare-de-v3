"use client";

import React, { useState, useEffect } from "react";
import ButtonPanel from "./ButtonPanel";
import CitiesTiles from "../CitiesTiles";

interface AllCitiesWrapperProps {
  data: any;
}

function AllCitiesWrapper({ data }: AllCitiesWrapperProps) {
  const [filterChar, setFilterChar] = useState("");
  const [cities, setCities] = useState(data.cities);
  useEffect(() => {
    if (filterChar !== "") {
      const filteredCities = data.cities.filter(
        (cityObj: any) => cityObj.city.charAt(0) === filterChar
      );
      setCities(filteredCities);
    } else {
      setCities(data.cities);
    }
  }, [filterChar, data.cities]);

  return (
    <div className="flex flex-col justify-center items-center w-11/12 max-w-[1280px]">
      <ButtonPanel
        capitals={data.cityCapitals}
        setFilterChar={setFilterChar}
        filterChar={filterChar}
      />
      <CitiesTiles
        citiesList={cities}
        containerClassName="h-[75vh] lg:h-[70vh] overflow-auto"
      />
    </div>
  );
}

export default AllCitiesWrapper;
