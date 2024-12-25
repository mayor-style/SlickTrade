module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url(https://res.cloudinary.com/dscpwrzng/image/upload/f_auto,q_auto,w_1920,c_fill/v1735142489/photo_2024-07-11_01-20-45_fnssws.jpg)"
      },
      colors:{
        "gray": " rgba(225, 225, 225, .1)",
        "light-black": "rgba(0,0,0,0.5)]",
      },
      screens:{
        'xs':'480px',
        "l":"1130px"
      },
    },
  },
  plugins: [],
}
