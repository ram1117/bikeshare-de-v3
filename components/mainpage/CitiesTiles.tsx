import React from "react"
import Link from "next/link"

interface CitiesTilesProps {
  citiesList: any
}

function CitiesTiles({ citiesList }: CitiesTilesProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {citiesList.map((cityObj: any) => (
        <Link href={`details/${cityObj.id}`} key={cityObj.id}>
          <div
            id="city-tile"
            className="border aspect-square"
            data-href={cityObj.href}
            data-testid="cities"
          >
            <h3>{cityObj.city}</h3>
            <p>
              Provider
              <br />
              <span>{cityObj.name}</span>
            </p>
            <p>
              Lat:
              {` ${cityObj.latitude}`}
            </p>
            <p>
              Long:
              {` ${cityObj.longitude}`}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CitiesTiles
