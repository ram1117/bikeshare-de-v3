import React from "react"
import { refineBikeData } from "@/utils"

export const fetchBikeData = async () => {
  const res = await fetch("http://api.citybik.es/v2/networks")

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const bikeNetworkData = await res.json()
  const refinedData = refineBikeData(bikeNetworkData)
  return refinedData
}

export default async function Home() {
  // const refinedData = await fetchBikeData()

  return (
    <section className="flex flex-col items-center justify-between">
      <h1 className="text-primary-text">Cycle Sharing</h1>
    </section>
  )
}
