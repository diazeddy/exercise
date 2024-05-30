import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"', 'sans-serif']
    },    
    extend: {
      colors: {
        blue: "#0085BF",
        green: "#C4F7E8",
        sky: "#A5CCF9"      
      },
      "gradientColorStopPositions": {
        "125%": "125%"
      }
    },
  },
  plugins: [],
};
export default config;
