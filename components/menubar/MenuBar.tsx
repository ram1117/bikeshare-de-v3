import React from "react";
import Link from "next/link";
import ImageWrapper from "@/atoms/ImageWrapper";
import AppLogo from "@/public/icons/app-logo.svg";
import HomeIcon from "@/public/icons/icon-home.svg";

function MenuBar() {
  return (
    <nav className="fixed inset-x-0 top-0 flex justify-between items-center p-4 bg-menubar-gradient shadow-lg z-[999]">
      <Link href="/">
        <div className="flex gap-2">
          <ImageWrapper
            src={AppLogo}
            alt="Bicycle logo"
            imageSize="h-[24px] w-[24px]"
          />
          <h1 className="font-semibold lg:font-bold text-lg lg:text-xl font-novasquare text-secondary-text">
            Bike Share <span className="text-xs font-semibold">DE</span>
          </h1>
        </div>
      </Link>
      <Link href="/">
        <ImageWrapper
          src={HomeIcon}
          alt="Home Page Icon"
          imageSize="h-[24px] w-[24px]"
        />
      </Link>
    </nav>
  );
}

export default MenuBar;
