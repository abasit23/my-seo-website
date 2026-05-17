import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-geist-sans)", "sans-serif"],
      },
      colors: {
        background: "#0a0a0a",
        primary: {
          DEFAULT: "#00f0ff",
          foreground: "#000000",
        },
        secondary: "#ff007f",
        muted: {
          foreground: "#a3a3a3",
        },
      },
    },
  },
  plugins: [],
};
export default config;