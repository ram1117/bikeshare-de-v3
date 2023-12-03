"use client";

import React, { useEffect, useState } from "react";
import { replaceUmlauts } from "@/utils";
import Link from "next/link";
import ImageWrapper from "@/atoms/ImageWrapper";
import CloseIcon from "@/public/icons/icon-close.svg";
import SearchIcon from "@/public/icons/icon-search.svg";

interface SearchInputProps {
  citiesList: any;
}

function SearchInput({ citiesList }: SearchInputProps) {
  const [searchString, setSearchString] = useState("");
  const [searchResult, setSearchResult] = useState<any>([]);

  useEffect(() => {
    if (searchString !== "") {
      const filteredList = citiesList.filter((item: any) => {
        const lowecaseCityName = replaceUmlauts(item.city.toLowerCase());
        return lowecaseCityName.startsWith(
          replaceUmlauts(searchString.toLowerCase())
        );
      });
      setSearchResult(filteredList);
    }
  }, [searchString, citiesList]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const searchEntered = searchString !== "";

  return (
    <div className="relative w-full my-4 md:my-8">
      <div className="relative border-4 border-primary-border rounded-lg flex items-stretch">
        <div className="bg-citytile-bg flex items-center justify-center px-2">
          <ImageWrapper
            src={SearchIcon}
            alt="Search Icon"
            imageSize="h-[24px] w-[24px] lg:w-[28px] lg:h-[28px]"
            className="p-1"
          />
        </div>
        <input
          type="text"
          placeholder="Enter City..."
          onChange={handleInputChange}
          className="p-2 w-full bg-body-bg placeholder:text-secondary-text font-bold "
          value={searchString}
        />
        {searchEntered && (
          <button
            type="button"
            className="absolute right-4 top-[25%]"
            onClick={() => setSearchString("")}
          >
            <ImageWrapper
              src={CloseIcon}
              alt="close icon"
              imageSize="h-[22px] w-[22px]"
            />
          </button>
        )}
      </div>

      <div className="z-[90] bg-white w-full absolute">
        {searchEntered && (
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
  );
}

export default SearchInput;
