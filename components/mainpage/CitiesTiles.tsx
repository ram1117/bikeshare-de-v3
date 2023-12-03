import React from "react"
import Link from "next/link"
import ImageWrapper from "@/atoms/ImageWrapper"
import ArrowIcon from "@/public/icons/icon-arrow-right.svg"

interface CitiesTilesProps {
  citiesList: any
}

function CitiesTiles({ citiesList }: CitiesTilesProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 sm:gap-4 w-full justify-center my-4 md:my-8 auto-rows-fr">
      {citiesList.map((cityObj: any) => (
        <div
          className="p-2 bg-citytile-bg shadow-xl rounded-lg relative"
          data-href={cityObj.href}
          data-testid="cities"
          key={cityObj.id}
        >
          <h3 className="font-bold text-base lg:text-xl pb-1">
            {cityObj.city}
          </h3>

          <h4 className="font-semibold text-sm lg:text-md my-1">
            {cityObj.name}
          </h4>

          <p className="flex gap-6">
            {` ${cityObj.latitude}`},{` ${cityObj.longitude}`}
          </p>
          <Link href={`details/${cityObj.id}`}>
            <div className="h-max w-max absolute right-4 bottom-4">
              <ImageWrapper
                src={ArrowIcon}
                alt="right arrow icon"
                imageSize="h-[28px] w-[28px]"
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default CitiesTiles
