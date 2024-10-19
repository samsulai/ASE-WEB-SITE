/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-main":"#4778C8",
        // "app-main":"#2E4467",
        "app-light":"#f2f6fc",
        "app-dark":"#2E4467",
      },
      backgroundImage:{
        
        'Gaeton': 'url(/static/img/people/gaetan-nandong.webp)',
        'Mahounan': 'url(/static/img/people/mahounan.jpeg)',
      },
    },
  },
  plugins: [],
}