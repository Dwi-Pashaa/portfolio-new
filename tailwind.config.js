/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F4F8FC',
        surface: '#FFFFFF',
        ink: '#0F172A',
        brand: {
          blue: '#2563EB',
          'blue-dark': '#1D4ED8',
          'blue-light': '#DBEAFE',
          'blue-soft': '#EFF6FF',
        },
        accent: {
          yellow: '#FFD000',
          'yellow-light': '#FFF066',
          mint: '#10B981',
          'mint-light': '#D1FAE5',
          coral: '#FF6B6B',
          'coral-light': '#FFE4E6',
          purple: '#818CF8',
          'purple-light': '#EDE9FE',
          orange: '#F97316',
          'orange-light': '#FFEDD5',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px #0F172A',
        'brutal': '4px 4px 0px #0F172A',
        'brutal-lg': '6px 6px 0px #0F172A',
        'brutal-xl': '8px 8px 0px #0F172A',
        'brutal-2xl': '10px 10px 0px #0F172A',
        'brutal-white': '4px 4px 0px #FFFFFF',
        'brutal-yellow': '4px 4px 0px #FFD000',
        'brutal-blue': '4px 4px 0px #2563EB',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-slow': 'marquee 35s linear infinite',
        'blink': 'blink 1s step-start infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
