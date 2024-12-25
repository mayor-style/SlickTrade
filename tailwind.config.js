module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/imgs/hero2.jpg')", 
      },
      colors:{
        "gray": " rgba(225, 225, 225, .1)",
      },
    },
  },
  plugins: [],
}
