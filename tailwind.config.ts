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
        sans: ['Euclid Circular B, sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        'dark-blue': '#0D1223',
        'blue': '#0850C0',
        'light-blue': '#7EE7E1',
        'lime-green': '#7CED4F',
        'white': '#EDEDED',
        'grey': '#525661'
      },
    },
  },
  plugins: [],
};

export default config;