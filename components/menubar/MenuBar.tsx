import React from "react"
import Link from "next/link"

function MenuBar() {
  return (
    <nav className="fixed inset-x-0 top-0 flex flex-start px-4 bg-menubar-bg py-2 shadow-xl">
      <Link href="/">
        <h1 className="font-semibold lg:font-bold text-lg lg:text-xl font-novasquare text-secondary-text">
          Cycle Share
        </h1>
      </Link>
    </nav>
  )
}

export default MenuBar
