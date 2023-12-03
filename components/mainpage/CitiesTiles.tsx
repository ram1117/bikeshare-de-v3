import React from "react"
import Link from "next/link"

interface CitiesTilesProps {
  citiesList: any
}

function CitiesTiles({ citiesList }: CitiesTilesProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 sm:gap-4 w-[90%] justify-center my-4 md:my-8 auto-rows-fr">
      {citiesList.map((cityObj: any) => (
        <Link href={`details/${cityObj.id}`} key={cityObj.id}>
          <div
            className="p-2 bg-citytile-bg shadow-xl rounded-lg"
            data-href={cityObj.href}
            data-testid="cities"
          >
            <h3 className="font-bold text-md lg:text-base">{cityObj.city}</h3>

            <h4 className="font-semibold text-sm lg:text-md">{cityObj.name}</h4>

            <p className="flex gap-6">
              {` ${cityObj.latitude}`},{` ${cityObj.longitude}`}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CitiesTiles
