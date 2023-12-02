import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./atoms/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lato: "var(--font-lato)",
        novaround: "var(--font-novaround)",
        novasquare: "var(--font-novasquare)",
      },
      colors: {
        "menubar-bg": "#013220",
        "primary-text": "#0d0d0d",
        "secondary-text": "#F5F5DC",
        "body-bg": "rgba(77, 140, 87, 0.2)",
      },
    },
  },
  plugins: [],
}
export default config
