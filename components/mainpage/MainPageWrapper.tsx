import React from "react";
// import ButtonPanel from "./ButtonPanel"
import SearchInput from "./SearchInput";
import CitiesTiles from "./CitiesTiles";

const TOPCITIES = [
  "Berlin",
  "Hamburg",
  "München",
  "Köln",
  "Frankfurt",
  "Stuttgart",
  "Düsseldorf",
  "Dortmund",
];

interface MainPageWrapperProps {
  data: any;
}

function MainPageWrapper({ data }: MainPageWrapperProps) {
  // const [cities, setCities] = useState(data.cities)
  // const [filterByChar, setFilterByChar] = useState("")

  const topCitiesData = data.cities.filter((item: any) =>
    TOPCITIES.includes(item.city)
  );

  const sortedCities = topCitiesData.sort((item1: any, item2: any) =>
    item1.city > item2.city ? 1 : -1
  );

  // useEffect(() => {
  //   if (filterByChar !== "") {
  //     const filteredCities = data.cities.filter(
  //       (cityObj: any) => cityObj.city.charAt(0) === filterByChar
  //     )
  //     setCities(filteredCities)
  //   } else {
  //     setCities(data.cities)
  //   }
  // }, [filterByChar, data.cities])

  return (
    <section className="flex flex-col justify-center items-center w-11/12 max-w-[1280px]">
      {/* <ButtonPanel
        capitals={data.cityCapitals}
        setFilterByChar={setFilterByChar}
      /> */}
      <SearchInput citiesList={data.cities} />
      <CitiesTiles citiesList={sortedCities} />
    </section>
  );
}

export default MainPageWrapper;
