/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f8fafc',
        canvas: '#f8fafc',
        surface: '#ffffff',
        ink: '#111111',
        muted: '#555555',
        accent: {
          DEFAULT: '#ffd43b',
          hover: '#fcc419',
          yellow: '#ffd43b',
          'yellow-light': '#fff3bf',
          mint: '#10b981',
          'mint-light': '#d1fae5',
          coral: '#ff6b6b',
          'coral-light': '#ffe3e3',
          purple: '#8b5cf6',
          'purple-light': '#ede9fe',
          cyan: '#06b6d4',
          'cyan-light': '#e0f2fe',
        },
        brand: {
          blue: '#3b82f6',
          'blue-dark': '#2563eb',
          'blue-light': '#eff6ff',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0 #111111',
        'brutal': '4px 4px 0 #111111',
        'brutal-hover': '6px 6px 0 #111111',
        'brutal-lg': '6px 6px 0 #111111',
      },
      borderRadius: {
        'brutal': '8px',
      },
    },
  },
  plugins: [],
}
