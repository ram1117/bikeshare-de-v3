"use client";

import React from "react";
import ButtonPanelItem from "./ButtonPanelItem";

interface ButtonPanelProps {
  capitals: any;
  setFilterChar: Function;
  filterChar: string;
}

function ButtonPanel({
  capitals,
  setFilterChar,
  filterChar,
}: ButtonPanelProps) {
  const sortedList = [...capitals].sort();

  return (
    <div className="flex gap-1 md:gap-2 flex-wrap items-center justify-center my-8">
      <ButtonPanelItem
        callBackFunction={setFilterChar}
        isActive={filterChar === ""}
      >
        Alle
      </ButtonPanelItem>
      {sortedList.map((char) => (
        <ButtonPanelItem
          callBackFunction={setFilterChar}
          value={char}
          isActive={filterChar === char}
          key={char}
        >
          {char}
        </ButtonPanelItem>
      ))}
    </div>
  );
}

export default ButtonPanel;
