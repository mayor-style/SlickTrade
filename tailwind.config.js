const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("https://res.cloudinary.com/dscpwrzng/image/upload/f_auto,q_auto,w_1920,c_fill/v1735142489/photo_2024-07-11_01-20-45_fnssws.jpg")'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        'gray': '#231E23',
        'glass': 'rgba(225,225, 225, .1)',
        'light-black': 'rgba(0,0,0,0.5)',
        'gold': '#d4af37',
        'dark-gray': 'rgb(94,94,94)',
        darkGold: '#B8860B',
        card: '#1e293b',
        'card-foreground': '#e2e8f0',
        popover: '#ffffff',
        'popover-foreground': '#000000',
        accent: '#2563eb',
        'accent-foreground': '#ffffff'
      },
      screens: {
        xs: '480px',
        'l': '1130px'
      },
      boxShadow: {
        'gold-shadow': '0px 4px 10px 2px rgba(255, 215, 0, 0.4), 0px 7px 20px rgba(184, 134, 11, 0.4)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    require("tailwindcss-animate")
  ]
}
