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
        sans: ['var(--font-euclid)', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        'dark-blue': '#0D1223',
        'blue': '#0850C0',
        'light-blue': '#7EE7E1',
        'lime-green': '#99EE94',
        'white': '#EDEDED',
        'grey': '#525661'
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
};

export default config;