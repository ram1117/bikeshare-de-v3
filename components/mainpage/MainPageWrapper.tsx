"use client"

import React, { useEffect, useState } from "react"
import ButtonPanel from "./ButtonPanel"
import CitiesTiles from "./CitiesTiles"

const TOPCITIES = [
  "Berlin",
  "Hamburg",
  "München",
  "Köln",
  "Frankfurt",
  "Stuttgart",
  "Düsseldorf",
  "Dortmund",
]

interface MainPageWrapperProps {
  data: any
}

function MainPageWrapper({ data }: MainPageWrapperProps) {
  const [cities, setCities] = useState(data.cities)
  const [filterByChar, setFilterByChar] = useState("")

  const topCities = cities.filter((item: any) => TOPCITIES.includes(item.city))

  useEffect(() => {
    if (filterByChar !== "") {
      const filteredCities = data.cities.filter(
        (cityObj: any) => cityObj.city.charAt(0) === filterByChar
      )
      setCities(filteredCities)
    } else {
      setCities(data.cities)
    }
  }, [filterByChar, data.cities])

  return (
    <section className="flex flex-col justify-center items-center w-full max-w-[1280px]">
      <ButtonPanel
        capitals={data.cityCapitals}
        setFilterByChar={setFilterByChar}
      />
      <CitiesTiles citiesList={topCities} />
    </section>
  )
}

export default MainPageWrapper
