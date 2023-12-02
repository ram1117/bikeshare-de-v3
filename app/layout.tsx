import React from "react"
import type { Metadata } from "next"
import "./globals.css"
import MenuBar from "@/components/menubar/MenuBar"
import { lato, novaSquare } from "@/atoms/fonts"

export const metadata: Metadata = {
  title: "CycleSharing",
  description: "Bike share app for German cities",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${novaSquare.variable} text-primary-text bg-body-bg`}
      >
        <MenuBar />
        <section className="mt-16 text-secondary-text">{children}</section>
      </body>
    </html>
  )
}
