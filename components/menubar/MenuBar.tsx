import React from "react"
import Link from "next/link"
import ImageWrapper from "@/atoms/ImageWrapper"
import AppLogo from "@/public/icons/app-logo.svg"

function MenuBar() {
  return (
    <nav className="fixed inset-x-0 top-0 flex justify-center items-center md:justify-start px-4 bg-menubar-gradient py-2 shadow-lg">
      <Link href="/">
        <div className="flex gap-2">
          <ImageWrapper
            src={AppLogo}
            alt="Bicycle logo"
            imageSize="h-[24px] w-[24px]"
          />
          <h1 className="font-semibold lg:font-bold text-lg lg:text-xl font-novasquare text-secondary-text">
            Cycle Share
          </h1>
        </div>
      </Link>
    </nav>
  )
}

export default MenuBar
