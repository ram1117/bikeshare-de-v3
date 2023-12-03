"use client"

import React, { useEffect, useState } from "react"
import { replaceUmlauts } from "@/utils"
import Link from "next/link"

interface SearchInputProps {
  citiesList: any
}

function SearchInput({ citiesList }: SearchInputProps) {
  const [searchString, setSearchString] = useState("")
  const [searchResult, setSearchResult] = useState<any>([])

  useEffect(() => {
    if (searchString !== "") {
      const filteredList = citiesList.filter((item: any) => {
        const lowecaseCityName = replaceUmlauts(item.city.toLowerCase())
        return lowecaseCityName.startsWith(
          replaceUmlauts(searchString.toLowerCase())
        )
      })
      setSearchResult(filteredList)
    }
  }, [searchString, citiesList])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value)
  }

  return (
    <div className="relative w-full my-4 md:my-8">
      <input
        type="text"
        placeholder="Enter City..."
        onChange={handleInputChange}
        className="p-2 w-full bg-body-bg border-2 border-primary-border rounded-lg placeholder:text-secondary-text font-bold"
      />
      <div className="z-[999] bg-white w-full absolute ">
        {searchString !== "" && (
          <ul className="max-h-[40vh] overflow-auto">
            {searchResult.length === 0 && (
              <li
                key={0}
                className="text-primary-text p-2 md:p-4 border-b-2 border-dotted"
              >
                <p className="font-bold text-sm md:text-base">
                  No Result Found...
                </p>
              </li>
            )}
            {searchResult.map((item: any) => (
              <Link href={`details/${item.id}`} key={item.id}>
                <li className="text-primary-text p-2 md:p-4 border-b-2 border-dotted">
                  <p className="font-bold text-sm md:text-base">{item.city}</p>
                  <p className="text-xs md:text-sm">{item.name}</p>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default SearchInput
