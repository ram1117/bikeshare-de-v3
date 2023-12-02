import { Nova_Round, Lato, Nova_Square } from "next/font/google"

const novaRound = Nova_Round({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-novaround",
})

const novaSquare = Nova_Square({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-novasquare",
})

const lato = Lato({
  weight: ["400", "100", "300", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
})

export { novaRound, novaSquare, lato }
