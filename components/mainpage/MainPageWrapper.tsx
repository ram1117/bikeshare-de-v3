"use client"

import React, { useEffect, useState } from "react"
import ButtonPanel from "./ButtonPanel"
import CitiesTiles from "./CitiesTiles"

interface MainPageWrapperProps {
  data: any
}

function MainPageWrapper({ data }: MainPageWrapperProps) {
  const [cities, setCities] = useState(data.cities)
  const [filterByChar, setFilterByChar] = useState("")

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
    <section>
      <ButtonPanel
        capitals={data.cityCapitals}
        setFilterByChar={setFilterByChar}
      />
      <CitiesTiles citiesList={cities} />
    </section>
  )
}

export default MainPageWrapper
