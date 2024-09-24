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
        h1: ['Inter', 'bold'],
        h2: ['Inter', 'bold'],
        h3: ['Inter', 'bold'],
        body: ['Nokora', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        'dark-blue': '#01233F',
        'blue': '#205673',
      },
      backgroundImage: {
        'hero': "url('/images/hero-bg.png')",
        'services': "url('/images/service-bg.png')"
      }
    },
  },
  plugins: [],
};

export default config;