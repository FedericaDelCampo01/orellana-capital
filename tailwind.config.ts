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
        h1: ['Inter', 'sans-serif'],
        h2: ['Inter', 'sans-serif'],
        h3: ['Inter', 'sans-serif'],
        body: ['Nokora', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        'dark-blue': '#01233F',
        'blue': '#205673',
      },
      backgroundImage: {
        'hero': "url('/images/hero-bg.webp')",
        'services': "url('/images/service-bg.webp')"
      }
    },
  },
  plugins: [],
};

export default config;