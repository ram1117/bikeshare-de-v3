"use client"

import React from "react"

interface ButtonPanelProps {
  capitals: any
  setFilterByChar: Function
}

function ButtonPanel({ capitals, setFilterByChar }: ButtonPanelProps) {
  const sortedList = [...capitals].sort()
  const handleClick = (char: string) => {
    setFilterByChar(char)
  }

  const handleReset = () => {
    setFilterByChar("")
  }

  return (
    <div className="flex gap-2 flex-wrap items-center justify-center">
      <button
        type="button"
        className="p-2 border-2"
        onClick={() => handleReset()}
      >
        All
      </button>
      {sortedList.map((char) => (
        <button
          type="button"
          className="p-2 border-2"
          key={char}
          onClick={() => handleClick(char)}
          data-testid="alphabets"
        >
          {char}
        </button>
      ))}
    </div>
  )
}

export default ButtonPanel
