module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://res.cloudinary.com/dscpwrzng/image/upload/v1735085831/hero2_ydcjnd.jpg')", 
      },
      colors:{
        "gray": " rgba(225, 225, 225, .1)",
      },
    },
  },
  plugins: [],
}
