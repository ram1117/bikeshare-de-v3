import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import MenuBar from "@/components/menubar/MenuBar";
import { lato, novaSquare } from "@/atoms/fonts";

export const metadata: Metadata = {
  title: "BikeShareDE",
  description: "Bike share app for German cities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-body-img-bg bg-auto md:bg-cover bg-no-repeat min-h-screen"
    >
      <body
        className={`${lato.variable} ${novaSquare.variable} text-primary-text min-w-screen`}
      >
        <MenuBar />

        <main className="mt-16 text-secondary-text">{children}</main>
      </body>
    </html>
  );
}
