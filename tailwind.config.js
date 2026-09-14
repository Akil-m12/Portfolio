/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chassis: {
          950: '#070a09',
          900: '#0b0f0e',
          850: '#0f1514',
          800: '#141d1b',
          700: '#1e2b28',
          600: '#2b3d39',
        },
        tactical: {
          emerald: '#22c55e',
          sage: '#4ade80',
          amber: '#f59e0b',
          crimson: '#ef4444',
          cyan: '#06b6d4',
          parchment: '#e8e4dc',
          dim: '#8f9b97',
        }
      },
      fontFamily: {
        sans: ['"Cabinet Grotesk"', '"Space Grotesk"', 'sans-serif'],
        serif: ['"Instrument Serif"', '"Newsreader"', 'serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        display: ['"Bebas Neue"', '"Cabinet Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
        'tactical-mesh': "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
