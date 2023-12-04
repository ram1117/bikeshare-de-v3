"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ImageWrapper from "@/atoms/ImageWrapper";
import ErrorIcon from "@/public/icons/icon-error.svg";

interface ErrorProps {
  reset: () => void;
}
function Error({ reset }: ErrorProps) {
  const appRouter = useRouter();
  const handleBackClick = () => {
    appRouter.back();
  };

  return (
    <section className="h-[80vh] gap-8 flex flex-col justify-center items-center w-11/12 lg:w-4/5 max-w-[1280px] shadow-xl rounded-xl mx-auto bg-citytile-bg mt-24 text-center">
      <ImageWrapper
        src={ErrorIcon}
        alt="Error Icon"
        imageSize="h-[100px] w-[100px]"
      />
      <h2 className="text-2xl lg:text-4xl font-bold w-4/5">Oops! Kabelsalat</h2>
      <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center">
        <button
          type="button"
          onClick={() => reset()}
          className="py-1 px-8 border rounded-xl hover:bg-body-bg font-bold"
        >
          zurücksetzen
        </button>
        <button
          type="button"
          className="py-1 px-8 border rounded-xl hover:bg-body-bg font-bold"
          onClick={handleBackClick}
        >
          zurück
        </button>
      </div>
    </section>
  );
}

export default Error;
