import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C8A97E',     // Soft Gold / Champagne
        secondary: '#F5EFE6',   // Cream / Alabaster
        accent: '#8B6B4A',      // Deep Bronze / Earth
        textDark: '#2B2B2B',    // Charcoal Elegant
        bgLight: '#FFFFFF',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;